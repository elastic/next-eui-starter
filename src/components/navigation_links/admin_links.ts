export const AdminLinks = [
  {
    label: 'Admin',
    iconType: 'managementApp',
    flyoutMenu: {
      title: 'Tools and settings',
      listItems: [
        {
          label: 'Dev tools',
          href: '/dev-tools',
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
          href: '/stack-monitoring',
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
          href: '/stack-management',
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
