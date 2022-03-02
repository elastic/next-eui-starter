import { FunctionComponent } from 'react';

import { EuiProvider, EuiThemeColorMode } from '@elastic/eui';

import { useTheme } from '../theme';

import createCache from '@emotion/cache';

/**
 * Renders the UI that surrounds the page content.
 */
const Chrome: FunctionComponent = ({ children }) => {
  const { colorMode } = useTheme();

  /**
   * This `@emotion/cache` instance is used to insert the global styles
   * into the correct location in `<head>`. Otherwise they would be
   * inserted after the static CSS files, resulting in style clashes.
   * Only necessary until EUI has converted all components to CSS-in-JS:
   * https://github.com/elastic/eui/issues/3912
   */
  const emotionCache = createCache({
    key: 'eui-styles',
    container:
      typeof document !== 'undefined'
        ? document.querySelector('meta[name="eui-styles-global"]')
        : null,
  });

  return (
    <EuiProvider
      colorMode={colorMode as EuiThemeColorMode}
      cache={emotionCache}>
      {children}
    </EuiProvider>
  );
};

export default Chrome;
