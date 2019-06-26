

const productService = require('../../../teamcatalog/back/service/productService')

function getSuggestions(product_id){


  return productService.list().filter(p=> p.id !== parseInt(product_id))
  .sort(function() {return .5 - Math.random();})
  .slice(0,5);


}

module.exports.getSuggestions = getSuggestions;