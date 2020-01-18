import { pinExtraAction } from './pin_extra_action'

export const buildExploreLinks = (makeAction: (path: string) => () => void) => [
  {
    label: 'Canvas',
    onClick: makeAction('/canvas'),
    iconType: 'canvasApp',
    isActive: true,
    extraAction: {
      ...pinExtraAction,
      alwaysShow: true,
    },
  },
  {
    label: 'Discover',
    onClick: makeAction('/discover'),
    iconType: 'discoverApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Visualize',
    onClick: makeAction('/visualize'),
    iconType: 'visualizeApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Dashboard',
    onClick: makeAction('/dashboard'),
    iconType: 'dashboardApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Machine learning',
    onClick: makeAction('/machine-learning'),
    iconType: 'machineLearningApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Custom Plugin (no icon)',
    onClick: makeAction('/custom-plugin'),
    extraAction: pinExtraAction,
  },
]
