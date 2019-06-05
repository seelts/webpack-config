module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: false,
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    moduleIds: 'named',
  },
};
