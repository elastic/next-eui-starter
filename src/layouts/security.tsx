import CollapsibleNav from './security_collapsible_nav';
import { SecurityLayoutStyles } from './security.styles';

const SecurityLayout = ({ children }) => {
  const styles = SecurityLayoutStyles();
  return (
    <div css={styles.mainWrapper}>
      <CollapsibleNav />

      <div css={styles.contentWrapper}>{children}</div>
    </div>
  );
};

export default SecurityLayout;
