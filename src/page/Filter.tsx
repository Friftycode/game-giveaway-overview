import type { FC } from 'react';
import styles from './Filter.module.less';

interface PlatformFilterProps {
  platforms: string[];
  selectedPlatforms: string[];
  onToggle: (platform: string) => void;
  onSelectAll: () => void;
}

const PlatformFilter: FC<PlatformFilterProps> = ({
  platforms,
  selectedPlatforms,
  onToggle,
  onSelectAll,
}) => (
  <aside className={styles.filterContainer}>
    <h2>Platforms</h2>
    <ul className={styles.filterList}>
      <li>
        <label className={styles.filterTag}>
          <input
            className={styles.filterTag}
            onChange={onSelectAll}
            type="checkbox"
            checked={selectedPlatforms.length === platforms.length}
            style={{ marginRight: 8 }}
          />
          All
        </label>
      </li>
      {platforms.map((platform) => (
        <li key={platform}>
          <label className={styles.filterTag}>
            <input
              className={styles.filterTag}
              onChange={() => onToggle(platform)}
              type="checkbox"
              checked={selectedPlatforms.includes(platform)}
              readOnly
            />
            {platform}
          </label>
        </li>
      ))}
    </ul>
  </aside>
);

export default PlatformFilter;
