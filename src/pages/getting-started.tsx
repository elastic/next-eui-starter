import { FunctionComponent } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  EuiBreadcrumbs,
  EuiSpacer,
  useEuiTheme,
  EuiTitle,
  EuiIcon,
} from '@elastic/eui';
import { css } from '@emotion/react';
import GettingStartedSteps from '../components/starter/getting_started_steps';
import Wrapper from '../components/starter/wrapper';
import DocPanel from '../components/starter/doc_panel';

const GettingStarted: FunctionComponent = () => {
  const { euiTheme } = useEuiTheme();
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.back();
  };

  return (
    <>
      <Head>
        <title>Getting started</title>
      </Head>

      <Wrapper>
        <div
          css={css`
            padding-top: ${euiTheme.size.xxl};
            padding-bottom: ${euiTheme.size.xl};
          `}>
          <EuiBreadcrumbs
            breadcrumbs={[
              {
                text: (
                  <>
                    <EuiIcon size="s" type="arrowLeft" /> Go back
                  </>
                ),
                'aria-current': false,
                href: '#',
                onClick: handleClick,
                color: 'primary',
              },
            ]}
            truncate={false}
            aria-label="An example of EuiBreadcrumbs"
          />

          <EuiSpacer size="xs" />

          <EuiTitle size="l">
            <h2>Getting started</h2>
          </EuiTitle>
        </div>

        <DocPanel>
          <GettingStartedSteps />
        </DocPanel>
      </Wrapper>
    </>
  );
};

export default GettingStarted;
