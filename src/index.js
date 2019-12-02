const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const babelConfig = require('@filtu/babel-config');

const cwd = process.cwd();
const sourcePath = path.resolve(cwd, 'src');

const environment = process.env.NODE_ENV || 'development';
const environmentConfig = require(`./environments/${environment}`);

const commonConfig = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelConfig,
      },
    ],
  },
  resolve: {
    alias: { '@': sourcePath },
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

module.exports = (userConfiguration = [{}]) => {
  const configurations = [commonConfig, environmentConfig];

  if (Array.isArray(userConfiguration)) {
    configurations.push.apply(configurations, userConfiguration);
  } else {
    configurations.push(userConfiguration);
  }

  return merge(configurations);
};
