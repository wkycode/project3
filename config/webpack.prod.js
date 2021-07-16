const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx')
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].[fullhash].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_DOMAIN': JSON.stringify('https://fswdi-wb-project-3-api.herokuapp.com')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/template.html'),
      filename: 'index.html'
    })
  ]
}
