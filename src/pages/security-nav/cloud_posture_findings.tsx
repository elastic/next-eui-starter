import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const CloudPostureFindings: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Cloud Posture Findings',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default CloudPostureFindings;
