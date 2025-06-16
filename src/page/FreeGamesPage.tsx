import React, { useEffect, useState } from 'react';
import { fetchGiveaways, type GameGiveaway } from './api';
import Card from './Card';
import styles from './FreeGamesPage.module.less';

const FreeGamesPage: React.FC = () => {
  const [giveaways, setGiveaways] = useState<GameGiveaway[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <main className={styles.pageContainer}>
      <h1>Free Game Giveaways</h1>
      {loading && <p>Loading giveaways...</p>}
      {error && <p style={{ color: 'var(--color-red)' }}>{error}</p>}
      {!loading && !error && (
        <ul className={styles.cardList}>
          {giveaways.map((giveaway) => (
            <Card key={giveaway.id} giveaway={giveaway} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default FreeGamesPage;
