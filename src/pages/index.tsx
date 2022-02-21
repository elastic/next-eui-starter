import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import {
  EuiButton,
  EuiCode,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
  EuiIcon,
  EuiCard,
  EuiPageTemplate,
} from '@elastic/eui';

import MyComponent from '../components/my_component';

const Index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <EuiPageTemplate
        template="empty"
        pageHeader={{
          pageTitle: 'Welcome home',
        }}>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="indexMapping" />}
              title="Easy routing"
              description="Example of a card's description. Stick to one or two sentences."
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="tableOfContents" />}
              title="Page templates"
              description="Example of a card's description. Stick to one or two sentences."
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="indexMapping" />}
              title="CSS in JS ready"
              description="Example of a card's description. Stick to one or two sentences."
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiIcon size="xxl" type="moon" />}
              title="Light and dark ready"
              description="Example of a card's description. Stick to one or two sentences."
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageTemplate>
    </>
  );
};

export default Index;
