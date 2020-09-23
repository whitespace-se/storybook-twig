const path = require('path');

module.exports = {
  stories: [`../**/*.stories.*`],
  addons: [
    '@storybook/addon-essentials',
    // "@storybook/addon-docs",
    // "@storybook/addon-a11y",
    // "@storybook/addon-actions",
    // "@storybook/addon-backgrounds",
    // "@storybook/addon-events",
    // "@storybook/addon-jest",
    // "@storybook/addon-knobs",
    // "@storybook/addon-links",
    // "@storybook/addon-options",
    // "@storybook/addon-storysource",
    // "@storybook/addon-viewport"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.forEach((rule) => {
      if (!/twig/.test(rule.test.source)) {
        return;
      }
      let plugin = rule.use[0];
      plugin.options = plugin.options || {};
      // plugin.options.extender = path.join(__dirname, '/twig-extender.js');
      plugin.options.paths = plugin.options.paths || [];
      plugin.options.paths.push(
        path.join(__dirname, '../components'),
        path.join(__dirname, '../stories')
      );
    });

    return config;
  },
};
