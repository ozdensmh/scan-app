import React from 'react';
import AnimatedContent from '../components/AnimatedContent';

const ExportShare: React.FC = () => {
  const navTitle = 'EXPORT & SHARE';
  const contentHeader = 'All-Round Conversion';
  const contentText = ['Export your scans as PDF,JPG,ZIP,TXT and Word.'];
  const buttonText = 'Learn More';
  const animateImages = [
    {
      imageName: 'ExportShare-1.png',
      startAnimation: { y: '100%' },
      duringAnimation: { y: '0%' },
      transitionAnimation: { duration: 0.5, ease: 'easeOut' },
    },
    {
      imageName: 'ExportShare-2.png',
      startAnimation: {
        y: '100%',
        left: '50%',
        x: '-50%',
        rotate: '40deg',
        width: '6.6%',
      },
      duringAnimation: { y: '-100%', left: '-5%', rotate: '0deg' },
      transitionAnimation: { duration: 0.5, ease: 'easeOut', delay: 0.5 },
    },
    {
      imageName: 'ExportShare-3.png',
      startAnimation: {
        y: '100%',
        left: '50%',
        x: '-50%',
        rotate: '26deg',
        width: '43.5%',
      },
      duringAnimation: { y: '0%', left: '14%', rotate: '-0deg' },
      transitionAnimation: { duration: 0.5, ease: 'easeOut', delay: 0.8 },
    },
    {
      imageName: 'ExportShare-4.png',
      startAnimation: {
        y: '100%',
        left: '50%',
        x: '-50%',
        width: '35.5%',
      },
      duringAnimation: { y: '-25%', left: '50%' },
      transitionAnimation: { duration: 0.5, ease: 'easeOut', delay: 1.1 },
    },
    {
      imageName: 'ExportShare-5.png',
      startAnimation: {
        y: '100%',
        left: '50%',
        x: '-50%',
        rotate: '-26deg',
        width: '43.5%',
      },
      duringAnimation: { y: '0%', left: '90%', rotate: '-0deg' },
      transitionAnimation: { duration: 0.5, ease: 'easeOut', delay: 1.4 },
    },
  ];
  const privateKey = 'export_share_animation';

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

export default ExportShare;
