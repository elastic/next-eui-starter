import { FunctionComponent } from 'react';
import SecurityLayout from '../../layouts/security';
import TextSkeleton from '../../components/skeletons/text_skeleton';

const Users: FunctionComponent = () => {
  return (
    <SecurityLayout
      pageHeader={{
        pageTitle: 'Users',
      }}>
      <TextSkeleton textLines={10} />
    </SecurityLayout>
  );
};

export default Users;
