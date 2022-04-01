import { FunctionComponent } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { EuiPanel, useEuiTheme } from '@elastic/eui';
import { imageLoader } from '../../lib/loader';
import { useTheme } from '../theme';
import { docPanelStyles } from './doc_panel.styles';
import Pattern1 from '../../../public/images/patterns/pattern-1.svg';
import Pattern2Light from '../../../public/images/patterns/pattern-2-light.svg';
import Pattern2Dark from '../../../public/images/patterns/pattern-2-dark.svg';

const DocPanel: FunctionComponent = ({ children }) => {
  const { euiTheme } = useEuiTheme();
  const { colorMode } = useTheme();

  const styles = docPanelStyles(euiTheme);

  const Pattern2 = colorMode === 'dark' ? Pattern2Dark : Pattern2Light;

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
            src={Pattern1}
            alt=""
            loader={imageLoader}
          />
        </span>
        <span css={styles.pattern2}>
          <Image
            width={165}
            height={130}
            src={Pattern2}
            alt=""
            loader={imageLoader}
          />
        </span>
        <div css={styles.content}>{children}</div>
      </EuiPanel>
    </>
  );
};

export default DocPanel;
