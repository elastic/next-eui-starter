import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Alerts: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Alerts',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Alerts;
