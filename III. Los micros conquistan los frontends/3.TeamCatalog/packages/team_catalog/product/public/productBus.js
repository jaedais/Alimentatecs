function getProduct(product_id) {
    return fetch(`/api/product/${product_id}`)
        .then(response => response.json())
        .then(p => {
            return p
        })
        .catch(function (err) {
            console.error(err);
        });
}

function getProducts() {
    return fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            return products
        })
        .catch(function (err) {
            console.error(err);
        });
}

function addlistener() {


    window.addEventListener('product:get', (ev) => {
        console.log('addEventListener:product:get');
        getProduct(ev.detail.product_id).then((product) => {

            window.dispatchEvent(new CustomEvent('product:change', {
                detail: {
                    product: product
                }
            }));
            console.log('dispatchEvent:product:change');

        });
    });


    window.addEventListener('products:get', (ev) => {
        console.log('addEventListener:products:get');
        getProducts().then((products) => {

            console.log('dispatchEvent:product:change');
            window.dispatchEvent(new CustomEvent('products:change', {
                detail: {
                    products: products
                }
            }));

        });
    });


}

addlistener();