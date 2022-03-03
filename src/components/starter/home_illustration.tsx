import { FunctionComponent } from 'react';
import { useTheme } from '../theme';
import { css } from '@emotion/react';
import Image from 'next/image';

const HomeIllustration: FunctionComponent = () => {
  const { colorMode } = useTheme();

  const isDarkTheme = colorMode === 'dark';

  const illustration = isDarkTheme
    ? '/images/home/illustration-eui-hero-500-darkmode-shadow.svg'
    : '/images/home/illustration-eui-hero-500-shadow.svg';

  const illustrationCSS = css`
    position: relative;
    display: flex;
    justify-content: flex-end;
  `;

  const homeIllustration__Effect = css`
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
    }
  `;

  return (
    <div css={illustrationCSS}>
      <div css={homeIllustration__Effect}>
        <div className="homeIllustration__TopLeftCorner" />
        <div className="homeIllustration__TopRightCorner" />
        <div className="homeIllustration__BottomLeftCorner" />
        <div className="homeIllustration__BottomRightCorner" />

        <div className="homeIllustration__EffectSVG">
          <Image width={500} height={500} src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeIllustration;
