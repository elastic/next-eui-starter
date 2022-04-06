import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Dashboards: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Dashboards',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Dashboards;
