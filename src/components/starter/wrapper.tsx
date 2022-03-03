import { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import Header from './header';
import GradientBg from './gradient_bg';
import { useEuiTheme } from '@elastic/eui';

const Wrapper: FunctionComponent = ({ children }) => {
  const { euiTheme } = useEuiTheme();

  return (
    <>
      <Header />

      <GradientBg>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            max-width: 1120px;
            margin: 0 auto;
            padding-right: ${euiTheme.size.base};
            padding-bottom: ${euiTheme.size.xxl};
            padding-left: ${euiTheme.size.base};
          `}>
          {children}
        </div>
      </GradientBg>
    </>
  );
};

export default Wrapper;
