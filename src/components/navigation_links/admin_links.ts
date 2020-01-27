export const buildAdminLinks = (makeAction: (path: string) => () => void) => [
  {
    label: 'Admin',
    iconType: 'managementApp',
    flyoutMenu: {
      title: 'Tools and settings',
      listItems: [
        {
          label: 'Dev tools',
          onClick: makeAction('/my-app/dev-tools'),
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
          onClick: makeAction('/my-app/stack-monitoring'),
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
          onClick: makeAction('/my-app/stack-management'),
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
];
