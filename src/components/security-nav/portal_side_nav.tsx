import { Fragment, MouseEvent } from 'react';
import { portalSideNavStyles } from './portal_side_nav.styles';
import {
  EuiDescriptionList,
  EuiDescriptionListDescription,
  EuiDescriptionListTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFocusTrap,
  EuiLink,
  EuiOutsideClickDetector,
  EuiPanel,
  EuiPortal,
  EuiTitle,
  EuiWindowEvent,
  keys,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import { PortalNavItem } from './side_nav_items';

type PortalSideNavProps = {
  onClose: () => void;
  title: string;
  items: PortalNavItem[];
};

const PortalSideNav: React.FC<PortalSideNavProps> = ({
  onClose,
  title,
  items,
}) => {
  const styles = portalSideNavStyles();
  const router = useRouter();

  /**
   * ESC key closes SideNav
   */
  const onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key === keys.ESCAPE) {
      ev.preventDefault();
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
              <EuiFlexGroup
                direction="column"
                gutterSize="l"
                alignItems="flexStart">
                <EuiFlexItem>
                  <EuiTitle size="xs">
                    <strong>{title}</strong>
                  </EuiTitle>
                </EuiFlexItem>

                <EuiFlexItem>
                  <EuiDescriptionList>
                    {items.map((item: PortalNavItem) => (
                      <Fragment key={item.id}>
                        <EuiDescriptionListTitle css={styles.portalNavItem}>
                          <EuiLink
                            href={item.url}
                            onClick={(ev: MouseEvent) => {
                              ev.preventDefault();
                              onClose();
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
            </EuiPanel>
          </EuiOutsideClickDetector>
        </EuiFocusTrap>
      </EuiPortal>
    </>
  );
};

export default PortalSideNav;
