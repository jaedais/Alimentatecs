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

const salesBusConfig = Object.assign({}, config, {
  name: "salesBus",
  entry: "./front/salesBus.js",
  output: {
    path: path.resolve(__dirname, "build", "logic"),
    filename: "./build.js"
  }
});

const basketConfig = Object.assign({}, config, {
  name: "basket",
  entry: "./front/basket.js",
  output: {
    path: path.resolve(__dirname, "build", "components"),
    filename: "./basket.js"
  }
});

const btnBuyConfig = Object.assign({}, config, {
  name: "basket",
  entry: "./front/btnBuy.js",
  output: {
    path: path.resolve(__dirname, "build", "components"),
    filename: "./btnBuy.js"
  }
});

const btnRemoveConfig = Object.assign({}, config, {
  name: "basket",
  entry: "./front/btnRemove.js",
  output: {
    path: path.resolve(__dirname, "build", "components"),
    filename: "./btnRemove.js"
  }
});

const listcartConfig = Object.assign({}, config, {
  name: "basket",
  entry: "./front/listcart.js",
  output: {
    path: path.resolve(__dirname, "build", "components"),
    filename: "./listcart.js"
  }
});

module.exports = [salesBusConfig, basketConfig, btnBuyConfig, btnRemoveConfig, listcartConfig];