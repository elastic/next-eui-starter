import { FunctionComponent } from 'react';
import { portalSideNavStyles } from './portal_side_nav.styles';
import { EuiPanel, EuiPortal } from '@elastic/eui';

const PortalSideNav: FunctionComponent = ({ children }) => {
  const styles = portalSideNavStyles();

  return (
    <EuiPortal>
      <EuiPanel css={styles.panel} borderRadius="none">
        {children}
      </EuiPanel>
    </EuiPortal>
  );
};

export default PortalSideNav;
