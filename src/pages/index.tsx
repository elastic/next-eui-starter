import { FunctionComponent } from 'react';
import Head from 'next/head';
import { EuiSpacer } from '@elastic/eui';
import HomeHero from '../components/starter/home_hero';
import Wrapper from '../components/starter/wrapper';
import HomeTemplates from '../components/starter/home_templates';
import HomeWhy from '../components/starter/home_why';

const Index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Wrapper>
        <HomeHero />

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />

        <HomeWhy />

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />

        <HomeTemplates />

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />
      </Wrapper>
    </>
  );
};

export default Index;
