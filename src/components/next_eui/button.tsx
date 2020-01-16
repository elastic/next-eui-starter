import React, { ComponentType, forwardRef } from 'react'
import { EuiButtonProps } from '@elastic/eui/src/components/button/button'
import { EuiButton } from '@elastic/eui'

/**
 * Next's `<Link/>` component passes a ref to its children, which triggers a warning
 * on EUI buttons. Wrap the button component to pass on the ref, and silence the warning.
 */
const NextEuiButton: ComponentType<EuiButtonProps> = forwardRef<typeof EuiButton, EuiButtonProps>((props, ref) => (
  // @ts-ignore forwardRef's `ref` and the `buttonRef` definitions disagree
  <EuiButton {...props} buttonRef={ref}>
    {props.children}
  </EuiButton>
))

NextEuiButton.displayName = `NextEuiButton(forwardRef(EuiButton))`

export default NextEuiButton
