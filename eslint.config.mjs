import stylistic from '@stylistic/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';


export default withNuxt(
  [
    {
      plugins: {
        '@stylistic': stylistic,
      },
      rules: {
        '@stylistic/indent': ['error', 2],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
      },
    },
  ],
);
