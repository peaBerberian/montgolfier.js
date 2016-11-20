module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'montgolfier.js'
  }
};
