import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const GetStarted: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Get Started',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default GetStarted;
