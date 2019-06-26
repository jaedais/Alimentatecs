/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
(function basket() {

  class Basket extends HTMLElement {

    constructor() {
      super();

      window.dispatchEvent(new Event('basket:list'));
      console.log('dispatchEvent:basket:list');
      this.addListener();

      this.attachShadow({
        mode: 'open'
      })

    }

    connectedCallback() {

    }

    addListener() {

      window.addEventListener('basket:change', (ev) => {
        this.render(ev.detail.list);
        console.log('addEventListener:basket:change');
      });

    }



    render(list) {

      this.shadowRoot.innerHTML = `
        <style>
          @import '../../teamorchestrator/front/css/bootstrap.css';
          @import '../../teamorchestrator/front/fonts/fontawesome/css/fontawesome-all.css';
          @import '../../teamorchestrator/front/css/ui.css';
          @import '../../teamorchestrator/front/css/responsive.css';


        </style>

        <a href="#cart" class="widget-header float-right">
        <div class="icontext">
          <div class="icon-wrap icon-sm round border"><i class="fa fa-shopping-cart"></i>
          </div>
          <span class="badge badge-pill badge-danger notify">${list.length}</span>
          </div>   
        </div>
        </a>
      `;

    }

    disconnectedCallback() {

    }

  }
  window.customElements.define('wc-basket', Basket);

}());
