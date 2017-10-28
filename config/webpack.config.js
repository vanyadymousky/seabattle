const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './client/app',
    vendor: ['react', 'react-dom', 'rxjs'],
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js(x)?$/,
        exclude: /(node_modules)/,
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ],
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity,
    }),
  ]
}
