// webpack.config.js

//Whenever your application is composed of modules, there’s always a single module that is the entry point of your application.
//It’s the module that kicks everything off.
module.exports = {
  entry: './app/index.js' //give webpack the path to this entry file
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  }
}
