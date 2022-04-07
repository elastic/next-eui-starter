import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Investigations: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Investigations',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Investigations;
