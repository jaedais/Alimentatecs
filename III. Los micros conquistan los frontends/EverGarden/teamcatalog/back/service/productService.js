const products = require('./products.json');

module.exports = {
  list: function getList() {
    return products.sort(function () {
        return Math.random();
      })
      .slice(0, products.length);
  },
  getProduct: function (product_id) {
    return products.find((p) => p.id === parseInt(product_id));
  }
}