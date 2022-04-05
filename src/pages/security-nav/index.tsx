import { FunctionComponent } from 'react';
import {
  EuiPageTemplate,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
} from '@elastic/eui';
import SecurityLayout from '../../layouts/security';
import SideNav from '../../components/security/side_nav';

const Index: FunctionComponent = () => {
  return (
    <SecurityLayout>
      <EuiPageTemplate
        pageSideBar={<SideNav />}
        pageSideBarProps={{ paddingSize: 'none' }}
        restrictWidth
        pageHeader={{
          pageTitle: 'Inbox',
          tabs: [
            { label: 'Cases', isSelected: true },
            {
              label: 'Alerts',
            },
          ],
        }}></EuiPageTemplate>
    </SecurityLayout>
  );
};

export default Index;
