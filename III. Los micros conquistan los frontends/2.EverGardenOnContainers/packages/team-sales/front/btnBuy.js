    class BtnBuy extends HTMLElement {

      connectedCallback() {
        const product_id = this.getAttribute('product_id');
        this.render(product_id);
        this.addListener(product_id);
      }

      addToCart(product_id) {
        var event = new CustomEvent('basket:add', {
          detail: {
            product_id: product_id
          }
        });
        window.dispatchEvent(event);
        console.log('dispatchEvent:basket:add');
      }

      addListener(product_id) {
        const $btns = document.getElementById(`p${product_id}`);
        $btns.addEventListener('click', this.addToCart.bind(this, product_id));
      }

      render(product_id) {
        this.innerHTML = `
      <a id='p${product_id}' href="#" class="btn btn-outline-primary"> <i class="fas fa-shopping-cart"></i> Add to cart </a>
      `;
      }

      disconnectedCallback() {
        // const product_id = this.getAttribute('product_id');
        // const $btns = document.getElementById(`p${product_id}`);
        // $btns.removeEventListener('click', this.addToCart.bind(this, product_id));
      }

    }
    window.customElements.define('wc-btn-buy', BtnBuy);