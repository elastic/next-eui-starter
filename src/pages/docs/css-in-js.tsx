import { FunctionComponent } from 'react';
import {
  EuiIcon,
  EuiCode,
  EuiText,
  useEuiTheme,
  EuiPageTemplate,
} from '@elastic/eui';
import { css } from '@emotion/react';

const CSSInJS: FunctionComponent = () => {
  const { euiTheme } = useEuiTheme();
  return (
    <EuiPageTemplate template="empty">
      <EuiText>
        <p>
          <EuiIcon
            type="stopFilled"
            size="xxl"
            css={{ color: euiTheme.colors.primary }}
          />{' '}
          This primary color will adjust based on the light or dark theme value
        </p>

        <p
          css={css`
            background: ${euiTheme.colors.lightShade};
            padding: calc(${euiTheme.size.base} * 2);
          `}>
          The padding of this box is created using <EuiCode>calc()</EuiCode>{' '}
          because EUI&apos;s theme sizes are string pixel values that are
          calculated off the theme&apos;s <EuiCode>base</EuiCode>
        </p>
      </EuiText>
    </EuiPageTemplate>
  );
};

export default CSSInJS;
