import React from 'react';
import iconExternal from '../assets/icon-external.svg';
import { type GameGiveaway } from './api';

import styles from './Card.module.less';

type CardProps = {
  giveaway: GameGiveaway;
};

const Card: React.FC<CardProps> = ({ giveaway }) => (
  <li className={styles.cardContainer}>
    <a className={styles.cardLinkContainer} href={giveaway.openGiveAwayUrl}>
      <div className={styles.cardContent}>
        <img
          className={styles.productImage}
          src={giveaway.image}
          alt={giveaway.title}
        />
        <h2>{giveaway.title}</h2>
        <p className={styles.productPlatforms}>
          {giveaway.platforms.map((platform) => (
            <span key={platform.trim()} className={styles.productPlatform}>
              {platform.replace(' ', ' ').trim()}
            </span>
          ))}
        </p>
      </div>
      <p className={styles.productWorth}>
        <span className={styles.productFreePill}>FREE</span>
        <s>{giveaway.worth === 'N/A' ? '' : giveaway.worth}</s>
      </p>
      <div className={styles.cardButton}>
        CLAIM NOW
        <img
          src={iconExternal}
          alt="External"
          className={styles.cardIconExternal}
        />
      </div>
    </a>
  </li>
);

export default Card;
