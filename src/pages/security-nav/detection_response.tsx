import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const DetectionResponse: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Detection & Response',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default DetectionResponse;
