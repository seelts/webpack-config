const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cwd = process.cwd();
const sourcePath = path.resolve(cwd, 'src');

const environment = process.env.NODE_ENV || 'development';
const environmentConfig = require(`./webpack.${environment}.config`);

const commonConfig = {
  mode: 'none',
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }],
  },
  resolve: {
    alias: { '@': sourcePath },
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.join(sourcePath, 'main.html') }),
  ],
};

module.exports = (userConfig = {}) =>
  merge(commonConfig, environmentConfig, userConfig);
