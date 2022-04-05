import { FunctionComponent, useState } from 'react';
import {
  EuiSpacer,
  EuiTitle,
  EuiFieldSearch,
  EuiPanel,
  EuiHealth,
  EuiFlexGroup,
  EuiFlexItem,
  EuiNotificationBadge,
} from '@elastic/eui';

const AlertsSideNav: FunctionComponent = () => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <EuiTitle size="xs">
        <h2>Detections</h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiFieldSearch
        placeholder="Search"
        value={value}
        onChange={e => onChange(e)}
        aria-label="Use aria labels when no actual label is in use"
      />
      <EuiSpacer />
      <EuiPanel hasBorder>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiTitle size="xxs">
              <h3>Endpoints</h3>
            </EuiTitle>
            <EuiHealth color="danger">Critical</EuiHealth>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiNotificationBadge>16</EuiNotificationBadge>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <EuiSpacer size="s" />
      <EuiPanel hasBorder>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiTitle size="xxs">
              <h3>Detections</h3>
            </EuiTitle>
            <EuiHealth color="warning">Medium</EuiHealth>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiNotificationBadge>16</EuiNotificationBadge>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
    </>
  );
};

export default AlertsSideNav;
