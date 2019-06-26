var basketList = [];
const productsService = require('../../../teamcatalog/back/service/productService');

module.exports = {

    list: function getList() {
        return basketList;
    },
    add: function (product) {
        if (basketList.filter(p => p.id === parseInt(product.product_id)).length === 0) {
            console.log(productsService.list());
            const p = productsService.list().find((p) => p.id === parseInt(product.product_id));
            basketList.push(p); 
        }
        return basketList;


    },
    delete: function (product_id) {
        if (basketList.length > 0) {
            basketList = basketList.filter(item => {
                return item.id !== parseInt(product_id)
            });
            return basketList;
        }
    }

}
