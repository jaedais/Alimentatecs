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

const marketingBusConfig = Object.assign({}, config, {
  name: "marketingBus",
  entry: "./front/marketingBus.js",
  output: {
    path: path.resolve(__dirname, "build", "logic"),
    filename: "./build.js"
  }
});

const suggestionsConfig = Object.assign({}, config, {
  name: "basket",
  entry: "./front/suggestions.js",
  output: {
    path: path.resolve(__dirname, "build", "components"),
    filename: "./suggestions.js"
  }
});

module.exports = [marketingBusConfig, suggestionsConfig];