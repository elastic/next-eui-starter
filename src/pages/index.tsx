import { FunctionComponent } from 'react';
import Head from 'next/head';
import { EuiHorizontalRule } from '@elastic/eui';
import HomeCards from '../components/starter/home_cards';
import HomeHero from '../components/starter/home_hero';
import Wrapper from '../components/starter/wrapper';

const Index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Wrapper>
        <HomeHero />

        <EuiHorizontalRule />

        <HomeCards />

        <EuiHorizontalRule />
      </Wrapper>
    </>
  );
};

export default Index;
