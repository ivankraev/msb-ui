// shared config (dev and prod)
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DotenvPlugin = require('webpack-dotenv-plugin')
require('dotenv').config({ path: '../../.env' })

module.exports = {
  entry: './index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:3]',
              },
              importLoaders: 1,
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico|eot|ttf|woff2?)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Hot Module Replacement',
    }),
    new DotenvPlugin({
      path: '.env',
      sample: '.env.example',
      allowEmptyValues: true,
    }),
  ],
}
