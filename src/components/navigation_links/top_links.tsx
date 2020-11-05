import React from 'react';
import { EuiIcon, EuiSideNavItemType } from '@elastic/eui';

export const buildTopLinks = (
  makeAction: (path: string) => () => void
): EuiSideNavItemType<unknown>[] => [
  {
    id: 'recently_viewed',
    name: 'Recently viewed',
    icon: <EuiIcon type="clock" />,
    items: [
      {
        id: 'dashboard',
        name: 'My dashboard',
        onClick: makeAction('/my-app/my-dashboard'),
        icon: <EuiIcon type="dashboardApp" />,
        // extraAction: faveExtraAction,
      },
      {
        id: 'workpad',
        name: 'Workpad with title that wraps',
        onClick: makeAction('/my-app/workpad'),
        icon: <EuiIcon type="canvasApp" />,
      },
      {
        id: 'logs',
        name: 'My logs',
        onClick: makeAction('/my-app/my-logs'),
        icon: <EuiIcon type="logsApp" />,
      },
    ],
  },
  {
    id: 'favourites',
    name: 'Favorites',
    icon: <EuiIcon type="starEmpty" />,
    items: [
      {
        id: 'my_workpad',
        name: 'My workpad',
        onClick: makeAction('/my-app/my-workpad'),
        icon: <EuiIcon type="canvasApp" />,
      },
      {
        id: 'my_logs',
        name: 'My logs',
        onClick: makeAction('/my-app/my-logs'),
        icon: <EuiIcon type="logsApp" />,
      },
    ],
  },
];
