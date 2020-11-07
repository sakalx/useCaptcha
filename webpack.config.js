const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'example/src/index.html'),
  filename: './index.html',
});

const progressWebpack = new webpack.ProgressPlugin();

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  const sourceMap = isProd ? 'nosources-source-map' : 'eval-source-map';

  return ({
    devtool: sourceMap,

    entry: path.join(__dirname, 'example/src/index.js'),

    output: {
      path: path.join(__dirname, 'example/dist'),
      filename: 'bundle.js',
    },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    devServer: {
      port: 3000,
      open: true,
      inline: true,
    },

    plugins: [
      progressWebpack,
      htmlWebpack,
    ],
  });
};
