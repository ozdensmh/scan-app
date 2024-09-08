import React from 'react';
import AnimatedContent from '../components/AnimatedContent';

const AdvancedFilters: React.FC = () => {
  const navTitle = 'ADVANCED FILTERS';
  const contentHeader = 'Unique Filters';
  const contentText = [
    'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  ];
  const buttonText = 'Learn More';
  const animateImages = [
    {
      imageName: 'AdvancedFilters-1.png',
      startAnimation: { y: '100%' },
      duringAnimation: { y: '0%' },
      transitionAnimation: { duration: 0.5, ease: 'easeOut' },
    },
    {
      imageName: 'AdvancedFilters-2.png',
      startAnimation: {
        opacity: 0,
        x: '-70%',
        width: '11.7%',
      },
      duringAnimation: { opacity: 1 },
      transitionAnimation: { duration: 0.2, ease: 'easeOut', delay: 0.5 },
    },
    {
      imageName: 'AdvancedFilters-3.png',
      startAnimation: {
        opacity: 0,
        right: 0,
        x: '70%',
        width: '11.7%',
      },
      duringAnimation: { opacity: 1 },
      transitionAnimation: { duration: 0.2, ease: 'easeOut', delay: 0.7 },
    },
  ];
  const privateKey = 'advanced_filters_animation';

  return (
    <AnimatedContent
      navTitle={navTitle}
      contentHeader={contentHeader}
      contentText={contentText}
      buttonText={buttonText}
      animateImages={animateImages}
      privateKey={privateKey}
    />
  );
};

export default AdvancedFilters;
