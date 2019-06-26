const path = require("path");
const config = {
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      }
    }]
  }
};

const appConfig = Object.assign({}, config, {
  name: "app",
  entry: "./front/app.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./app.js"
  }
});

module.exports = [appConfig];