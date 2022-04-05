import { FunctionComponent, useState } from 'react';
import {
  EuiHorizontalRule,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiFieldSearch,
} from '@elastic/eui';

const DashboardsSideNav: FunctionComponent = () => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <EuiTitle size="xs">
        <h2>Dashboards</h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiFieldSearch
        placeholder="Search"
        value={value}
        onChange={e => onChange(e)}
        aria-label="Use aria labels when no actual label is in use"
      />
      <EuiSpacer />
      <EuiTitle size="xxs">
        <h3>Favourite</h3>
      </EuiTitle>
      <EuiHorizontalRule margin="s" />
      <EuiText>
        <p>
          For consistency across the many flyouts, please utilize the following
          code for implementing the flyout with a header.
        </p>
      </EuiText>
    </>
  );
};

export default DashboardsSideNav;
