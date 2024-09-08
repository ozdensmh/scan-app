export namespace AnimatedContent {
  export interface AnimateImages {
    imageName: string;
    startAnimation: {
      y?: string;
      scale?: number;
      top?: string;
      bottom?: string;
      left?: string;
      x?: string;
      right?: number;
      width?: string;
      opacity?: number;
      rotate?: string;
    };
    duringAnimation: {
      y?: string;
      scale?: number;
      top?: string;
      bottom?: string;
      left?: string;
      x?: string;
      right?: number;
      width?: string;
      opacity?: number;
      rotate?: string;
    };
    transitionAnimation: { duration: number; ease: string; delay?: number };
  }

  export interface Props {
    navTitle: string;
    contentHeader: string;
    contentText: string[];
    buttonText: string;
    privateKey: string;
    animateImages: AnimateImages[];
  }
}

export type AnimatedContentProps = AnimatedContent.Props;
export type AnimatedContentImages = AnimatedContent.AnimateImages;
