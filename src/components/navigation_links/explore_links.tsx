import React from 'react';
import { EuiIcon, EuiSideNavItemType } from '@elastic/eui';

export const buildExploreLinks = (
  makeAction: (path: string) => () => void
): EuiSideNavItemType<unknown>[] => [
  {
    id: 'explore',
    name: 'Explore',
    icon: <EuiIcon type="globe" />,
    items: [
      {
        id: 'canvas',
        name: 'Canvas',
        onClick: makeAction('/my-app/canvas'),
        icon: <EuiIcon type="canvasApp" />,
      },
      {
        id: 'Discover',
        name: 'Discover',
        onClick: makeAction('/my-app/discover'),
        icon: <EuiIcon type="discoverApp" />,
      },
      {
        id: 'visualize',
        name: 'Visualize',
        onClick: makeAction('/my-app/visualize'),
        icon: <EuiIcon type="visualizeApp" />,
      },
      {
        id: 'dashboard',
        name: 'Dashboard',
        onClick: makeAction('/my-app/dashboard'),
        icon: <EuiIcon type="dashboardApp" />,
      },
      {
        id: 'ml',
        name: 'Machine learning',
        onClick: makeAction('/my-app/machine-learning'),
        icon: <EuiIcon type="machineLearningApp" />,
      },
      {
        id: 'custom',
        name: 'Custom Plugin (no icon)',
        onClick: makeAction('/my-app/custom-plugin'),
        icon: <EuiIcon type="empty" />,
      },
    ],
  },
];
