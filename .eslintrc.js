module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next/core-web-vitals',
  ],
  plugins: ['prettier'],
  rules: {
    // In an ideal world, we'd never have to use @ts-ignore, but that's not
    // possible right now.
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    // Again, in theory this is a good rule, but it can cause a bit of
    // unhelpful noise.
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Another theoretically good rule, but sometimes we know better than
    // the linter.
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Accessibility is important to EUI. Enforce all a11y rules.
    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/media-has-caption': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
    'jsx-a11y/label-has-associated-control': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'prefer-object-spread': 'error',

    // Use template strings instead of string concatenation
    'prefer-template': 'error',

    // This is documented as the default, but apparently now needs to be
    // set explicitly
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
};
