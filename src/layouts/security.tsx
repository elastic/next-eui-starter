import { EuiPageTemplate } from '@elastic/eui';
import CollapsibleNav from './security_collapsible_nav';
import { SecurityLayoutStyles } from './security.styles';
import SideNav from '../components/security-nav/side_nav';
import { navItems } from '../components/security-nav/side_nav_items';

const SecurityLayout = ({ children, pageHeader }) => {
  const styles = SecurityLayoutStyles();
  return (
    <div css={styles.mainWrapper}>
      <CollapsibleNav />
      <div css={styles.contentWrapper}>
        <EuiPageTemplate
          pageSideBar={<SideNav items={navItems} />}
          pageSideBarProps={{ paddingSize: 'm' }}
          restrictWidth
          pageHeader={pageHeader}>
          {children}
        </EuiPageTemplate>
      </div>
    </div>
  );
};

export default SecurityLayout;
