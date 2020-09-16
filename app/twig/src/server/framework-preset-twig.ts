// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration } from 'webpack';

export function webpack(config: Configuration) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.twig$/,
          use: [
            {
              loader: require.resolve('@jfrk/twig-loader'),
            },
          ],
        },
      ],
    },
  };
}
