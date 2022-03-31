import { FunctionComponent } from 'react';
import {
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiCard,
  EuiIcon,
} from '@elastic/eui';
import Link from 'next/link';

const HomeWhy: FunctionComponent = () => {
  return (
    <>
      <EuiTitle size="l">
        <h2>Why should you use this starter?</h2>
      </EuiTitle>

      <EuiSpacer size="m" />

      <EuiText grow={false}>
        <p>
          Sometimes you just need to prototype new functionality or test a new
          feature. This starter gives you an easy way to start experimenting
          with EUI.
        </p>
        <p>
          We always recommend using{' '}
          <Link href="https://codesandbox.io/">CodeSandbox</Link> for testing
          small patterns or functionalities. But when it comes to more complex
          patterns, this starter can definitely help you out.
        </p>
      </EuiText>

      <EuiSpacer size="xl" />

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="l" type="cheer" />}
            display="transparent"
            hasBorder
            title="Prototype"
            description="This starter comes with NextJS, EUI, and Emotion so these give an easy setup to prototype."
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="l" type="training" />}
            display="transparent"
            hasBorder
            title="Learn how to code"
            description="An easy way to learn how to use EUI and ReactJS, or Emotion."
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="l" type="beaker" />}
            display="transparent"
            hasBorder
            title="Experiment"
            description="This starter gives you the perfect environment to experiment
            with functionalities, plugins, or anything custom."
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            icon={<EuiIcon size="l" type="wrench" />}
            display="transparent"
            hasBorder
            title="Test functionality"
            description="The perfect environment to test a new EUI component or any ReactJS react component. "
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};

export default HomeWhy;
