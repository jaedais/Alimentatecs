(function marketingBus() {

    function getSuggestions(product_id) {

        const init = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return fetch(`http://localhost:4002/suggestions/${product_id}`, init)
            .then(response => response.json())
            .then(suggestion => {
                return suggestion;
            })
            .catch(function (err) {
                console.error(err);
            });


    }

    function addlistener() {
        window.addEventListener('suggestions:get', (ev) => {
            getSuggestions(ev.detail.product_id).then((suggestions) => {
                window.dispatchEvent(new CustomEvent('suggestions:change', {
                    detail: {
                        suggestions: suggestions
                    }
                }));
            });
        });
    }

    addlistener();

}());