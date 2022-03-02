import { useState } from 'react';
import { css } from '@emotion/react';
import {
  EuiHeader,
  EuiHeaderLogo,
  useGeneratedHtmlId,
  EuiPageTemplate,
  EuiSideNav,
  htmlIdGenerator,
} from '@elastic/eui';
import ThemeSwitcher from '../../components/chrome/theme_switcher';

const DocsLayout = ({ title, children, iconType, description }) => {
  const [isSideNavOpenOnMobile, setisSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setisSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const sideNav = [
    {
      name: 'Root item',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Item with onClick',
          id: htmlIdGenerator('basicExample')(),
          onClick: () => {},
        },
        {
          name: 'Item with href',
          id: htmlIdGenerator('basicExample')(),
          href: '/#/navigation/side-nav',
        },
        {
          name: 'Selected item',
          id: htmlIdGenerator('basicExample')(),
          onClick: () => {},
          isSelected: true,
        },
        {
          name: 'Disabled item',
          id: htmlIdGenerator('basicExample')(),
          disabled: true,
        },
      ],
    },
  ];

  return (
    <div
      css={css`
        margin-top: 48px; // top nav
        min-height: calc(100vh - 48px);
        display: flex;
      `}>
      <EuiHeader
        theme="dark"
        position="fixed"
        sections={[
          {
            items: [
              <EuiHeaderLogo key="elastic-docs" iconType="logoElastic">
                Elastic docs
              </EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [<ThemeSwitcher key={useGeneratedHtmlId()} />],
            borders: 'none',
          },
        ]}
      />
      <EuiPageTemplate
        pageSideBar={<EuiSideNav mobileTitle="Nav Items" items={sideNav} />}
        pageHeader={{
          iconType: iconType,
          pageTitle: title,
          description: description,
        }}>
        {children}
      </EuiPageTemplate>
    </div>
  );
};

export default DocsLayout;
