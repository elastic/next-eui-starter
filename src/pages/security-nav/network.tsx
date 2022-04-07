import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Network: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Network',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Network;
