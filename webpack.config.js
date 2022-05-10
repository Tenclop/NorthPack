const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// package.json servers
// "rundev": "nodemon src/views/main.js",
// "rundev2": "nodemon src/views/server.js",
// "devStart": "webpack-dev-server --mode=development --open --config webpack.config.js  --hot --host 0.0.0.0 --port 3000",
module.exports = {
  entry: {
    babel: "babel-polyfill",
    index: "./src/js/index.js",
    shop: "./src/js/shop.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].bundle.js",
    assetModuleFilename: "assets/images/[name].[hash][ext]",
  },
  devServer: {
    static: "./dist",
  },

  module: {
    rules: [
      //babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      //sass
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonJS
          "sass-loader", //1. Turns sass into css
        ],
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(svg|webp|png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[name].[hash].[ext]",
              outputPath: "assets/images/",
            },
          },

          {
            loader: "webp-loader",
            options: {
              quality: 35,
            },
          },
        ],
        type: "javascript/auto",
      },

      {
        test: /\.ejs$/i,
        use: ["html-loader", "template-ejs-loader"],
      },

      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   use: [
      //     "file-loader",
      //     {
      //       loader: "image-webpack-loader",
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //         },
      //         // optipng.enabled: false will disable optipng
      //         optipng: {
      //           enabled: false,
      //         },
      //         pngquant: {
      //           quality: [0.65, 0.9],
      //           speed: 4,
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         },
      //         // the webp option will enable WEBP
      //         webp: {
      //           quality: 75,
      //         },
      //       },
      //     },
      //   ],
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),

    new HtmlWebpackPlugin({
      filename: "shop.html",
      template: "./src/shop.html",
    }),

    new HtmlWebpackPlugin({
      filename: "/Home.ejs",
      template: "./src/views/Home.ejs",
    }),
    new CleanWebpackPlugin(),
  ],
};
