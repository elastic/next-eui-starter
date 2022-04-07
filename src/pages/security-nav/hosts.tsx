import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Hosts: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Hosts',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Hosts;
