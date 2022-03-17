import { useState } from 'react';
import {
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiHeader,
  EuiIcon,
  EuiPinnableListGroup,
  EuiPinnableListGroupItemProps,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiListGroup,
  useGeneratedHtmlId,
  EuiAvatar,
} from '@elastic/eui';
import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import { css } from '@emotion/react';

import ThemeSwitcher from '../../components/chrome/theme_switcher';

const TopLinks: EuiPinnableListGroupItemProps[] = [
  {
    label: 'Home',
    iconType: 'home',
    isActive: true,
    'aria-current': true,
    href: '/kibana',
    pinnable: false,
  },
];

const KibanaLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'Discover', href: '/kibana/discover' },
  { label: 'Dashboard', href: '/kibana/dashboards' },
  { label: 'Canvas', href: '/kibana/canvas' },
  { label: 'Maps', href: '/kibana/maps' },
  { label: 'Machine Learning', href: '/kibana/machine-learning' },
  { label: 'Graph', href: '/kibana/graph' },
  { label: 'Visualize Library', href: '/kibana/visualize-library' },
];

const EntSearchLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'App Search', href: '/enterprise-search/app-search' },
  { label: 'Workplace Search', href: '/enterprise-search/workplace-search' },
];

const ObservabilityLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'Overview', href: '/observability/overview' },
  { label: 'Alerts', href: '/observability/alerts' },
  { label: 'Cases', href: '/observability/cases' },
  { label: 'Logs', href: '/observability/logs' },
  { label: 'Metrics', href: '/observability/metrics' },
  { label: 'APM', href: '/observability/apm' },
  { label: 'Uptime', href: '/observability/uptime' },
  { label: 'User Experience', href: '/observability/ux' },
];

const SecurityLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'Overview', href: '/security/overview' },
  { label: 'Alerts', href: '/security/alerts' },
  { label: 'Hosts', href: '/security/hosts' },
  { label: 'Network', href: '/security/network' },
  { label: 'Timelines', href: '/security/timelines' },
  { label: 'Cases', href: '/security/cases' },
  { label: 'Endpoints', href: '/security/endpoints' },
];

const ManagementLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'Dev Tools', href: '/management/dev-tools' },
  { label: 'Integrations', href: '/management/integrations' },
  { label: 'Fleet', href: '/management/fleet' },
  { label: 'Osquery', href: '/management/osquery' },
  { label: 'Stack Monitoring', href: '/management/stack-monitoring' },
  { label: 'Stack Management', href: '/management/stack-management' },
];

const CollapsibleNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const breadcrumbs = [
    {
      text: 'Home',
    },
  ];

  /**
   * Accordion toggling
   */
  const [openGroups, setOpenGroups] = useState(['Kibana']);

  // Save which groups are open and which are not with state and local store
  const toggleAccordion = (isOpen: boolean, title?: string) => {
    if (!title) return;
    const itExists = openGroups.includes(title);
    if (isOpen) {
      if (itExists) return;
      openGroups.push(title);
    } else {
      const index = openGroups.indexOf(title);
      if (index > -1) {
        openGroups.splice(index, 1);
      }
    }
    setOpenGroups([...openGroups]);
    localStorage.setItem('openNavGroups', JSON.stringify(openGroups));
  };

  /**
   * Pinning
   */
  const [pinnedItems, setPinnedItems] = useState<
    EuiPinnableListGroupItemProps[]
  >([]);

  const addPin = (item: any) => {
    if (!item || find(pinnedItems, { label: item.label })) {
      return;
    }
    item.pinned = true;
    const newPinnedItems = pinnedItems ? pinnedItems.concat(item) : [item];
    setPinnedItems(newPinnedItems);
    localStorage.setItem('pinnedItems', JSON.stringify(newPinnedItems));
  };

  const removePin = (item: any) => {
    const pinIndex = findIndex(pinnedItems, { label: item.label });
    if (pinIndex > -1) {
      item.pinned = false;
      const newPinnedItems = pinnedItems;
      newPinnedItems.splice(pinIndex, 1);
      setPinnedItems([...newPinnedItems]);
      localStorage.setItem('pinnedItems', JSON.stringify(newPinnedItems));
    }
  };

  function alterLinksWithCurrentState(
    links: EuiPinnableListGroupItemProps[],
    showPinned = false
  ): EuiPinnableListGroupItemProps[] {
    return links.map(link => {
      const { pinned, ...rest } = link;
      return {
        pinned: showPinned ? pinned : false,
        ...rest,
      };
    });
  }

  function addLinkNameToPinTitle(listItem: EuiPinnableListGroupItemProps) {
    return `Pin ${listItem.label} to top`;
  }

  function addLinkNameToUnpinTitle(listItem: EuiPinnableListGroupItemProps) {
    return `Unpin ${listItem.label}`;
  }

  const collapsibleNavId = useGeneratedHtmlId({ prefix: 'collapsibleNav' });

  const collapsibleNav = (
    <EuiCollapsibleNav
      ownFocus={false}
      css={css`
        margin-top: 96px; // two top navs
        min-height: calc(100vh - 96px);
        display: flex;
      `}
      id={collapsibleNavId}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}>
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}>
      {/* Dark deployments section */}
      <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
        <EuiCollapsibleNavGroup isCollapsible={false} background="dark">
          <EuiListGroup
            color="ghost"
            maxWidth="none"
            gutterSize="none"
            size="s"
            listItems={[
              {
                label: 'Manage deployment',
                href: '#',
                iconType: 'logoCloud',
                iconProps: {
                  color: 'ghost',
                },
              },
            ]}
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
      {/* Shaded pinned section always with a home item */}
      <EuiFlexItem grow={false}>
        <EuiCollapsibleNavGroup background="light">
          <EuiPinnableListGroup
            aria-label="Pinned links" // A11y : Since this group doesn't have a visible `title` it should be provided an accessible description
            listItems={alterLinksWithCurrentState(TopLinks).concat(
              alterLinksWithCurrentState(pinnedItems, true)
            )}
            unpinTitle={addLinkNameToUnpinTitle}
            onPinClick={removePin}
            maxWidth="none"
            color="text"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
      <EuiHorizontalRule margin="none" />
      {/* Menu items */}
      <EuiFlexItem className="eui-yScroll">
        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={e => e.stopPropagation()}>
              Analytics
            </a>
          }
          buttonElement="div"
          iconType="logoKibana"
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Kibana')}
          onToggle={(isOpen: boolean) => toggleAccordion(isOpen, 'Kibana')}>
          <EuiPinnableListGroup
            aria-label="Kibana" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentState(KibanaLinks)}
            pinTitle={addLinkNameToPinTitle}
            onPinClick={addPin}
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>

        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={e => e.stopPropagation()}>
              Enteroprise Search
            </a>
          }
          buttonElement="div"
          iconType="logoEnterpriseSearch"
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Kibana')}
          onToggle={(isOpen: boolean) => toggleAccordion(isOpen, 'Kibana')}>
          <EuiPinnableListGroup
            aria-label="Kibana" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentState(EntSearchLinks)}
            pinTitle={addLinkNameToPinTitle}
            onPinClick={addPin}
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>

        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={e => e.stopPropagation()}>
              Observability
            </a>
          }
          buttonElement="div"
          iconType="logoObservability"
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Kibana')}
          onToggle={(isOpen: boolean) => toggleAccordion(isOpen, 'Kibana')}>
          <EuiPinnableListGroup
            aria-label="Kibana" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentState(ObservabilityLinks)}
            pinTitle={addLinkNameToPinTitle}
            onPinClick={addPin}
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>

        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={e => e.stopPropagation()}>
              Security
            </a>
          }
          buttonElement="div"
          iconType="logoSecurity"
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Kibana')}
          onToggle={(isOpen: boolean) => toggleAccordion(isOpen, 'Kibana')}>
          <EuiPinnableListGroup
            aria-label="Kibana" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentState(SecurityLinks)}
            pinTitle={addLinkNameToPinTitle}
            onPinClick={addPin}
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>

        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={e => e.stopPropagation()}>
              Management
            </a>
          }
          buttonElement="div"
          iconType="managementApp"
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Kibana')}
          onToggle={(isOpen: boolean) => toggleAccordion(isOpen, 'Kibana')}>
          <EuiPinnableListGroup
            aria-label="Kibana" // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentState(ManagementLinks)}
            pinTitle={addLinkNameToPinTitle}
            onPinClick={addPin}
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s"
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );

  const leftSectionItems = [collapsibleNav];

  return (
    <>
      <EuiHeader
        theme="dark"
        position="fixed"
        sections={[
          {
            items: [
              <EuiHeaderLogo key="ops" iconType="logoElastic" href="/">
                Elastic
              </EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [
              <ThemeSwitcher key={useGeneratedHtmlId()} />,
              <EuiHeaderSectionItemButton
                key={useGeneratedHtmlId()}
                aria-label="Account menu">
                <EuiAvatar name="John Username" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />

      <EuiHeader
        position="fixed"
        sections={[
          {
            items: leftSectionItems,
            borders: 'right',
          },
          {
            items: [
              <EuiHeaderSectionItemButton
                key={useGeneratedHtmlId()}
                aria-label="Account menu">
                <EuiAvatar type="space" name="Default Space" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            breadcrumbs: breadcrumbs,
            borders: 'right',
          },
        ]}
      />
    </>
  );
};

export default CollapsibleNav;
