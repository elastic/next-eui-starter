import React from 'react';
import { EuiIcon, EuiSideNavItemType } from '@elastic/eui';

export const buildSolutionLinks = (
  makeAction: (path: string) => () => void
): EuiSideNavItemType<unknown>[] => [
  {
    id: 'solutions',
    name: 'Solutions',
    icon: <EuiIcon type="cheer" />,
    items: [
      {
        id: 'apm',
        name: 'APM',
        onClick: makeAction('/my-app/apm'),
        icon: <EuiIcon type="apmApp" />,
      },
      {
        id: 'metrics',
        name: 'Metrics',
        onClick: makeAction('/my-app/metrics'),
        icon: <EuiIcon type="metricsApp" />,
      },
      {
        id: 'logs',
        name: 'Logs',
        onClick: makeAction('/my-app/logs'),
        icon: <EuiIcon type="logsApp" />,
      },
      {
        id: 'uptime',
        name: 'Uptime',
        onClick: makeAction('/my-app/uptime'),
        icon: <EuiIcon type="upgradeAssistantApp" />,
      },
      {
        id: 'maps',
        name: 'Maps',
        onClick: makeAction('/my-app/maps'),
        icon: <EuiIcon type="gisApp" />,
      },
      {
        id: 'siem',
        name: 'SIEM',
        onClick: makeAction('/my-app/siem'),
        icon: <EuiIcon type="securityAnalyticsApp" />,
      },
    ],
  },
];
