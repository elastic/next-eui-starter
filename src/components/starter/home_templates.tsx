import { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiSpacer,
  EuiText,
  useEuiTheme,
  EuiPanel,
  EuiButtonEmpty,
} from '@elastic/eui';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../theme';

const HomeTemplates: FunctionComponent = () => {
  const { colorMode } = useTheme();
  const { euiTheme } = useEuiTheme();

  const pattern2 = `/images/patterns/pattern-2-${colorMode}.svg`;

  const circles = (
    <>
      <span
        css={css`
          display: flex;
          position: absolute;
          left: 0;
          top: 0;
        `}>
        <Image
          width={165 / 2}
          height={130 / 2}
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
        <Image width={165 / 2} height={130 / 2} src={pattern2} alt="" />
      </span>
    </>
  );

  return (
    <>
      <EuiTitle size="l">
        <h2>Easy start with templates</h2>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiText>
        <p>
          To help you get started we provide two templates with some
          out-of-the-box patterns.
        </p>
      </EuiText>

      <EuiSpacer size="xxl" />

      <EuiFlexGroup gutterSize="xl">
        <EuiFlexItem>
          <EuiPanel
            css={css`
              position: relative;
            `}>
            {circles}
            <div
              css={css`
                padding: ${euiTheme.size.xxxxl} 0;
              `}>
              <EuiTitle size="s">
                <h3>Kibana template</h3>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiText grow={false}>
                <p>
                  This template comes with a collapsible navbar and two stacked
                  headers just like Kibana is today. On the top header, you can
                  toggle the dark and light theme.
                </p>

                <Link href="/kibana" passHref>
                  <EuiButtonEmpty flush="both">
                    <strong>Preview Kibana template</strong>
                  </EuiButtonEmpty>
                </Link>
              </EuiText>
            </div>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiPanel
            css={css`
              position: relative;
            `}>
            {circles}
            <div
              css={css`
                padding: ${euiTheme.size.xxxxl} 0;
              `}>
              <EuiTitle size="s">
                <h3>Docs template</h3>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiText grow={false}>
                <p>
                  This template comes with a side nav and one header where you
                  can toggle the dark and light theme. It has a similar layout
                  as the EUI docs site or Elastic docs.
                </p>

                <Link href="/docs" passHref>
                  <EuiButtonEmpty flush="both">
                    <strong>Preview Docs template</strong>
                  </EuiButtonEmpty>
                </Link>
              </EuiText>
            </div>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};

export default HomeTemplates;