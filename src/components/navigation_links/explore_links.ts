import { pinExtraAction } from './pin_extra_action'

export const ExploreLinks = [
  {
    label: 'Canvas',
    href: '/canvas',
    iconType: 'canvasApp',
    isActive: true,
    extraAction: {
      ...pinExtraAction,
      alwaysShow: true,
    },
  },
  {
    label: 'Discover',
    href: '/discover',
    iconType: 'discoverApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Visualize',
    href: '/visualize',
    iconType: 'visualizeApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
    iconType: 'dashboardApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Machine learning',
    href: '/ml',
    iconType: 'machineLearningApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Custom Plugin (no icon)',
    href: '/custom-plugin',
    extraAction: pinExtraAction,
  },
]
