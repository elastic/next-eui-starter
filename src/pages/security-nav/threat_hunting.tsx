import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const ThreatHunting: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Threat Hunting',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default ThreatHunting;
