import {
  Fragment,
  FunctionComponent,
  MouseEvent,
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
  EuiLink,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PortalSideNav from './portal_side_nav';
import { sideNavStyles } from './side_nav.styles';
import { NavItem, SubNavItem } from './side_nav_items';
import { css } from '@emotion/react';

interface SideNavProps {
  items: NavItem[];
  footerItems?: NavItem[];
}
type ActiveSubNav = string | null;

const SideNav: FunctionComponent<SideNavProps> = ({
  items,
  footerItems = [],
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = sideNavStyles(euiTheme);

  const router = useRouter();

  const [activeSubNav, setActiveSubNav] = useState<ActiveSubNav>(null);
  const currentSubNavRef = useRef<ActiveSubNav>(null);
  const openSubNav = (subNavId: string) => {
    currentSubNavRef.current = subNavId;
    setActiveSubNav(subNavId);
  };
  const closeSubNav = () => {
    currentSubNavRef.current = null;
    setActiveSubNav(null);
  };
  const onClose = useCallback(() => {
    const activeSubNav = currentSubNavRef.current;
    // This event is triggered on outside click
    setTimeout(() => {
      // closing the side nav at the end of event loop to make sure it
      // closes even if the active "sub nav" open button has been clicked (toggle),
      // but it does not close if any other "sub nav" open button has been clicked
      if (currentSubNavRef.current === activeSubNav) {
        closeSubNav();
      }
    });
  }, []);

  const subNavItems = useMemo(
    () =>
      [...items, ...footerItems].reduce<
        Record<string, { label: string; items: SubNavItem[] }>
      >((acc, navItem) => {
        if (navItem.items && navItem.items.length > 0) {
          acc[navItem.id] = {
            label: navItem.label,
            items: navItem.items,
          };
        }
        return acc;
      }, {}),
    [items, footerItems]
  );

  const portalNav = useMemo(() => {
    if (activeSubNav == null || !subNavItems[activeSubNav]) {
      return null;
    }
    return (
      <PortalSideNav onClose={onClose}>
        <EuiFlexGroup direction="column" gutterSize="l" alignItems="flexStart">
          <EuiFlexItem>
            <EuiTitle size="xs">
              <strong>{subNavItems[activeSubNav].label}</strong>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiDescriptionList>
              {subNavItems[activeSubNav].items.map((item: SubNavItem) => (
                <Fragment key={item.id}>
                  <EuiDescriptionListTitle css={styles.subNavItem}>
                    <EuiLink
                      href={item.url}
                      onClick={(ev: MouseEvent) => {
                        ev.preventDefault();
                        closeSubNav();
                        router.push(item.url);
                      }}>
                      {item.label}
                    </EuiLink>
                  </EuiDescriptionListTitle>
                  <EuiDescriptionListDescription>
                    {item.description}
                  </EuiDescriptionListDescription>
                </Fragment>
              ))}
            </EuiDescriptionList>
          </EuiFlexItem>
        </EuiFlexGroup>
      </PortalSideNav>
    );
  }, [activeSubNav, subNavItems, onClose, styles.subNavItem, router]);

  const renderNavItem = useCallback(
    ({ id, url, label, items, render }: NavItem) => {
      if (render) {
        return <Fragment key={id}>{render()}</Fragment>;
      }
      const props: Partial<EuiListGroupItemProps> = {};
      if (items && items.length > 0) {
        // add extra action of the portalNav toggle button
        props.extraAction = {
          color: activeSubNav === id ? 'primary' : 'text',
          onClick: () => {
            openSubNav(id);
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
          color={router.asPath === url ? 'primary' : 'text'}
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
    [activeSubNav, router.asPath, styles.sideNavItem]
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
