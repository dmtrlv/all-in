module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': true,
      },
    },
    'postcss-import': {},
    'postcss-nested': {},
    // 'postcss-custom-media': {
    //   importFrom: ['./styles/customMediaCss.css'],
    // },
    // 'postcss-mixins': {},
  },
};
