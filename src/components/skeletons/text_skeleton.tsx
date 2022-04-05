import { FunctionComponent } from 'react';

import { useEuiTheme } from '@elastic/eui';
import { textSkeletonStyles } from './text_skeleton.styles';

type TextSkeletonProps = {
  textLines: number;
};

const TextSkeleton: FunctionComponent<TextSkeletonProps> = ({
  textLines = 4,
}) => {
  const { euiTheme } = useEuiTheme();
  const styles = textSkeletonStyles(euiTheme);

  const text = [...Array(textLines)].map((e, i) => (
    <div css={styles.text} key={i} />
  ));

  return (
    <>
      <div css={styles.title} />

      {text}
    </>
  );
};

export default TextSkeleton;
