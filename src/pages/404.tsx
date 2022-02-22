import React, { Fragment, FunctionComponent } from 'react';
import {
  EuiButton,
  EuiEmptyPrompt,
  EuiPageTemplate,
  EuiImage,
  EuiButtonEmpty,
} from '@elastic/eui';
import Link from 'next/link';
import { isColorDark } from '@elastic/eui/src/services/color/is_color_dark';
import { useProvider } from '../components/provider';

const NotFoundPage: FunctionComponent = () => {
  const { colorMode, setColorMode } = useProvider();

  const isDarkTheme = colorMode === 'dark';

  const illustration = isDarkTheme
    ? '/images/404_rainy_cloud_dark.png'
    : '/images/404_rainy_cloud_light.png';

  return (
    <EuiPageTemplate template="empty">
      <EuiEmptyPrompt
        actions={[
          <Link href="/" passHref key="ops">
            <EuiButton color="primary" fill>
              Go Home
            </EuiButton>
          </Link>,
        ]}
        body={
          <p>
            Sorry, we can't find the page you're looking for. It might have been
            removed or renamed, or maybe it never existed.
          </p>
        }
        icon={<EuiImage alt="" size="fullWidth" src={illustration} />}
        layout="vertical"
        title={<h2>Page not found</h2>}
        titleSize="m"
      />
    </EuiPageTemplate>
  );
};

export default NotFoundPage;
