import React from 'react';
import { EuiListGroupItem } from '@elastic/eui';
import Link from 'next/link';

export type NavItem = {
  id: string;
  label?: string;
  url?: string;
  items?: SubNavItem[];
  render?: () => React.ReactNode;
};

export type SubNavItem = {
  id: string;
  label: string;
  url: string;
  description?: string;
};

export const navItems: NavItem[] = [
  {
    id: 'dashboards',
    label: 'Dashboards',
    url: '/security-nav/dashboards',
    items: [
      {
        id: 'overview',
        label: 'Overview',
        description: 'The description goes here',
        url: '/security-nav',
      },
      {
        id: 'detection_response',
        label: 'Detection & Response',
        description: 'The description goes here',
        url: '/security-nav',
      },
      {
        id: 'cloud_posture_findings',
        label: 'Cloud Posture Findings',
        description: 'The description goes here',
        url: '/security-nav',
      },
    ],
  },
  {
    id: 'alerts',
    label: 'Alerts',
    url: '/security-nav/alerts',
  },
  {
    id: 'investigations',
    label: 'Investigations',
    url: '/security-nav/investigations',
  },
  {
    id: 'cases',
    label: 'Cases',
    url: '/security-nav/cases',
  },
  {
    id: 'threat_hunting',
    label: 'Threat Hunting',
    url: '/security-nav/threat_hunting',
    items: [
      {
        id: 'hosts',
        label: 'Hosts',
        description: 'The description goes here',
        url: '/security-nav/hosts',
      },
      {
        id: 'network',
        label: 'Network',
        description: 'The description goes here',
        url: '/security-nav/network',
      },
      {
        id: 'users',
        label: 'Users',
        description: 'The description goes here',
        url: '/security-nav/users',
      },
    ],
  },
];

export const footerNavItems: NavItem[] = [
  {
    id: 'get_started',
    render: () => (
      <Link href="/security-nav/get_started" passHref>
        <EuiListGroupItem
          label=" GET STARTED"
          size="xs"
          color="text"
          icon={
            <span role="img" aria-label="get started">
              🚀
            </span>
          }
        />
      </Link>
    ),
  },
  {
    id: 'management',
    label: 'Manage',
    items: [
      {
        id: 'endpoints',
        label: 'Endpoint',
        description: 'The description goes here',
        url: '/security-nav',
      },
      {
        id: 'trusted_apps',
        label: 'Trusted applications',
        description: 'The description goes here',
        url: '/security-nav',
      },
      {
        id: 'event_filters',
        label: 'Event filters',
        description: 'The description goes here',
        url: '/security-nav',
      },
    ],
  },
];
