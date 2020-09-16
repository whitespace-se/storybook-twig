// tslint:disable-next-line: no-var-requires
const packageJson = require('../../package.json');

export default {
  packageJson,
  framework: 'twig',
  frameworkPresets: [require.resolve('./framework-preset-twig.js')],
};
