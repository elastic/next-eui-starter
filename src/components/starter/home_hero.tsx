import { FunctionComponent } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiSpacer,
  EuiText,
  EuiLink,
} from '@elastic/eui';
import HomeIllustration from './home_illustration';
import Link from 'next/link';

const HomeHero: FunctionComponent = () => {
  return (
    <EuiFlexGroup
      alignItems="center"
      gutterSize="none"
      className="guideHome__hero">
      <EuiFlexItem>
        <EuiTitle size="l">
          <h1>NextJS EUI Starter</h1>
        </EuiTitle>
        <EuiSpacer />
        <EuiSpacer />
        <EuiTitle size="s">
          <h2>Welcome to NextJS EUI Starter</h2>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiText grow={false}>
          <p>
            The NextJS Starter uses NextJS(opens in a new tab or window) and
            EUI(opens in a new tab or window) to help you make prototypes. You
            just need to know a few basic NextJS concepts and how to use EUI and
            you&apos;re ready to ship it!
          </p>
          <EuiFlexGroup gutterSize="xl" wrap responsive={false}>
            <EuiFlexItem grow={false}>
              <Link href="/getting-started" passHref>
                <EuiLink>
                  <strong>Getting started</strong>
                </EuiLink>
              </Link>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiLink href="https://github.com/elastic/eui/blob/main/CONTRIBUTING.md">
                <strong>Contributing</strong>
              </EuiLink>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <HomeIllustration />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default HomeHero;
