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

const elementConfig = ({
  name,
  entry,
  output: {
    path,
    filename
  }
}) => Object.assign({}, config, {
  name,
  entry,
  output: {
    path,
    filename
  }
});

const catalogBusConfig = elementConfig({
  name: "catalogBus",
  entry: "./front/catalogBus.js",
  output: {
    path: path.resolve(__dirname, "build", "logic"),
    filename: "./build.js"
  }
});

const inputSearchConfig = elementConfig({
  name: "inputSearch",
  entry: "./front/inputSearch.js",
  output: {
    path: path.resolve(__dirname, "build", "components"),
    filename: "./inputSearch.js"
  }
});

const productConfig = elementConfig({
  name: "product",
  entry: "./front/product.js",
  output: {
    path: path.resolve(__dirname, "build", "components"),
    filename: "./product.js"
  }
});

const productsConfig = elementConfig({
  name: "products",
  entry: "./front/products.js",
  output: {
    path: path.resolve(__dirname, "build", "components"),
    filename: "./products.js"
  }
});

module.exports = [catalogBusConfig, inputSearchConfig, productConfig, productsConfig];