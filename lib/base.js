module.exports = {
  extends: 'airbnb-base',


  rules: {
    'arrow-parens': ['error', 'as-needed'],

    'comma-dangle': ['error', 'always-multiline'],

    'import/extensions':                 false,
    'import/no-extraneous-dependencies': 'warn',

    'key-spacing': ['error', {
      align: 'value',
    }],

    'no-mixed-operators': ['error', {
      allowSamePrecedence: true,
    }],

    'no-multi-spaces': ['error', {
      exceptions: {
        ImportDeclaration:  true,
        Property:           true,
        VariableDeclarator: true
      },
      ignoreEOLComments: false,
    }],

    'no-multiple-empty-lines': ['error', {
      max:    4,
      maxBOF: 0,
    }],

    'no-param-reassign': 'warn',

    'no-return-assign': 'warn',
  },
};
