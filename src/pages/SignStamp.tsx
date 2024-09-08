import React from 'react';
import AnimatedContent from '../components/AnimatedContent';

const SignStamp: React.FC = () => {
  const navTitle = 'SIGN & STAMP';
  const contentHeader = 'One-Tap Focus';
  const contentText = [
    'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  ];
  const buttonText = 'Learn More';
  // pass the animation images to the animateImages array
  const animateImages = [
    {
      imageName: 'SignStamp-1.png',
      startAnimation: { y: '100%' },
      duringAnimation: { y: '0%' },
      transitionAnimation: { duration: 0.5, ease: 'easeOut' },
    },
    {
      imageName: 'SignStamp-2.png',
      startAnimation: {
        scale: 0,
        top: '30%',
        x: '50%',
        right: 0,
        width: '60%',
      },
      duringAnimation: { scale: 1 },
      transitionAnimation: { duration: 0.3, ease: 'easeOut', delay: 0.8 },
    },
    {
      imageName: 'SignStamp-3.png',
      startAnimation: { scale: 0, top: '50%', x: '-50%', width: '60%' },
      duringAnimation: { scale: 1 },
      transitionAnimation: { duration: 0.3, ease: 'easeOut', delay: 0.5 },
    },
  ];
  const privateKey = 'sign_stamp_animation';

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

export default SignStamp;
