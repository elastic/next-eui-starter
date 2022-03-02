import { FunctionComponent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  EuiText,
  EuiPanel,
  useEuiTheme,
  EuiTitle,
  EuiSpacer,
  EuiHorizontalRule,
  EuiButton,
  transparentize,
} from '@elastic/eui';
import { css } from '@emotion/react';
import Header from '../components/chrome/header';
import GettingStarted from '../components/getting_started';
import { useTheme } from '../components/theme';
import HomeCards from '../components/home_cards';
import HomeHero from '../components/home_hero';

const Index: FunctionComponent = () => {
  const { euiTheme } = useEuiTheme();
  const { colorMode } = useTheme();

  const alpha = colorMode === 'dark' ? 0.03 : 0.08;

  const backgroundColors = {
    topLeft: transparentize(euiTheme.colors.success, alpha),
    centerTop: transparentize(euiTheme.colors.accent, alpha),
    topRight: transparentize(euiTheme.colors.warning, alpha),
    centerMiddleLeft: transparentize(euiTheme.colors.warning, alpha),
    centerMiddleRight: transparentize(euiTheme.colors.accent, alpha),
    bottomRight: transparentize(euiTheme.colors.primary, alpha),
    bottomLeft: transparentize(euiTheme.colors.accent, alpha),
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main
        css={css`
          position: relative;
          margin-top: 48px; // top nav
          min-height: calc(100vh - 48px);
          background: radial-gradient(
              circle 600px at top left,
              ${backgroundColors.topLeft},
              transparent
            ),
            radial-gradient(
              circle 800px at 600px 200px,
              ${backgroundColors.centerTop},
              transparent
            ),
            radial-gradient(
              circle 800px at top right,
              ${backgroundColors.topRight},
              transparent
            ),
            radial-gradient(
              circle 800px at left center,
              ${backgroundColors.centerMiddleLeft},
              transparent
            ),
            radial-gradient(
              circle 800px at right center,
              ${backgroundColors.centerMiddleRight},
              transparent
            ),
            radial-gradient(
              circle 800px at right bottom,
              ${backgroundColors.bottomRight},
              transparent
            ),
            radial-gradient(
              circle 800px at left bottom,
              ${backgroundColors.bottomLeft},
              transparent
            );
        `}>
        <Header />

        <div
          css={css`
            display: flex;
            max-width: 1120px;
            margin: 1em auto;
            flex-direction: column;
          `}>
          <div
            css={css`
              display: flex;
              padding: calc(${euiTheme.size.l} * 2) 0 ${euiTheme.size.l};
              font-size: 20px;
            `}>
            <HomeHero />
          </div>

          <EuiHorizontalRule />

          <div>
            <HomeCards />
          </div>

          <EuiHorizontalRule />

          <EuiSpacer size="xxl" />

          <EuiPanel
            css={css`
              position: relative;
              min-height: 280px;
              overflow: hidden;
              display: flex;
              justify-content: center;
              font-size: 20px;
            `}>
            <span
              css={css`
                display: flex;
                position: absolute;
                left: 0;
                top: 0;
              `}>
              <Image
                width={165}
                height={130}
                src="/images/patterns/pattern-1.svg"
                alt=""
              />
            </span>
            <span
              css={css`
                display: flex;
                position: absolute;
                right: 0;
                bottom: 0;
              `}>
              <Image
                width={165}
                height={130}
                src="/images/patterns/pattern-2.svg"
                alt=""
              />
            </span>
            <div>
              <EuiSpacer size="xxl" />

              <EuiTitle>
                <h2 id="getting-started">
                  Get started!{' '}
                  <span role="img" aria-label="Rocket emoji">
                    🚀
                  </span>
                </h2>
              </EuiTitle>

              <EuiSpacer size="xxl" />

              <GettingStarted />
            </div>
          </EuiPanel>

          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />
        </div>
      </main>
    </>
  );
};

export default Index;
