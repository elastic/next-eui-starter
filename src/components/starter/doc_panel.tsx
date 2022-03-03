import { FunctionComponent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { EuiPanel, useEuiTheme } from '@elastic/eui';
import { css } from '@emotion/react';

const DocPanel: FunctionComponent = ({ children }) => {
  const { euiTheme } = useEuiTheme();

  return (
    <>
      <Head>
        <title>Getting started</title>
      </Head>

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
        <div
          css={css`
            max-width: 800px;
            padding-top: calc(${euiTheme.size.xxl} * 2);
            padding-bottom: calc(${euiTheme.size.xxl} * 2);
          `}>
          {children}
        </div>
      </EuiPanel>
    </>
  );
};

export default DocPanel;
