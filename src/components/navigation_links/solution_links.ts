import { pinExtraAction } from './pin_extra_action'

export const buildSolutionLinks = (makeAction: (path: string) => () => void) => [
  {
    label: 'APM',
    onClick: makeAction('/apm'),
    iconType: 'apmApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Metrics',
    onClick: makeAction('/metrics'),
    iconType: 'metricsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Logs',
    onClick: makeAction('/logs'),
    iconType: 'logsApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Uptime',
    onClick: makeAction('/uptime'),
    iconType: 'upgradeAssistantApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'Maps',
    onClick: makeAction('/maps'),
    iconType: 'gisApp',
    extraAction: pinExtraAction,
  },
  {
    label: 'SIEM',
    onClick: makeAction('/siem'),
    iconType: 'securityAnalyticsApp',
    extraAction: pinExtraAction,
  },
]
