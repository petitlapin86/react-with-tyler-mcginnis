// webpack.config.js


const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

//Whenever your application is composed of modules, there’s always a single module that is the entry point of your application.
//It’s the module that kicks everything off.
module.exports = {
  entry: './app/index.js', //give webpath the path to the entry file
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' }, //webpack adds each of these things to the bundle
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  }
  output: { //tell webpack where to put the bundle when its done creating it
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  }
},
  plugins: [
    new HtmlWebpackPlugin()
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development' //tell react to build in production mode
}
