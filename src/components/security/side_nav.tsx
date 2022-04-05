import { FunctionComponent, useState } from 'react';
import { EuiListGroup, EuiListGroupItem } from '@elastic/eui';
import PortalSideNav from './portal_side_nav';
import DashboardsSideNav from './dashboards_side_nav';
import AlertsSideNav from './alerts_side_nav';

const SideNav: FunctionComponent = () => {
  const [isDashboardsSideNavVisible, setIsDashboardsSideNavVisible] =
    useState(false);
  const [isAlertsSideNavVisible, setIsAlertsSideNavVisible] = useState(false);
  const [isDashboardsLinkActive, setIsDashboardsLinkActive] = useState(false);
  const [isAlertsLinkActive, setIsAlertsLinkActive] = useState(false);

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

  return (
    <>
      <EuiListGroup>
        <EuiListGroupItem
          onClick={() => {}}
          label="Inbox"
          color="text"
          size="s"
        />
        <EuiListGroupItem
          onClick={() => setIsDashboardsLinkActive(!isDashboardsLinkActive)}
          label="Dashboards"
          color={isDashboardsLinkActive ? 'primary' : 'text'}
          isActive={isDashboardsLinkActive}
          size="s"
          extraAction={{
            color: 'text',
            onClick: toggleDashboardsSideNav,
            iconType: 'grid',
            iconSize: 's',
            'aria-label': 'Favorite link1',
            alwaysShow: true,
          }}
        />
        <EuiListGroupItem
          onClick={() => console.log('ops')}
          label="Alerts"
          color="primary"
          //isActive
          size="s"
          extraAction={{
            color: 'text',
            onClick: toggleAlertsSideNavVisible,
            iconType: 'grid',
            iconSize: 's',
            'aria-label': 'Favorite link1',
            alwaysShow: true,
          }}
        />
      </EuiListGroup>

      {alertsSideNavVisible}
      {dashboardsSideNav}
    </>
  );
};

export default SideNav;
