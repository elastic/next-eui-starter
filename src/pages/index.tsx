import { FunctionComponent } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiCard,
  EuiLink,
  EuiText,
  EuiButton,
  EuiPanel,
  useEuiTheme,
  EuiTitle,
  EuiSpacer,
} from '@elastic/eui';
import { css } from '@emotion/react';
import Header from '../components/chrome/header';
import GettingStarted from '../components/getting_started';
import { useTheme } from '../components/theme';

const Index: FunctionComponent = () => {
  const { euiTheme } = useEuiTheme();
  const { colorMode } = useTheme();

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
          background: ${euiTheme.colors.emptyShade};
        `}>
        <Header />
        <span
          css={css`
            display: flex;
            position: absolute;
            left: 0;
            top: 0;
          `}>
          <Image
            width={400 / 1.5}
            height={315 / 1.5}
            src="/images/top-left-corner.svg"
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
            width={400 / 1.5}
            height={315 / 1.5}
            src="/images/bottom-right-corner.svg"
            alt=""
          />
        </span>

        <div
          css={css`
            display: flex;
            max-width: 1120px;
            margin: 1em auto;
            flex-direction: column;
            text-align: center;
          `}>
          <div
            css={css`
              display: flex;
              justify-content: center;
              padding: calc(${euiTheme.size.xxl} * 2) 0 ${euiTheme.size.l};
              font-size: 20px;
            `}>
            <EuiText
              size="relative"
              grow={false}
              textAlign="center"
              css={css`
                position: relative;
              `}>
              <h1>Welcome to NextJS EUI Starter</h1>

              <p>Quickly build and deploy prototypes for our Elastic apps.</p>
            </EuiText>
          </div>

          <EuiPanel
            color="subdued"
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
            <div
              css={css`
                display: flex;
                position: relative;
                text-align: center;
                align-items: center;
              `}>
              <EuiText grow={false} textAlign="center">
                <h2>
                  Yes, we said easy prototyping!{' '}
                  <span role="img" aria-label="party emoji">
                    🎉
                  </span>
                </h2>
                <EuiSpacer size="m" />
                <p>
                  The NextJS Starter uses{' '}
                  <EuiLink
                    external={true}
                    target="_blank"
                    href="https://nextjs.org/">
                    NextJS
                  </EuiLink>{' '}
                  and{' '}
                  <EuiLink
                    href="https://elastic.github.io/eui/"
                    external={true}
                    target="_blank">
                    EUI
                  </EuiLink>{' '}
                  to help you make prototypes. You just need to know a few basic
                  NextJS concepts and how to use EUI and you're ready to ship
                  it!
                </p>

                <Link href="/#get-started" passHref>
                  <EuiButton size="m" color="primary" fill>
                    Get started
                  </EuiButton>
                </Link>
              </EuiText>
            </div>
          </EuiPanel>

          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />

          <EuiTitle>
            <h2>
              No worries, we&apos;ve got your back!{' '}
              <span role="img" aria-label="Raising both hands emoji">
                🙌
              </span>
            </h2>
          </EuiTitle>

          <EuiSpacer size="xxl" />

          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiCard
                display="transparent"
                icon={<EuiIcon size="xxl" type="indexMapping" />}
                title="Easy routing"
                description="Just add a page inside the pages folder and the new route is ready."
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                display="transparent"
                icon={<EuiIcon size="xxl" type="tableOfContents" />}
                title="Page templates"
                description="We have some templates ready to be used or you can use any of EUI page templates."
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                display="transparent"
                icon={<EuiIcon size="xxl" type="indexMapping" />}
                title="CSS in JS ready"
                description={<>Consume any of EUI theme variables.</>}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                display="transparent"
                icon={
                  <EuiIcon
                    size="xxl"
                    type={colorMode === 'dark' ? 'moon' : 'sun'}
                  />
                }
                title="Light and dark ready"
                description={
                  <>
                    Test your prototypes in light and dark themes. All the
                    layout headers have a toggle to change the theme.
                  </>
                }
              />
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />
          <EuiSpacer size="xxl" />

          <EuiTitle>
            <h2 id="#get-started">
              Get started!{' '}
              <span role="img" aria-label="Rocket emoji">
                🚀
              </span>
            </h2>
          </EuiTitle>

          <EuiSpacer size="xxl" />

          <EuiPanel color="subdued">
            <GettingStarted />
          </EuiPanel>
        </div>
      </main>
    </>
  );
};

export default Index;
