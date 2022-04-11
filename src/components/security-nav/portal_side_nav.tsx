import { portalSideNavStyles } from './portal_side_nav.styles';
import {
  EuiFocusTrap,
  EuiOutsideClickDetector,
  EuiPanel,
  EuiPortal,
  EuiWindowEvent,
  keys,
} from '@elastic/eui';

type PortalSideNavProps = {
  onClose: () => void;
};

const PortalSideNav: React.FC<PortalSideNavProps> = ({ onClose, children }) => {
  const styles = portalSideNavStyles();

  /**
   * ESC key closes SideNav
   */
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === keys.ESCAPE) {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <>
      <EuiWindowEvent event="keydown" handler={onKeyDown} />
      <EuiPortal>
        <EuiFocusTrap autoFocus>
          <EuiOutsideClickDetector onOutsideClick={() => onClose()}>
            <EuiPanel css={styles.panel} borderRadius="none" paddingSize="l">
              {children}
            </EuiPanel>
          </EuiOutsideClickDetector>
        </EuiFocusTrap>
      </EuiPortal>
    </>
  );
};

export default PortalSideNav;
