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
                plugins: [require('babel-plugin-transform-react-jsx')]
            }
        }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
};
