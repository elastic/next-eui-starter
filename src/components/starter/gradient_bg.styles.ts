import { css } from '@emotion/react';

export const gradientBgStyles = backgroundColors => ({
  gradientBg: css`
    position: relative;
    padding-top: 48px; // top nav
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
  `,
});
