import { FunctionComponent } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiIcon, EuiCard } from '@elastic/eui';
import { useTheme } from '../theme';

const HomeCards: FunctionComponent = () => {
  const { colorMode } = useTheme();

  return (
    <EuiFlexGroup>
      <EuiFlexItem>
        <EuiCard
          display="transparent"
          icon={<EuiIcon size="xxl" type="indexMapping" />}
          title="Easy routing"
          description="Just add a page inside the pages folder and the new route is ready."
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          display="transparent"
          icon={<EuiIcon size="xxl" type="tableOfContents" />}
          title="Page templates"
          description="We have some templates ready to be used or you can use any of EUI page templates."
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          display="transparent"
          icon={<EuiIcon size="xxl" type="indexMapping" />}
          title="CSS in JS ready"
          description={<>Consume any of EUI theme variables.</>}
        />
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiCard
          display="transparent"
          icon={
            <EuiIcon size="xxl" type={colorMode === 'dark' ? 'moon' : 'sun'} />
          }
          title="Light and dark ready"
          description={
            <>
              Test your prototypes in light and dark themes. All the layout
              headers have a toggle to change the theme.
            </>
          }
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

export default HomeCards;
