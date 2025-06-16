import React from 'react';
import styles from './Card.module.less';
import iconExternal from '../assets/icon-external.svg';

export type GameGiveaway = {
  id: number;
  title: string;
  platforms: string;
  open_giveaway_url: string;
  image: string;
};

type CardProps = {
  giveaway: GameGiveaway;
};

const Card: React.FC<CardProps> = ({ giveaway }) => (
  <li className={styles.cardContainer}>
    <div className={styles.cardContent}>
      <img src={giveaway.image} alt={giveaway.title} width={300} />
      <h2>{giveaway.title}</h2>
      <p>{giveaway.platforms}</p>
    </div>
    <a className={styles.cardButton} href={giveaway.open_giveaway_url}>
      CLAIM NOW
      <img src={iconExternal} alt="External" className={styles.iconExternal} />
    </a>
  </li>
);

export default Card;
