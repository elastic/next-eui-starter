import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Cases: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Cases',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Cases;
