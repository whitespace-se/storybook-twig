// tslint:disable-next-line: no-var-requires
const packageJson = require('../../package.json');

export default {
  packageJson,
  framework: 'twig',
  frameworkPath: '@whitespace/storybook-twig',
  frameworkPresets: [require.resolve('./framework-preset-twig.js')],
};
