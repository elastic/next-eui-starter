import { pinExtraAction } from './pin_extra_action';

export const buildExploreLinks = (makeAction: (path: string) => () => void) => [
  {
    label: 'Canvas',
    onClick: makeAction('/my-app/canvas'),
    iconType: 'canvasApp',
    isActive: true,
    extraAction: {
      ...pinExtraAction,
      alwaysShow: true,
    },
  },
  {
    label: 'Discover',
    onClick: makeAction('/my-app/discover'),
    iconType: 'discoverApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Visualize',
    onClick: makeAction('/my-app/visualize'),
    iconType: 'visualizeApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Dashboard',
    onClick: makeAction('/my-app/dashboard'),
    iconType: 'dashboardApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Machine learning',
    onClick: makeAction('/my-app/machine-learning'),
    iconType: 'machineLearningApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Custom Plugin (no icon)',
    onClick: makeAction('/my-app/custom-plugin'),
    extraAction: pinExtraAction,
  },
];
