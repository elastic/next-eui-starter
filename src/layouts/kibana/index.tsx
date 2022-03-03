import { css } from '@emotion/react';
import CollapsibleNav from './collapsible_nav';

const KibanaLayout = ({ children }) => {
  return (
    <div
      css={css`
        padding-top: 96px; // two top navs
        max-height: calc(100vh - 96px);
      `}>
      <CollapsibleNav />
      {children}
    </div>
  );
};

export default KibanaLayout;
