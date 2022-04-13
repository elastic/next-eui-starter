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
  EuiListGroupItemProps,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PortalSideNav from './portal_side_nav';
import { sideNavStyles } from './side_nav.styles';
import { NavItem, PortalNavItem } from './side_nav_items';
import { css } from '@emotion/react';

interface SideNavProps {
  items: NavItem[];
  footerItems?: NavItem[];
}
type ActivePortalNav = string | null;

const SideNav: FunctionComponent<SideNavProps> = ({
  items,
  footerItems = [],
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = sideNavStyles(euiTheme);

  const router = useRouter();

  const [activePortalNavId, setActivePortalNavId] =
    useState<ActivePortalNav>(null);
  const activePortalNavIdRef = useRef<ActivePortalNav>(null);

  const openPortalNav = (navId: string) => {
    activePortalNavIdRef.current = navId;
    setActivePortalNavId(navId);
  };

  const closePortalNav = () => {
    activePortalNavIdRef.current = null;
    setActivePortalNavId(null);
  };

  const onClosePortalNav = useCallback(() => {
    const currentPortalNavId = activePortalNavIdRef.current;
    // This event is triggered on outside click
    setTimeout(() => {
      // closing the side nav at the end of event loop to make sure it
      // closes even if the active "sub nav" open button has been clicked (toggle),
      // but it does not close if any other "sub nav" open button has been clicked
      if (activePortalNavIdRef.current === currentPortalNavId) {
        closePortalNav();
      }
    });
  }, []);

  const portalNavById = useMemo(
    () =>
      [...items, ...footerItems].reduce<
        Record<string, { title: string; items: PortalNavItem[] }>
      >((acc, navItem) => {
        if (navItem.items && navItem.items.length > 0) {
          acc[navItem.id] = {
            title: navItem.label,
            items: navItem.items,
          };
        }
        return acc;
      }, {}),
    [items, footerItems]
  );

  const portalNav = useMemo(() => {
    if (activePortalNavId == null || !portalNavById[activePortalNavId]) {
      return null;
    }
    const { items, title } = portalNavById[activePortalNavId];
    return (
      <PortalSideNav onClose={onClosePortalNav} items={items} title={title} />
    );
  }, [activePortalNavId, portalNavById, onClosePortalNav]);

  const isItemCurrentNav = useCallback(
    (id: string, url: string): boolean => {
      if (url === router.asPath) {
        return true;
      }
      return (
        portalNavById[id] != null &&
        !!portalNavById[id].items.find(
          portalNav => portalNav.url === router.asPath
        )
      );
    },
    [portalNavById, router.asPath]
  );

  const renderNavItem = useCallback(
    ({ id, url, label, items, render }: NavItem) => {
      if (render) {
        return <Fragment key={id}>{render()}</Fragment>;
      }
      const isActive = activePortalNavId === id;
      const isCurrentNav = isItemCurrentNav(id, url);
      const props: Partial<EuiListGroupItemProps> = {};
      if (items && items.length > 0) {
        // add extra action of the portalNav toggle button
        props.extraAction = {
          color: isActive ? 'primary' : 'text',
          onClick: () => {
            openPortalNav(id);
          },
          iconType: 'grid',
          iconSize: 's',
          'aria-label': 'Toggle group nav',
          alwaysShow: true,
        };
      }
      const sideNavItem = (
        <EuiListGroupItem
          css={styles.sideNavItem}
          isActive={isActive}
          color={isCurrentNav ? 'primary' : 'text'}
          label={label}
          size="s"
          {...props}
        />
      );

      return (
        <Fragment key={id}>
          {url ? (
            <Link href={url} passHref>
              {sideNavItem}
            </Link>
          ) : (
            sideNavItem
          )}
        </Fragment>
      );
    },
    [activePortalNavId, isItemCurrentNav, styles.sideNavItem]
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
            <EuiFlexItem grow={false}>
              <EuiListGroup>{footerItems.map(renderNavItem)}</EuiListGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>

      {portalNav}
    </>
  );
};

export default SideNav;
