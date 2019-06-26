 (function salesBus() {

   function bascketList() {

     const init = {
       method: 'GET',
       mode: 'cors',
       headers: {
         'Content-Type': 'application/json;charset=utf-8'
       }
     };
     return fetch('http://localhost:4003/basket', init)
       .then(response => response.json())
       .then(list => {
         return list
       })
       .catch(function (err) {
         console.error(err);
       });

   }

   function bascketElementAdd(product_id) {

     const init = {
       method: 'POST',
       body: JSON.stringify({
         product_id: product_id
       }),
       mode: 'cors',
       headers: {
         'Content-Type': 'application/json;charset=utf-8'
       }
     };
     return fetch('http://localhost:4003/basket/add', init)
       .then(response => response.json())
       .then(list => {
         return list
       })
       .catch(function (err) {
         console.error(err);
       });

   }

   function bascketElementDelete(product_id) {

     const init = {
       method: 'Delete',
       mode: 'cors',
       headers: {
         'Content-Type': 'application/json;charset=utf-8'
       }
     };
     return fetch(`http://localhost:4003/basket/delete/${product_id}`, init)
       .then(response => response.json())
       .then(list => {
         return list
       })
       .catch(function (err) {
         console.error(err);
       });

   }

   function addlistener() {

     window.addEventListener('basket:add', (ev) => {
       console.log('addEventListener:basket:add', ev.detail.product_id);
       bascketElementAdd(ev.detail.product_id).then((list) => {
         window.dispatchEvent(new CustomEvent('basket:change', {
           detail: {
             list: list
           }
         }));
         console.log('dispatchEvent:basket:change');
       });
     });

     window.addEventListener('basket:remove', (ev) => {
      console.log('addEventListener:basket:change');
       bascketElementDelete(ev.detail.product_id).then((list) => {

         var event = new CustomEvent('basket:change', {
           detail: {
             list: list
           }
         });
         window.dispatchEvent(event);
         console.log('dispatchEvent:basket:change');

       });
     });

     window.addEventListener('basket:list', (ev) => {
      console.log('addEventListener:basket:list');
       bascketList().then((list) => {

         var event = new CustomEvent('basket:change', {
           detail: {
             list: list
           }
         });
         window.dispatchEvent(event);
         console.log('dispatchEvent:basket:change');
       });
     });

   }

   addlistener();

 }());