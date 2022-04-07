import {
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
}

const SideNav: FunctionComponent<SideNavProps> = ({ items }) => {
  const { euiTheme } = useEuiTheme();
  const styles = sideNavStyles(euiTheme);

  const router = useRouter();

  const [currentSideNav, setCurrentSideNav] = useState<string | null>(null);
  const currentSideNavRef = useRef<null | string>(null);
  const openSideNav = (sideNavId: string) => {
    currentSideNavRef.current = sideNavId;
    setCurrentSideNav(sideNavId);
  };
  const closeSideNav = () => {
    currentSideNavRef.current = null;
    setCurrentSideNav(null);
  };
  const onClose = useCallback(() => {
    const currentSideNav = currentSideNavRef.current;
    // This event is triggered on outside click
    setTimeout(() => {
      // closing the side nav at the end of event loop to make sure it
      // is closed if the current sideNav open button was clicked,
      // but not closing it if any other sideNav open button was clicked
      if (currentSideNavRef.current === currentSideNav) {
        closeSideNav();
      }
    });
  }, []);

  const sideNavItems = useMemo(
    () =>
      items.reduce((acc, navItem) => {
        if (navItem.items && navItem.items.length > 0) {
          acc[navItem.id] = {
            name: navItem.name,
            items: navItem.items,
          };
        }
        return acc;
      }, {}),
    [items]
  );

  const sideNav = useMemo(() => {
    if (currentSideNav == null || !sideNavItems[currentSideNav]) {
      return null;
    }
    return (
      <PortalSideNav onClose={onClose}>
        <EuiFlexGroup direction="column" gutterSize="l" alignItems="flexStart">
          <EuiFlexItem>
            <EuiTitle size="xs">
              <strong>{sideNavItems[currentSideNav].name}</strong>
            </EuiTitle>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiDescriptionList>
              {sideNavItems[currentSideNav].items.map((item: NavItem) => (
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
  }, [sideNavItems, currentSideNav, onClose]);

  return (
    <>
      <EuiTitle size="xs" css={styles.title}>
        <h2>
          <EuiAvatar
            name="security logo"
            color="plain"
            iconType="logoSecurity"></EuiAvatar>
          <strong>Security</strong>
        </h2>
      </EuiTitle>

      <EuiListGroup>
        {items.map(({ id, url, name, items }) => {
          const extraProps: Partial<EuiListGroupItemProps> = {};
          if (items && items.length > 0) {
            extraProps.extraAction = {
              color: currentSideNav === id ? 'primary' : 'text',
              onClick: () => {
                openSideNav(id);
              },
              iconType: 'grid',
              iconSize: 's',
              'aria-label': 'Toggle dashboards side nav',
              alwaysShow: true,
            };
          } else {
            extraProps.onClick = () => {
              openSideNav(id);
            };
          }
          const groupItem = (
            <EuiListGroupItem
              key={id}
              color={router.asPath === url ? 'primary' : 'text'}
              // isActive={router.asPath === hrefDashboards}
              label={name}
              size="s"
              {...extraProps}
            />
          );
          return (
            <Link key={id} href={url} passHref>
              {groupItem}
            </Link>
          );
        })}
      </EuiListGroup>

      {sideNav}
    </>
  );
};

export default SideNav;
