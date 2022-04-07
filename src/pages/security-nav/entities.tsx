import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Entities: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Entities',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Entities;
