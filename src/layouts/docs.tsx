import {
  EuiHeader,
  EuiHeaderLogo,
  useGeneratedHtmlId,
  EuiPageTemplate,
  EuiSideNav,
  htmlIdGenerator,
} from '@elastic/eui';
import ThemeSwitcher from '../components/chrome/theme_switcher';
import { docsLayout } from './docs.styles';

const pathPrefix = process.env.PATH_PREFIX;

const DocsLayout = ({ pageHeader, children }) => {
  const sideNav = [
    {
      name: 'Docs',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Home',
          id: htmlIdGenerator('basicExample')(),
          href: `${pathPrefix}/docs`,
        },
        {
          name: 'Page 2',
          id: htmlIdGenerator('basicExample')(),
          href: `${pathPrefix}/docs/page-2`,
        },
      ],
    },
  ];

  const styles = docsLayout();

  return (
    <div css={styles.wrapper}>
      <EuiHeader
        theme="dark"
        position="fixed"
        sections={[
          {
            items: [
              <EuiHeaderLogo
                key="elastic-docs"
                iconType="logoElastic"
                href={`${pathPrefix}/docs`}>
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
