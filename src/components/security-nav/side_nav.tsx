import {
  Fragment,
  FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  EuiListGroup,
  EuiListGroupItem,
  EuiFlexGroup,
  EuiFlexItem,
  EuiAvatar,
  EuiTitle,
  useEuiTheme,
  EuiDescriptionList,
  EuiDescriptionListDescription,
  EuiDescriptionListTitle,
  EuiListGroupItemProps,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PortalSideNav from './portal_side_nav';
import { sideNavStyles } from './side_nav.styles';
import { NavItem } from './side_nav_items';
import { css } from '@emotion/react';

interface SideNavProps {
  items: NavItem[];
  footerItems?: NavItem[];
}
type ActiveSideNav = string | null;

const SideNav: FunctionComponent<SideNavProps> = ({
  items,
  footerItems = [],
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = sideNavStyles(euiTheme);

  const router = useRouter();

  const [activeSideNav, setActiveSideNav] = useState<ActiveSideNav>(null);
  const currentSideNavRef = useRef<ActiveSideNav>(null);
  const openSideNav = (sideNavId: string) => {
    currentSideNavRef.current = sideNavId;
    setActiveSideNav(sideNavId);
  };
  const closeSideNav = () => {
    currentSideNavRef.current = null;
    setActiveSideNav(null);
  };
  const onClose = useCallback(() => {
    const activeSideNav = currentSideNavRef.current;
    // This event is triggered on outside click
    setTimeout(() => {
      // closing the side nav at the end of event loop to make sure it
      // is closed if the current sideNav open button was clicked,
      // but not closed it if any other sideNav open button was clicked
      if (currentSideNavRef.current === activeSideNav) {
        closeSideNav();
      }
    });
  }, []);

  const sideNavItems = useMemo(
    () =>
      [...items, ...footerItems].reduce((acc, navItem) => {
        if (navItem.items && navItem.items.length > 0) {
          acc[navItem.id] = {
            name: navItem.name,
            items: navItem.items,
          };
        }
        return acc;
      }, {}),
    [items, footerItems]
  );

  const sideNav = useMemo(() => {
    if (activeSideNav == null || !sideNavItems[activeSideNav]) {
      return null;
    }
    return (
      <PortalSideNav onClose={onClose}>
        <EuiFlexGroup direction="column" gutterSize="l" alignItems="flexStart">
          <EuiFlexItem>
            <EuiTitle size="xs">
              <strong>{sideNavItems[activeSideNav].name}</strong>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiDescriptionList>
              {sideNavItems[activeSideNav].items.map((item: NavItem) => (
                <>
                  <EuiDescriptionListTitle
                    css={css`
                      font-size: 1em;
                    `}>
                    <Link href={item.url}>{item.name}</Link>
                  </EuiDescriptionListTitle>
                  <EuiDescriptionListDescription>
                    {item.description}
                  </EuiDescriptionListDescription>
                </>
              ))}
            </EuiDescriptionList>
          </EuiFlexItem>
        </EuiFlexGroup>
      </PortalSideNav>
    );
  }, [sideNavItems, activeSideNav, onClose]);

  const renderNavItem = useCallback(
    ({ id, url, name, render, items }: NavItem) => {
      if (render) {
        return <Fragment key={id}>{render()}</Fragment>;
      }
      const extraProps: Partial<EuiListGroupItemProps> = {};
      if (items && items.length > 0) {
        // add extra action of the sideNav toggle button
        extraProps.extraAction = {
          color: activeSideNav === id ? 'primary' : 'text',
          onClick: () => {
            openSideNav(id);
          },
          iconType: 'grid',
          iconSize: 's',
          'aria-label': 'Toggle dashboards side nav',
          alwaysShow: true,
        };
      }
      const navItemColor = router.asPath === url ? 'primary' : 'text';
      return url ? (
        <Link key={id} href={url} passHref>
          <EuiListGroupItem
            color={navItemColor}
            // isActive={router.asPath === hrefDashboards}
            label={name}
            size="s"
            {...extraProps}
          />
        </Link>
      ) : (
        <EuiListGroupItem
          key={id}
          color={navItemColor}
          label={name}
          size="s"
          {...extraProps}
        />
      );
    },
    [activeSideNav, router.asPath]
  );

  return (
    <>
      <EuiFlexGroup
        gutterSize="none"
        direction="column"
        css={css`
          height: 100%;
        `}>
        <EuiFlexItem grow={false}>
          <EuiTitle size="xs" css={styles.title}>
            <h2>
              <EuiAvatar
                name="security logo"
                color="plain"
                iconType="logoSecurity"></EuiAvatar>
              <strong>Security</strong>
            </h2>
          </EuiTitle>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFlexGroup direction="column">
            <EuiFlexItem>
              <EuiListGroup>{items.map(renderNavItem)}</EuiListGroup>
            </EuiFlexItem>
            {footerItems.length > 0 && (
              <EuiFlexItem grow={false}>
                <EuiListGroup>{footerItems.map(renderNavItem)}</EuiListGroup>
              </EuiFlexItem>
            )}
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      {sideNav}
    </>
  );
};

export default SideNav;
