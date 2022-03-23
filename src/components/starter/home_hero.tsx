import { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiSpacer,
  EuiText,
  EuiButton,
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
            The NextJS Starter uses{' '}
            <EuiLink external={true} href="https://nextjs.org/">
              NextJS
            </EuiLink>
            ,{' '}
            <EuiLink href="https://elastic.github.io/eui/" external={true}>
              EUI library
            </EuiLink>
            , and{' '}
            <EuiLink
              href="https://emotion.sh/docs/introduction"
              external={true}>
              Emotion
            </EuiLink>{' '}
            to help you make prototypes. You just need to know a few basic
            NextJS concepts and how to use EUI and you&apos;re ready to ship it!
          </p>

          <Link href="/getting-started" passHref>
            <EuiButton>
              <strong>Getting started</strong>
            </EuiButton>
          </Link>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <HomeIllustration />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default HomeHero;
