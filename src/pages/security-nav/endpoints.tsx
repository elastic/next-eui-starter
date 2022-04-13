import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Endpoints: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Endpoints',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Endpoints;
