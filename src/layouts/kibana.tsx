import CollapsibleNav from './kibana_collapsible_nav';
import { kibanaLayoutStyles } from './kibana.styles';

const KibanaLayout = ({ children }) => {
  const styles = kibanaLayoutStyles();
  return (
    <div css={styles.wrapper}>
      <CollapsibleNav />
      {children}
    </div>
  );
};

export default KibanaLayout;
