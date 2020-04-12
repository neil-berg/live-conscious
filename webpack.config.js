/* eslint-disable no-undef */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = (env) => {
  const isDev = env.NODE_ENV === 'development';
  const config = {
    mode: isDev ? 'development' : 'production',
    entry: './src/Entry.tsx',
    output: {
      path: BUILD_DIR,
      publicPath: '/',
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Live Conscious',
        template: './src/index.html',
      }),
    ],
    devtool: isDev ? 'eval-source-map' : 'eval',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };

  return config;
};
