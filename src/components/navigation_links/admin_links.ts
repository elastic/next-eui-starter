export const buildAdminLinks = (makeAction: (path: string) => () => void) => [
  {
    label: 'Admin',
    iconType: 'managementApp',
    flyoutMenu: {
      title: 'Tools and settings',
      listItems: [
        {
          label: 'Dev tools',
          onClick: makeAction('/dev-tools'),
          iconType: 'devToolsApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starEmpty',
            iconSize: 's',
            'aria-label': 'Add to favorites',
          },
        },
        {
          label: 'Stack Monitoring',
          onClick: makeAction('/stack-monitoring'),
          iconType: 'monitoringApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starEmpty',
            iconSize: 's',
            'aria-label': 'Add to favorites',
          },
        },
        {
          label: 'Stack Management',
          onClick: makeAction('/stack-management'),
          iconType: 'managementApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starEmpty',
            iconSize: 's',
            'aria-label': 'Add to favorites',
          },
        },
      ],
    },
  },
]
