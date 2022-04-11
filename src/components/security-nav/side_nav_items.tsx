import React from 'react';
import { EuiIcon, EuiListGroupItem } from '@elastic/eui';
import Link from 'next/link';
import { css } from '@emotion/react';

export type NavItem = {
  id: string;
  name: string;
  url?: string;
  description?: string;
  render?: () => React.ReactNode;
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
    id: 'threat_hunting',
    name: 'Threat Hunting',
    url: '/security-nav/threat_hunting',
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
    name: 'Manage',
    items: [
      {
        id: 'endpoints',
        name: 'Endpoint',
        description: 'The description goes here',
        url: '#',
      },
      {
        id: 'trusted_apps',
        name: 'Trusted applications',
        description: 'The description goes here',
        url: '#',
      },
      {
        id: 'event_filters',
        name: 'Event filters',
        description: 'The description goes here',
        url: '#',
      },
    ],
  },
];
