import React from 'react';
import {
  EuiText,
  EuiCollapsibleNavGroup,
  EuiListGroup,
  EuiListGroupProps,
  EuiPinnableListGroupItemProps,
  EuiSpacer,
  EuiButton,
  EuiButtonIcon,
  EuiLink,
} from '@elastic/eui';

const deploymentsList: EuiListGroupProps['listItems'] = [
  {
    label: 'combining-binaries',
    iconType: 'logoAzureMono',
    size: 's',
  },
  {
    label: 'stack-monitoring',
    iconType: 'logoAWSMono',
    size: 's',
  },
];

export const TopNavLinks: EuiPinnableListGroupItemProps[] = [
  {
    label: 'Home',
    iconType: 'home',
    isActive: true,
    pinnable: false,
  },
  { label: 'Dashboards', pinned: true },
  { label: 'Dev tools', pinned: true },
  { label: 'Maps', pinned: true },
];

export const KibanaNavLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'Discover' },
  { label: 'Visualize' },
  { label: 'Dashboards' },
  { label: 'Canvas' },
  { label: 'Maps' },
  { label: 'Machine Learning' },
  { label: 'Graph' },
];

export const DeploymentsGroup = (
  <EuiCollapsibleNavGroup
    title={
      <span>
        <small style={{ fontWeight: 'normal' }}>Deployment</small> <br />
        <strong>personal-databoard</strong>
      </span>
    }
    iconType="logoGCPMono"
    iconSize="xl"
    isCollapsible={true}
    initialIsOpen={false}
    background="dark">
    <div role="group" className="kibanaNavDeployment__content">
      <EuiListGroup listItems={deploymentsList} flush />
      <EuiSpacer size="s" />
      <EuiButton color="ghost" fullWidth>
        Manage deployments
      </EuiButton>
    </div>
  </EuiCollapsibleNavGroup>
);

export const SecurityGroup = (
  <EuiCollapsibleNavGroup
    background="light"
    iconType="logoSecurity"
    title="Elastic Security"
    isCollapsible={true}
    initialIsOpen={true}
    arrowDisplay="none"
    extraAction={
      <EuiButtonIcon
        aria-label="Hide and never show again"
        title="Hide and never show again"
        iconType="cross"
      />
    }>
    <EuiText size="s" color="subdued" style={{ padding: '0 8px 8px' }}>
      <p>
        Threat prevention, detection, and response with SIEM and endpoint
        security.
        <br />
        <EuiLink>Learn more</EuiLink>
      </p>
    </EuiText>
  </EuiCollapsibleNavGroup>
);
