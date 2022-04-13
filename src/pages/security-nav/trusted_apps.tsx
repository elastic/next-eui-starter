import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const TrustedApps: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Trusted Applications',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default TrustedApps;
