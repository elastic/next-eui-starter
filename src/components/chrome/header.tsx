import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { EuiHeader, EuiTitle, useEuiTheme } from '@elastic/eui';
import ThemeSwitcher from '../../components/chrome/theme_switcher';

const Header = () => {
  const { euiTheme } = useEuiTheme();

  return (
    <EuiHeader
      position="fixed"
      sections={[
        {
          items: [
            <Link key="logo-eui" href="/" passHref>
              <a
                css={css`
                  display: inline-flex;
                  flex-wrap: wrap;
                  gap: ${euiTheme.size.m};
                `}>
                <Image
                  width={24}
                  height={24}
                  src="/images/logo-eui.svg"
                  alt=""
                />
                <EuiTitle size="xxs">
                  <span>NextJS EUI Starter</span>
                </EuiTitle>
              </a>
            </Link>,
          ],
          borders: 'none',
        },
        {
          items: [<ThemeSwitcher key="theme-switcher" />],
          borders: 'none',
        },
      ]}
    />
  );
};

export default Header;
