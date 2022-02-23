import React, { FunctionComponent } from 'react';
import {
  EuiButton,
  EuiEmptyPrompt,
  EuiPageTemplate,
  EuiImage,
} from '@elastic/eui';
import Link from 'next/link';
import { useTheme } from '../components/theme';

const NotFoundPage: FunctionComponent = () => {
  const { colorMode } = useTheme();

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
            Sorry, we can&apos;t find the page you&apos;re looking for. It might
            have been removed or renamed, or maybe it never existed.
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
