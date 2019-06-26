/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
(function btnBuy() {

  class BtnRemove extends HTMLElement {

    connectedCallback() {
      const product_id = this.getAttribute('product_id');
      this.render(product_id);
      this.addListener(product_id);
    }

    removeToCart(product_id) {
      var event = new CustomEvent('basket:remove', { 
        detail: {
          product_id: product_id
        }
      });
      window.dispatchEvent(event);
      console.log('dispatchEvent:basket:remove');
    }

    addListener(product_id) {
        const $btn = document.getElementsByName(`btn-remove-${product_id}`);
        if($btn[0]){
          $btn[0].addEventListener('click', this.removeToCart.bind(this, product_id));
        }
    
    }

    render(product_id) {
      this.innerHTML = `
      <a href="#" name='btn-remove-${product_id}' class="btn btn-outline-danger"> × Remove</a>
      `;
    }
    
    disconnectedCallback() {

    }

  }
  window.customElements.define('wc-btn-remove', BtnRemove);


}());
