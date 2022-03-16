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

const DocsLayout = ({ pageHeader, children }) => {
  const sideNav = [
    {
      name: 'Docs',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Home',
          id: htmlIdGenerator('basicExample')(),
          href: '/docs/',
        },
        {
          name: 'Page 2',
          id: htmlIdGenerator('basicExample')(),
          href: '/docs/page-2',
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
              <EuiHeaderLogo key="elastic-docs" iconType="logoElastic" href="/">
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
        pageHeader={pageHeader}
        pageSideBar={<EuiSideNav mobileTitle="Nav Items" items={sideNav} />}>
        {children}
      </EuiPageTemplate>
    </div>
  );
};

export default DocsLayout;
