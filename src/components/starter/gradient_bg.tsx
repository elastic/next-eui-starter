import { FunctionComponent } from 'react';
import { useEuiTheme, transparentize } from '@elastic/eui';
import { useTheme } from '../theme';
import { gradientBgStyles } from './gradient_bg.styles';

const GradientBg: FunctionComponent = ({ children }) => {
  const { euiTheme } = useEuiTheme();
  const { colorMode } = useTheme();

  const alpha = colorMode === 'dark' ? 0.03 : 0.05;

  const backgroundColors = {
    topLeft: transparentize(euiTheme.colors.success, alpha),
    centerTop: transparentize(euiTheme.colors.accent, alpha),
    topRight: transparentize(euiTheme.colors.warning, alpha),
    centerMiddleLeft: transparentize(euiTheme.colors.warning, alpha),
    centerMiddleRight: transparentize(euiTheme.colors.accent, alpha),
    bottomRight: transparentize(euiTheme.colors.primary, alpha),
    bottomLeft: transparentize(euiTheme.colors.accent, alpha),
  };

  const styles = gradientBgStyles(backgroundColors);

  return <div css={styles.gradientBg}>{children}</div>;
};

export default GradientBg;
