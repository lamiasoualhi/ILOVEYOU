const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
resolve: {
  alias: {
    mojs: path.resolve(__dirname, 'node_modules/mo-js')
  }
}
};