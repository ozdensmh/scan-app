import React, { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/AnimatedContent.module.css';
import AnimatedImage from './AnimatedImage';
import RightContent from './RightContent';
import { AnimatedContentProps } from './types/AnimatedContent';

const AnimatedContent: FC<AnimatedContentProps> = ({
  navTitle,
  contentHeader,
  contentText,
  buttonText,
  privateKey,
  animateImages,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={privateKey}
    >
      <div className={styles.animated_content_container}>
        <div className={styles.animated_content}>
          <div className={`${styles.animation_image_container}`}>
            <AnimatedImage animateImages={animateImages} navTitle={navTitle} />
          </div>
          <RightContent
            title={navTitle}
            header={contentHeader}
            text={contentText}
            buttonText={buttonText}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedContent;
