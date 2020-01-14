import { pinExtraAction } from './pin_extra_action'

export const ExploreLinks = [
  {
    label: 'Canvas',
    href: '/#/chrome/nav-drawer',
    iconType: 'canvasApp',
    isActive: true,
    extraAction: {
      ...pinExtraAction,
      alwaysShow: true,
    },
  },
  {
    label: 'Discover',
    href: '/#/chrome/nav-drawer',
    iconType: 'discoverApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Visualize',
    href: '/#/chrome/nav-drawer',
    iconType: 'visualizeApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Dashboard',
    href: '/#/chrome/nav-drawer',
    iconType: 'dashboardApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Machine learning',
    href: '/#/chrome/nav-drawer',
    iconType: 'machineLearningApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Custom Plugin (no icon)',
    href: '/#/chrome/nav-drawer',
    extraAction: pinExtraAction,
  },
]
