const path = require('path');

const cwd = process.cwd();
const outputPath = path.resolve(cwd, 'dist');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: 'hidden-source-map',
  optimization: {
    moduleIds: 'hashed',
  },
  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[chunkhash].js',
  },
};
