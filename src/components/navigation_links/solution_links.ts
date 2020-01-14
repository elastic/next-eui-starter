import { pinExtraAction } from './pin_extra_action'

export const SolutionLinks = [
  {
    label: 'APM',
    href: '/#/chrome/nav-drawer',
    iconType: 'apmApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Metrics',
    href: '/#/chrome/nav-drawer',
    iconType: 'metricsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Logs',
    href: '/#/chrome/nav-drawer',
    iconType: 'logsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Uptime',
    href: '/#/chrome/nav-drawer',
    iconType: 'upgradeAssistantApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Maps',
    href: '/#/chrome/nav-drawer',
    iconType: 'gisApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'SIEM',
    href: '/#/chrome/nav-drawer',
    iconType: 'securityAnalyticsApp',
    extraAction: pinExtraAction,
  },
]
