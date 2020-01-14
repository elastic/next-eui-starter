const faveExtraAction = {
  color: 'subdued',
  iconType: 'starEmpty',
  iconSize: 's',
  'aria-label': 'Add to favorites',
}

export const TopLinks = [
  {
    label: 'Recently viewed',
    iconType: 'clock',
    flyoutMenu: {
      title: 'Recent items',
      listItems: [
        {
          label: 'My dashboard',
          href: '/#/chrome/nav-drawer',
          iconType: 'dashboardApp',
          extraAction: faveExtraAction,
        },
        {
          label: 'Workpad with title that wraps',
          href: '/#/chrome/nav-drawer',
          iconType: 'canvasApp',
          extraAction: faveExtraAction,
        },
        {
          label: 'My logs',
          href: '/#/chrome/nav-drawer',
          iconType: 'logsApp',
          'aria-label': 'This is an alternate aria-label',
          extraAction: faveExtraAction,
        },
      ],
    },
  },
  {
    label: 'Favorites',
    iconType: 'starEmpty',
    flyoutMenu: {
      title: 'Favorite items',
      listItems: [
        {
          label: 'My workpad',
          href: '/#/chrome/nav-drawer',
          iconType: 'canvasApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starFilled',
            iconSize: 's',
            'aria-label': 'Remove from favorites',
            alwaysShow: true,
          },
        },
        {
          label: 'My logs',
          href: '/#/chrome/nav-drawer',
          iconType: 'logsApp',
          extraAction: {
            color: 'subdued',
            iconType: 'starFilled',
            iconSize: 's',
            'aria-label': 'Remove from favorites',
            alwaysShow: true,
          },
        },
      ],
    },
  },
]
