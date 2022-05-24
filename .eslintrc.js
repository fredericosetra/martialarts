module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        jsxSingleQuote: true,
        semi: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        bracketSameLine: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
};
