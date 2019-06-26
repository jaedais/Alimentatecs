/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
(function btnBuy() {
  class BtnBuy extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }

    connectedCallback() {
      const product_id = this.getAttribute("product_id");
      this.render(product_id);
      this.addListener(product_id);
    }

    addToCart(product_id) {
      window.dispatchEvent(
        new CustomEvent("basket:add", {
          detail: {
            product_id: product_id
          }
        })
      );
      console.log("dispatchEvent:basket:add");
    }

    addListener(product_id) {
      // const $btns = document.getElementById(`p${product_id}`);
      const $btns = this.shadowRoot.getElementById(`p${product_id}`);
      $btns.addEventListener("click", this.addToCart.bind(this, product_id));
    }

    render(product_id) {
      this.shadowRoot.innerHTML = `
      // <style>
      // @import '../../teamorchestrator/front/css/bootstrap.css';
      // @import '../../teamorchestrator/front/fonts/fontawesome/css/fontawesome-all.css';
      // @import '../../teamorchestrator/front/css/ui.css';
      // @import '../../teamorchestrator/front/css/responsive.css';
      // </style>

      <button id='p${product_id}' href="#" class="btn btn-outline-primary"> <i class="fas fa-shopping-cart"></i> Add to cart </button>
      `;

      // .btn-outline-primary:hover {
      //   color: #fff;
      //   background-color: red;
      //   border-color: red;
      // }

      // this.innerHTML = `
      // <button id='p${product_id}' class="btn btn-outline-primary"> <i class="fas fa-shopping-cart"></i> Add to cart </button>
      // `;
    }

    disconnectedCallback() {}
  }
  window.customElements.define("wc-btn-buy", BtnBuy);
})();
