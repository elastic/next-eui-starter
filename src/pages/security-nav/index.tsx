import { FunctionComponent } from 'react';
import { EuiPageTemplate } from '@elastic/eui';
import SecurityLayout from '../../layouts/security';
import SideNav from '../../components/security/side_nav';
import TextSkeleton from '../../components/skeletons/text_skeleton';

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
        }}>
        <TextSkeleton textLines={10} />
      </EuiPageTemplate>
    </SecurityLayout>
  );
};

export default Index;
