import { FunctionComponent } from 'react';
import { useTheme } from '../theme';
import { css } from '@emotion/react';
import Image from 'next/image';
import { homeIllustration } from './home_illustration.styles';

const HomeIllustration: FunctionComponent = () => {
  const { colorMode } = useTheme();

  const isDarkTheme = colorMode === 'dark';

  const illustration = isDarkTheme
    ? '/images/home/illustration-eui-hero-500-darkmode-shadow.svg'
    : '/images/home/illustration-eui-hero-500-shadow.svg';

  const styles = homeIllustration();

  return (
    <div css={styles.homeIllustration}>
      <div css={styles.homeIllustrationEffect}>
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
