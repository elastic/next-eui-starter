import { FunctionComponent } from 'react';
import CollapsibleNav from './kibana_collapsible_nav';
import { kibanaLayoutStyles } from './kibana.styles';
import { EuiPageTemplate, EuiPageTemplateProps } from '@elastic/eui';

type KibanaLayoutProps = EuiPageTemplateProps;

const KibanaLayout: FunctionComponent<KibanaLayoutProps> = ({
  children,
  ...rest
}) => {
  const styles = kibanaLayoutStyles();
  return (
    <div css={styles.mainWrapper}>
      <CollapsibleNav />

      <div css={styles.contentWrapper}>
        <EuiPageTemplate restrictWidth {...rest}>
          {children}
        </EuiPageTemplate>
      </div>
    </div>
  );
};

export default KibanaLayout;
