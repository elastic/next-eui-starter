import {
  EuiCode,
  EuiSteps,
  EuiText,
  EuiCodeBlock,
  EuiSpacer,
} from '@elastic/eui';
import Link from 'next/link';

const steps = [
  {
    title: 'Install yarn',
    children: (
      <>
        <EuiText>
          <p>
            This starter expects to use{' '}
            <Link href="https://yarnpkg.com/">yarn</Link> to manage
            dependencies, so go install it.
          </p>
        </EuiText>
        <EuiSpacer />
      </>
    ),
  },
  {
    title: 'Copy the Next.js starter',
    children: (
      <EuiText>
        <p>Clone the repository:</p>
        <EuiCodeBlock language="bash">
          git clone https://github.com/elastic/next-eui-starter.git
          my-eui-starter
        </EuiCodeBlock>
      </EuiText>
    ),
  },
  {
    title: 'Start developing',
    children: (
      <EuiText>
        <p>Navigate into your new site’s directory and start it up.</p>
        <EuiCodeBlock language="bash" isCopyable>
          {`cd my-eui-starter/

# Install depdendencies.
yarn

# Optional: start a new git project
rm -rf .git && git init && git add . && git commit -m "Initial commit"

# Start the dev server
yarn dev`}
        </EuiCodeBlock>
      </EuiText>
    ),
  },
  {
    title: 'Open the source code and start editing!',
    children: (
      <EuiText>
        <p>
          Your site is now running at <EuiCode>http://localhost:3000</EuiCode>.
        </p>
        <p>
          Open the <EuiCode>my-eui-starter</EuiCode> directory in your code
          editor of choice and edit <EuiCode>src/pages/index.tsx</EuiCode>. Save
          your changes and the browser will update in real time!
        </p>
        <p>
          You can also start by using one of available templates:{' '}
          <strong>kibana</strong> or <strong>docs</strong>. For that just edit{' '}
          <EuiCode>src/pages/kibana/index.tsx</EuiCode> or{' '}
          <EuiCode>src/pages/docs/index.tsx</EuiCode>. These pages are going run
          in <EuiCode>http://localhost:3000/kibana</EuiCode> or{' '}
          <EuiCode>http://localhost:3000/docs</EuiCode> respectively.
        </p>
      </EuiText>
    ),
  },
];

const GettingStartedSteps = () => (
  <EuiSteps headingElement="h2" steps={steps} />
);

export default GettingStartedSteps;
