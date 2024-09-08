import React, { FC } from 'react';
import styles from './styles/AnimatedContent.module.css';

interface RightContentProps {
  title: string;
  header: string;
  text: string[];
  buttonText: string;
}

const RightContent: FC<RightContentProps> = ({
  title,
  header,
  text,
  buttonText,
}) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.header}>{header}</h2>
      {text.map((text, index) => (
        <p key={index} className={styles.text}>
          {text}
        </p>
      ))}
      <button type="button" className={styles.button}>
        {buttonText}
      </button>
    </div>
  );
};

export default RightContent;
