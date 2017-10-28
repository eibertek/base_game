var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/public');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/ui/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
    }),
  ],  
 module : {
    loaders : [
      {
        test : /\.css$/,
        include : /node_modules/,
        loader : ['style-loader', 'css-loader'],
      },
      {
        test : /\.scss$/,
        loader : ['style-loader','css-loader', 'sass-loader'],
      },      
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
          test: /\.json$/,
          loader: 'json-loader'
      },
      {
      test : /\.js?/,
      include : APP_DIR,
      loader : 'babel-loader?retainLines=true',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
      },
      {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader?retainLines=true',
          exclude: /node_modules/,
          query: {
              presets: ['es2015', 'react']
          }
      }
    ]
  }  
};

module.exports = config;