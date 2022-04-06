import { FunctionComponent, useState } from 'react';
import {
  EuiListGroup,
  EuiListGroupItem,
  EuiFlexGroup,
  EuiFlexItem,
  EuiNotificationBadge,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PortalSideNav from './portal_side_nav';
import DashboardsSideNav from './dashboards_side_nav';
import AlertsSideNav from './alerts_side_nav';
import { sideNavStyles } from './side_nav.styles';

const SideNav: FunctionComponent = () => {
  const styles = sideNavStyles();
  const [isDashboardsSideNavVisible, setIsDashboardsSideNavVisible] =
    useState(false);
  const [isAlertsSideNavVisible, setIsAlertsSideNavVisible] = useState(false);

  const router = useRouter();

  const hrefIndex = '/security-nav';
  const hrefDashboards = '/security-nav/dashboards';
  const hrefAlerts = '/security-nav/alerts';

  const toggleDashboardsSideNav = () => {
    if (isAlertsSideNavVisible === true) {
      setIsAlertsSideNavVisible(false);
    }
    setIsDashboardsSideNavVisible(!isDashboardsSideNavVisible);
  };

  const toggleAlertsSideNavVisible = () => {
    if (isDashboardsSideNavVisible) {
      setIsDashboardsSideNavVisible(false);
    }
    setIsAlertsSideNavVisible(!isAlertsSideNavVisible);
  };

  const dashboardsSideNav = isDashboardsSideNavVisible && (
    <PortalSideNav>
      <DashboardsSideNav />
    </PortalSideNav>
  );

  const alertsSideNavVisible = isAlertsSideNavVisible && (
    <PortalSideNav>
      <AlertsSideNav />
    </PortalSideNav>
  );

  const alertsLabel = (
    <EuiFlexGroup alignItems="center">
      <EuiFlexItem>Alerts</EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiNotificationBadge>32</EuiNotificationBadge>
      </EuiFlexItem>
    </EuiFlexGroup>
  );

  return (
    <>
      <EuiListGroup>
        <Link href={hrefIndex} passHref>
          <EuiListGroupItem
            color="text"
            isActive={router.asPath === hrefIndex}
            label="Inbox"
            size="s"
          />
        </Link>

        <Link href={hrefDashboards} passHref>
          <EuiListGroupItem
            color="text"
            isActive={router.asPath === hrefDashboards}
            label="Dashboards"
            size="s"
            extraAction={{
              color: isDashboardsSideNavVisible ? 'primary' : 'text',
              onClick: toggleDashboardsSideNav,
              iconType: 'grid',
              iconSize: 's',
              'aria-label': 'Favorite link1',
              alwaysShow: true,
            }}
          />
        </Link>
        <Link href={hrefAlerts} passHref>
          <EuiListGroupItem
            css={styles.sideNavItem}
            wrapText
            color="text"
            isActive={router.asPath === hrefAlerts}
            label={alertsLabel}
            size="s"
            extraAction={{
              color: isAlertsSideNavVisible ? 'primary' : 'text',
              onClick: toggleAlertsSideNavVisible,
              iconType: 'grid',
              iconSize: 's',
              'aria-label': 'Favorite link1',
              alwaysShow: true,
            }}
          />
        </Link>
      </EuiListGroup>

      {alertsSideNavVisible}
      {dashboardsSideNav}
    </>
  );
};

export default SideNav;
