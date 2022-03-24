import { FunctionComponent } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiText,
  EuiButton,
  EuiLink,
} from '@elastic/eui';
import HomeIllustration from './home_illustration';
import Link from 'next/link';
import { homeHeroStyles } from './home_hero.styles';
import { useEuiTheme } from '@elastic/eui';

const HomeHero: FunctionComponent = () => {
  const { euiTheme } = useEuiTheme();
  const styles = homeHeroStyles(euiTheme);

  return (
    <EuiFlexGroup alignItems="center" css={styles.container}>
      <EuiFlexItem>
        <EuiTitle size="l" css={styles.title}>
          <h1>NextJS EUI Starter</h1>
        </EuiTitle>
        <EuiTitle size="s" css={styles.subtitle}>
          <h2>Welcome to NextJS EUI Starter</h2>
        </EuiTitle>

        <EuiText grow={false} css={styles.description}>
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
