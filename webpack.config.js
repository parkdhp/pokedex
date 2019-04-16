const path = require('path');

var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    app: ['@babel/polyfill', `${SRC_DIR}/index.jsx`]
  },
  plugins: [],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  }, 
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { 
          presets: ['@babel/env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test   : /\.(png|jpg|gif|svg)/,
        loader : 'file-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};