import { FunctionComponent } from 'react';
import {
  EuiPageTemplate,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
} from '@elastic/eui';
import KibanaLayout from '../../layouts/kibana';

const Index: FunctionComponent = () => {
  return (
    <KibanaLayout>
      <EuiPageTemplate
        template="empty"
        restrictWidth
        pageHeader={{
          pageTitle: 'Welcome',
        }}>
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="discoverApp" />}
              title="Discover"
              description="Example of a card's description. Stick to one or two sentences."
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="dashboardApp" />}
              title="Dashboards"
              description="Example of a card's description. Stick to one or two sentences."
              onClick={() => {}}
            />
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="lensApp" />}
              title="Lens"
              description="Example of a card's description. Stick to one or two sentences."
              onClick={() => {}}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageTemplate>
    </KibanaLayout>
  );
};

export default Index;
