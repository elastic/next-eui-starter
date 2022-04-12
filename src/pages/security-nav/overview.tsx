import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Overview: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Overview',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Overview;
