import React, { forwardRef } from 'react';
import { EuiButton } from '@elastic/eui';

/**
 * Next's `<Link/>` component passes a ref to its children, which triggers a warning
 * on EUI buttons (they expect `buttonRef`). Wrap the button component to pass on the
 * ref, and silence the warning.
 */

type EuiButtonProps = React.ComponentProps<typeof EuiButton>;
const NextEuiButton = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  EuiButtonProps
>((props, ref) => {
  return (
    // @ts-ignore EuiButton's ref is an HTMLButtonElement or an
    // HTMLAnchorElement, depending on whether `href` prop is passed
    <EuiButton {...props} buttonRef={ref}>
      {props.children}
    </EuiButton>
  );
});

NextEuiButton.displayName = 'NextEuiButton(EuiButton)';

export default NextEuiButton;
