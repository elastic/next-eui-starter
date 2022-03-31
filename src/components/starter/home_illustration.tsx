import { FunctionComponent } from 'react';
import { useTheme } from '../theme';
import Image from 'next/image';
import { useEuiTheme } from '@elastic/eui';
import { imageLoader } from '../../lib/loader';
import { homeIllustration } from './home_illustration.styles';
import IllustrationLight from '../../../public/images/home/illustration-eui-hero-500-shadow.svg';
import IllustrationDark from '../../../public/images/home/illustration-eui-hero-500-darkmode-shadow.svg';

const HomeIllustration: FunctionComponent = () => {
  const { colorMode } = useTheme();
  const { euiTheme } = useEuiTheme();
  const styles = homeIllustration(euiTheme);

  const Illustration =
    colorMode === 'dark' ? IllustrationDark : IllustrationLight;

  return (
    <div css={styles.homeIllustration}>
      <div css={styles.homeIllustrationEffect}>
        <div className="homeIllustration__TopLeftCorner" />
        <div className="homeIllustration__TopRightCorner" />
        <div className="homeIllustration__BottomLeftCorner" />
        <div className="homeIllustration__BottomRightCorner" />

        <div className="homeIllustration__EffectSVG">
          <Image
            width={500}
            height={500}
            src={Illustration}
            alt=""
            loader={imageLoader}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeIllustration;
