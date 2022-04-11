import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Index: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Landing',
        tabs: [
          { label: 'Alerts', isSelected: true },
          {
            label: 'Cases',
          },
        ],
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Index;
