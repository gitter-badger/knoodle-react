const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'dist/bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                plugins: [
                    require('babel-plugin-transform-react-jsx')
                ]
            }
        }
    ]
  },
  plugins: [new webpack.EnvironmentPlugin({
      'API_BASE_URL': 'http://localhost:3333',
      'WS_BASE_URL': 'ws://localhost:3333',
  })],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
};
