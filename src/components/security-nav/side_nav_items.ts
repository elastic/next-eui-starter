export type NavItem = {
  id: string;
  name: string;
  description?: string;
  url?: string;
  items?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    id: 'dashboards',
    name: 'Dashboards',
    url: '/security-nav/dashboards',
    items: [
      {
        id: 'overview',
        name: 'Overview',
        description: 'The description goes here',
        url: '/security-nav',
      },
      {
        id: 'detection_response',
        name: 'Detection & Response',
        description: 'The description goes here',
        url: '/security-nav',
      },
      {
        id: 'cloud_posture_findings',
        name: 'Cloud Posture Findings',
        description: 'The description goes here',
        url: '/security-nav',
      },
    ],
  },
  {
    id: 'alerts',
    name: 'Alerts',
    url: '/security-nav/alerts',
  },
  {
    id: 'investigations',
    name: 'Investigations',
    url: '/security-nav/investigations',
  },
  {
    id: 'cases',
    name: 'Cases',
    url: '/security-nav/cases',
  },
  {
    id: 'entities',
    name: 'Entities',
    url: '/security-nav/entities',
    items: [
      {
        id: 'hosts',
        name: 'Hosts',
        description: 'The description goes here',
        url: '/security-nav/hosts',
      },
      {
        id: 'network',
        name: 'Network',
        description: 'The description goes here',
        url: '/security-nav/network',
      },
      {
        id: 'users',
        name: 'Users',
        description: 'The description goes here',
        url: '/security-nav/users',
      },
    ],
  },
];

export const footerNavItems: NavItem[] = [
  {
    id: 'get_started',
    name: 'Get Started',
    url: '/security-nav/getStarted',
  },
  {
    id: 'management',
    name: 'Management',
    items: [
      {
        id: 'hosts',
        name: 'Hosts',
        description: 'The description goes here',
        url: '/security-nav/hosts',
      },
      {
        id: 'network',
        name: 'Network',
        description: 'The description goes here',
        url: '/security-nav/network',
      },
      {
        id: 'users',
        name: 'Users',
        description: 'The description goes here',
        url: '/security-nav/users',
      },
    ],
  },
];
