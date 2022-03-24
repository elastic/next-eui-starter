import { css } from '@emotion/react';

export const homeIllustration = euiTheme => ({
  homeIllustration: css`
    position: relative;
    display: flex;
    justify-content: center;

    @media (min-width: ${euiTheme.breakpoint.m}px) {
      justify-content: flex-end;
    }
  `,
  homeIllustrationEffect: css`
    display: block;
    position: relative;

    .homeIllustration__EffectSVG {
      transform: perspective(1600px);
      transform-style: preserve-3d;
      transition: all 0.3s ease-in-out;
      width: 100%;
      height: auto;

      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .homeIllustration__TopLeftCorner {
      height: 50%;
      left: 0;
      position: absolute;
      top: 0;
      width: 50%;
      z-index: 300;

      &:hover ~ .homeIllustration__EffectSVG {
        transform: perspective(1600px) rotateX(-5deg) rotateY(5deg);
      }
    }

    .homeIllustration__TopRightCorner {
      height: 50%;
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      z-index: 300;

      &:hover ~ .homeIllustration__EffectSVG {
        transform: perspective(1600px) rotateX(-5deg) rotateY(-5deg);
      }
    }

    .homeIllustration__BottomLeftCorner {
      bottom: 0;
      height: 50%;
      left: 0;
      position: absolute;
      width: 50%;
      z-index: 300;

      &:hover ~ .homeIllustration__EffectSVG {
        transform: perspective(1600px) rotateX(5deg) rotateY(5deg);
      }
    }

    .homeIllustration__BottomRightCorner {
      bottom: 0;
      height: 50%;
      position: absolute;
      right: 0;
      width: 50%;
      z-index: 300;

      &:hover ~ .homeIllustration__EffectSVG {
        transform: perspective(1600px) rotateX(5deg) rotateY(-5deg);
      }
    }
  `,
});
