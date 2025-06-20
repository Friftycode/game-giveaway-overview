import { type FC, useEffect, useState } from 'react';
import { fetchGiveaways, type GameGiveaway } from './api';
import Card from './Card';
import Filter from './Filter';

import styles from './FreeGamesPage.module.less';

const FreeGamesPage: FC = () => {
  const [giveaways, setGiveaways] = useState<GameGiveaway[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  useEffect(() => {
    fetchGiveaways()
      .then((data) => {
        setGiveaways(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching giveaways games:', err);
        setError('Failed to fetch giveaways games.');
        setLoading(false);
      });
  }, []);

  const allPlatforms = Array.from(
    new Set(giveaways.flatMap((g) => g.platforms))
  );

  const onToggle = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const onSelectAll = () =>
    setSelectedPlatforms(
      selectedPlatforms.length < allPlatforms.length ? allPlatforms : []
    );

  const filteredGiveaways =
    selectedPlatforms.length === 0
      ? giveaways
      : giveaways.filter((g) =>
          g.platforms.some((p) => selectedPlatforms.includes(p))
        );

  return (
    <main className={styles.mainContainer}>
      <h1>Free Game Giveaways</h1>
      <Filter
        platforms={allPlatforms}
        selectedPlatforms={selectedPlatforms}
        onToggle={onToggle}
        onSelectAll={onSelectAll}
      />
      {loading && <p>Loading giveaways...</p>}
      {error && <p style={{ color: 'var(--color-red)' }}>{error}</p>}
      {!loading && !error && (
        <ul className={styles.cardList}>
          {filteredGiveaways.map((giveaway) => (
            <Card key={giveaway.id} giveaway={giveaway} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default FreeGamesPage;
