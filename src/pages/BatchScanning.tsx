import React from 'react';
import AnimatedContent from '../components/AnimatedContent';

const BatchScanning: React.FC = () => {
  const navTitle = 'BATCH SCAN';
  const contentHeader = 'Multiple Page Scan';
  const contentText = [
    'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  ];
  const buttonText = 'Learn More';
  const animateImages = [
    {
      imageName: 'BatchScanning-1.png',
      startAnimation: { y: '100%' },
      duringAnimation: { y: '0%' },
      transitionAnimation: { duration: 0.5, ease: 'easeOut' },
    },
    {
      imageName: 'BatchScanning-2.png',
      startAnimation: {
        y: '110%',
        left: '50%',
        x: '-50%',
        scale: 1.2,
        width: '66.4%',
      },
      duringAnimation: { y: '0%', scale: 1 },
      transitionAnimation: { duration: 0.3, ease: 'easeOut', delay: 0.5 },
    },
    {
      imageName: 'BatchScanning-3.png',
      startAnimation: {
        y: '110%',
        left: '50%',
        x: '-50%',
        scale: 1.2,
        width: '78.1%',
      },
      duringAnimation: { y: '0%', scale: 1, bottom: '-17px' },
      transitionAnimation: { duration: 0.3, ease: 'easeOut', delay: 0.8 },
    },
    {
      imageName: 'BatchScanning-4.png',
      startAnimation: {
        y: '110%',
        left: '50%',
        x: '-50%',
        scale: 1.2,
        width: '82.6%',
      },
      duringAnimation: { y: '0%', scale: 1, bottom: '-15px' },
      transitionAnimation: { duration: 0.3, ease: 'easeOut', delay: 1.1 },
    },
  ];
  const privateKey = 'batch_scanning_animation';

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

export default BatchScanning;
