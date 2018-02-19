var path = require('path');
module.exports = {
    entry: ['src/index.js'],
    output:{
      path:'build',
      filename:'bundle.js',
    },
    module: {
      rules: [
        {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
        {test: /\.js$/,exclude: /node_modules/,loader: "babel-loader"},
      ]
    }
  }