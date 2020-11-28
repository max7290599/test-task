
// const path = require("path");
// const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const path = require('path');
// const htmlPlugin = new HtmlWebPackPlugin({
//   template: "./public/index.html", 
//   filename: "./index.html"
// });

// module.exports = {
//     entry: path.join(__dirname, "src", "server", "index.js"),
//     target: 'node', // in order to ignore built-in modules like path, fs, etc.
//     externals: [nodeExternals()],
//     module: {
//         rules: [
//           {
//             test: /\.(js|jsx)$/,
//             exclude: /node_modules/,
//             use: {
//                 loader: "babel-loader",
//                 options: {
//                     presets: ['@babel/preset-env','@babel/react'],
//                     plugins: ['@babel/proposal-class-properties', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-syntax-dynamic-import']
//                 }
//             }
//           }
//         ]
//     },
//     resolve: {
//         extensions: ['*', '.js', '.jsx']
//     },
//     output: {
//         path: path.join(__dirname, "public"),
//         filename: "bundle.js",
//         publicPath: "/"
//     }, 
//     plugins: [
//         new webpack.HotModuleReplacementPlugin()
//     ],
//     devServer: {
//         hot: true,
//         historyApiFallback: true
//     }
// };

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html", 
  filename: "./index.html"
});
module.exports = {
  entry: "./src/index.jsx",
  output: { // NEW
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  }, // NEW Ends
  resolve: {
            extensions: ['*', '.js', '.jsx']
        },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader']
      },
      { 
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};