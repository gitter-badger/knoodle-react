const webpack = require('webpack');

module.exports = {
  entry: './dist/index.js',
  output: {
    filename: 'dist/bundle.js'
  },
  devtool: 'source-map',
  module: {
      rules: [
        {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
      ]
  },
  plugins: [new webpack.EnvironmentPlugin({
      'API_BASE_URL': 'http://localhost:3333',
      'WS_BASE_URL': 'ws://localhost:3333',
  })],
  resolve: {
    extensions: ['.js']
  }
};
