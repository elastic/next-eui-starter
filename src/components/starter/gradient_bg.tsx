import { FunctionComponent } from 'react';
import { useEuiTheme, transparentize } from '@elastic/eui';
import { css } from '@emotion/react';
import { useTheme } from '../theme';

const GradientBg: FunctionComponent = ({ children }) => {
  const { euiTheme } = useEuiTheme();
  const { colorMode } = useTheme();

  const alpha = colorMode === 'dark' ? 0.03 : 0.08;

  const backgroundColors = {
    topLeft: transparentize(euiTheme.colors.success, alpha),
    centerTop: transparentize(euiTheme.colors.accent, alpha),
    topRight: transparentize(euiTheme.colors.warning, alpha),
    centerMiddleLeft: transparentize(euiTheme.colors.warning, alpha),
    centerMiddleRight: transparentize(euiTheme.colors.accent, alpha),
    bottomRight: transparentize(euiTheme.colors.primary, alpha),
    bottomLeft: transparentize(euiTheme.colors.accent, alpha),
  };

  return (
    <div
      css={css`
        position: relative;
        margin-top: 48px; // top nav
        min-height: calc(100vh - 48px);
        background: radial-gradient(
            circle 600px at top left,
            ${backgroundColors.topLeft},
            transparent
          ),
          radial-gradient(
            circle 800px at 600px 200px,
            ${backgroundColors.centerTop},
            transparent
          ),
          radial-gradient(
            circle 800px at top right,
            ${backgroundColors.topRight},
            transparent
          ),
          radial-gradient(
            circle 800px at left center,
            ${backgroundColors.centerMiddleLeft},
            transparent
          ),
          radial-gradient(
            circle 800px at right center,
            ${backgroundColors.centerMiddleRight},
            transparent
          ),
          radial-gradient(
            circle 800px at right bottom,
            ${backgroundColors.bottomRight},
            transparent
          ),
          radial-gradient(
            circle 800px at left bottom,
            ${backgroundColors.bottomLeft},
            transparent
          );
      `}>
      {children}
    </div>
  );
};

export default GradientBg;
