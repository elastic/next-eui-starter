import React from 'react';
import { EuiIcon, EuiSideNavItemType } from '@elastic/eui';

export const buildAdminLinks = (
  makeAction: (path: string) => () => void
): EuiSideNavItemType<unknown>[] => [
  {
    id: 'admin',
    name: 'Admin',
    icon: <EuiIcon type="managementApp" />,
    items: [
      {
        id: 'dev_tools',
        name: 'Dev tools',
        onClick: makeAction('/my-app/dev-tools'),
        icon: <EuiIcon type="devToolsApp" />,
      },
      {
        id: 'stack_monitoring',
        name: 'Stack Monitoring',
        onClick: makeAction('/my-app/stack-monitoring'),
        icon: <EuiIcon type="monitoringApp" />,
      },
      {
        id: 'stack_management',
        name: 'Stack Management',
        onClick: makeAction('/my-app/stack-management'),
        icon: <EuiIcon type="managementApp" />,
      },
    ],
  },
];
