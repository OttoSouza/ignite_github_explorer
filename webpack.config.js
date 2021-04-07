//-webpack é um empacotador de módulo JavaScript de código aberto. Ele é feito principalmente para JavaScript, mas pode transformar ativos de front-end, como HTML, CSS e imagens,
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const isDevelopment = process.env.NODE_ENV !==  "production" 

module.exports = {
  // modo de desenvolvimento
  mode: isDevelopment ? "development" : "production",
  // nao ver o codigo que nao ser legivel
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  // o arquivo principal seria index.jsx
  entry: path.resolve(__dirname, "src", "index.tsx"),

  // de saidno seria a pasta dist quando o webpack converter de jsx para js
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  // reconhece javascript e jsx
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
    // recopila o codigo
    devServer: {
      contentBase: path.resolve(__dirname, "public"),
      hot: true
    },

  // Injeta automaticamente o script convertido do react dentro do html
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),



  // as regras para reconhecimento do react e execucao mais rapida do babel, sem ler o node_modules
  module: {
    // essa regra esta dizendo que para todo arquivo jsx , leia com o babel-loader
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
            options: {
              // ... other options
              plugins: [
                // ... other plugins
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ],
  },
};
