console.log("Custom Webpack configuration is being applied!");
const { override, addBabelPreset } = require('customize-cra');

module.exports = override(
  addBabelPreset([
    '@babel/preset-env',
    {
      targets: {
        browsers: ['last 2 versions', 'iOS >= 14'],
      },
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ])
);