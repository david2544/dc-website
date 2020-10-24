import React from 'react';
import styles from './styles.module.scss';

interface CardProps {
  heading: string;
  content: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card: React.FC<CardProps> = ({ heading, content }) => (
  <div className={styles.cardWrapper}>
    <h2>{heading}</h2>
    <div className={styles.content}>{content}</div>
  </div>
);

export default Card;
