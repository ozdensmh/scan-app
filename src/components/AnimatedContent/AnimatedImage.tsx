import React from 'react';

import { motion } from 'framer-motion';

import { AnimatedImageProps } from './types/AnimatedImage';

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  animateImages,
  navTitle,
}) => {
  return (
    <>
      {animateImages.map((image, index) => {
        const {
          imageName,
          startAnimation,
          duringAnimation,
          transitionAnimation,
        } = image;

        return (
          <motion.img
            initial={startAnimation}
            animate={duringAnimation}
            transition={transitionAnimation}
            key={index}
            src={`src/assets/images/contentAnimations/${imageName}`}
            alt={`animation image ${navTitle}`}
          />
        );
      })}
    </>
  );
};

export default AnimatedImage;
