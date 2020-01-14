export const AdminLinks = [
  {
    label: 'Admin',
    iconType: 'managementApp',
    flyoutMenu: {
      title: 'Tools and settings',
      listItems: [
        {
          label: 'Dev tools',
          href: '/#/chrome/nav-drawer',
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
          href: '/#/chrome/nav-drawer',
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
          href: '/#/chrome/nav-drawer',
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
