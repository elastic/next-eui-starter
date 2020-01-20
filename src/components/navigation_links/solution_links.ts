import { pinExtraAction } from './pin_extra_action'

export const buildSolutionLinks = (makeAction: (path: string) => () => void) => [
  {
    label: 'APM',
    onClick: makeAction('/my-app/apm'),
    iconType: 'apmApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Metrics',
    onClick: makeAction('/my-app/metrics'),
    iconType: 'metricsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Logs',
    onClick: makeAction('/my-app/logs'),
    iconType: 'logsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Uptime',
    onClick: makeAction('/my-app/uptime'),
    iconType: 'upgradeAssistantApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Maps',
    onClick: makeAction('/my-app/maps'),
    iconType: 'gisApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'SIEM',
    onClick: makeAction('/my-app/siem'),
    iconType: 'securityAnalyticsApp',
    extraAction: pinExtraAction,
  },
]
