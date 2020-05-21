import {
  EuiButtonIconPropsForButton,
  EuiNavDrawerGroupProps,
} from '@elastic/eui';

const faveExtraAction: EuiButtonIconPropsForButton = {
  color: 'subdued',
  iconType: 'starEmpty',
  iconSize: 's',
  'aria-label': 'Add to favorites',
};

export const buildTopLinks = (
  makeAction: (path: string) => () => void
): EuiNavDrawerGroupProps['listItems'] => [
  {
    label: 'Recently viewed',
    iconType: 'clock',
    flyoutMenu: {
      title: 'Recent items',
      listItems: [
        {
          label: 'My dashboard',
          onClick: makeAction('/my-app/my-dashboard'),
          iconType: 'dashboardApp',
          extraAction: faveExtraAction,
        },
        {
          label: 'Workpad with title that wraps',
          onClick: makeAction('/my-app/workpad'),
          iconType: 'canvasApp',
          extraAction: faveExtraAction,
        },
        {
          label: 'My logs',
          onClick: makeAction('/my-app/my-logs'),
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
          onClick: makeAction('/my-app/my-workpad'),
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
          onClick: makeAction('/my-app/my-logs'),
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
];
