import { FunctionComponent } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiCard,
  EuiPageTemplate,
  EuiLink,
  EuiText,
  EuiHorizontalRule,
  EuiButton,
  EuiImage,
} from '@elastic/eui';

import { useTheme } from '../components/theme';
import { enableTheme } from '../lib/theme';

const Index: FunctionComponent = () => {
  const { colorMode, setColorMode } = useTheme();

  const isDarkTheme = colorMode === 'dark';

  const illustration = isDarkTheme
    ? '/images/welcome--dark.svg'
    : '/images/welcome--light.svg';

  const handleChangeTheme = (newTheme: string) => {
    setColorMode(newTheme);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <EuiPageTemplate template="empty">
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiText>
              <h1>Welcome to Next EUI Starter</h1>

              <p>
                This{' '}
                <EuiLink
                  external={true}
                  target="_blank"
                  href="https://nextjs.org/">
                  Next.js
                </EuiLink>{' '}
                EUI Starter is intended to help you quickly build and deploy
                prototypes for our Elastic apps with the{' '}
                <EuiLink
                  href="https://elastic.github.io/eui/"
                  external={true}
                  target="_blank">
                  EUI library
                </EuiLink>
                .
              </p>
              <p>
                {' '}
                Simply go to{' '}
                <EuiLink
                  href="https://github.com/elastic/next-eui-starter/"
                  external={true}
                  target="_blank">
                  Next EUI Starter Github
                </EuiLink>{' '}
                and follow the instructions there.
              </p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiImage size="fullWidth" src={illustration} alt="" />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiHorizontalRule />

        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="indexMapping" />}
              title="Easy routing"
              description="Just add a page inside the pages folder and the new route is ready."
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="tableOfContents" />}
              title="Page templates"
              description="Use any of EUI page templates"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="indexMapping" />}
              title="CSS in JS ready"
              description={
                <>
                  Consume any of EUI theme variables. See{' '}
                  <Link href="/docs/css-in-js" passHref>
                    <EuiLink color="primary">example</EuiLink>
                  </Link>{' '}
                  page.
                </>
              }
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={
                <EuiIcon
                  size="xxl"
                  type={colorMode === 'dark' ? 'moon' : 'sun'}
                />
              }
              title="Light and dark ready"
              description={
                <>
                  <EuiButton
                    size="s"
                    onClick={() =>
                      handleChangeTheme(isDarkTheme ? 'light' : 'dark')
                    }>
                    Change theme to {isDarkTheme ? 'light' : 'dark'}
                  </EuiButton>
                </>
              }
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiHorizontalRule />
      </EuiPageTemplate>
    </>
  );
};

export default Index;
