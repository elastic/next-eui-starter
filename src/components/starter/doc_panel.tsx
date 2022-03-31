import { FunctionComponent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { EuiPanel, useEuiTheme } from '@elastic/eui';
import { useTheme } from '../theme';
import { docPanelStyles } from './doc_panel.styles';

const DocPanel: FunctionComponent = ({ children }) => {
  const { euiTheme } = useEuiTheme();
  const { colorMode } = useTheme();

  const styles = docPanelStyles(euiTheme);

  const pattern2 = `/images/patterns/pattern-2-${colorMode}.svg`;

  return (
    <>
      <Head>
        <title>Getting started</title>
      </Head>

      <EuiPanel css={styles.panel}>
        <span css={styles.pattern1}>
          <Image
            width={165}
            height={130}
            src="/images/patterns/pattern-1.svg"
            alt=""
          />
        </span>
        <span css={styles.pattern2}>
          <Image width={165} height={130} src={pattern2} alt="" />
        </span>
        <div css={styles.content}>{children}</div>
      </EuiPanel>
    </>
  );
};

export default DocPanel;
