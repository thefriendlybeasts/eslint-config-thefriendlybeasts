module.exports = {
  extends: [
    '@vue/airbnb',
    'plugin:vue/essential',
    'thefriendlybeasts/lib/base',
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.vue',
        ],
      },
    },
  },
};
