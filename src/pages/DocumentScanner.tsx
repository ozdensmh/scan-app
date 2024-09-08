import React from 'react';
import AnimatedContent from '../components/AnimatedContent';

const DocumentScanner: React.FC = () => {
  const navTitle = 'DOCUMENT SCANNER';
  const contentHeader = 'Scan with Ease';
  const contentText = [
    'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  ];
  const buttonText = 'Learn More';
  // pass the animation images to the animateImages array
  const animateImages = [
    {
      imageName: 'DocumentScanner-1.png',
      startAnimation: { y: '100%' },
      duringAnimation: { y: '0%' },
      transitionAnimation: { duration: 0.5, ease: 'easeOut' },
    },
  ];
  const privateKey = 'document_scanner_animation';

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

export default DocumentScanner;
