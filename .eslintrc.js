module.exports = {
  'env': {
    'node': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 2020,
  },
  'rules': {
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'max-len': ['error', {
      'code': 130,
      'ignoreTrailingComments': true, 'ignoreUrls': true, 'ignoreRegExpLiterals': true, 'ignoreTemplateLiterals': true,
    }],
  },
};
