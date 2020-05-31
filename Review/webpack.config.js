var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
var BrotliPlugin = require('brotli-webpack-plugin');
module.exports = {
  context: __dirname,
  mode: "production",
  entry: {
    main: "./src/index.js"
  },
  
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devServer: {
    port: 8081
},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]//order is important : css-loader passes the css to style-loader and it uses the o/p of cssloader and creates js function that run during page load ie. style-loader applies styles to header
      }, 
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
       } 

    ]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',  // name of the file that is going to get created and placed in dist folder
    template: 'template.html'
  }) /*,
  new BrotliPlugin({
    asset: '[path].br[query]',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
}),
new CompressionPlugin({
  filename: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0.8,
}),*/
]
};

