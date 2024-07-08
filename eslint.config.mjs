import { fixupConfigRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.node } },
  {
    env: {
      browser: true,
      es2021: true,
    },
  },
  { extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'] },
  { plugins: ['react', 'react-native'] },
  {
    rules: {
      //you can turn off warning by making it "off"
      'react/function-component-definition': 'off',
      'no-param-reassign': 'off',

      // allow .js files to contain JSX code
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

      // prevent eslint to complain about the "styles" variable being used before it was defined
      'no-use-before-define': ['error', { variables: false }],

      // ignore errors for the react-navigation package
      'react/prop-types': ['error', { ignore: ['navigation', 'navigation.navigate'] }],

      // enforce a maximum of two styles for inline styles
      'react-native/no-inline-styles': 'error', // Add this line

      // enforce a maximum file length of 500 lines
      'max-lines': ['error', { max: 500 }],
      'no-console': 'warn',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];
