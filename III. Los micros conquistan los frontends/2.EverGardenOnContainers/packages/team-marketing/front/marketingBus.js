(function marketingBus() {

    function getSuggestions(product_id) {

        const init = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        };
        return fetch(`/team_marketing/api/suggestions/${product_id}`, init)
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