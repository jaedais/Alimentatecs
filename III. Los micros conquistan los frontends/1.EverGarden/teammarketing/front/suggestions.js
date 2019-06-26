/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
(function suggestions() {

  class Suggestions extends HTMLElement {

    connectedCallback() {
      const product_id = this.getAttribute('product_id');

      window.dispatchEvent(new CustomEvent('suggestions:get', {
        detail: {
          product_id: product_id
        }
      }));
      console.log('dispatchEvent:suggestions:get', product_id);

      window.addEventListener('suggestions:change', (ev) => {
        this.render(ev.detail.suggestions);
        console.log('dispatchEvent:suggestions:change', ev.detail.suggestions);
      });


    }

    select(product) {

      // se informa de un producto seleccionado
      window.dispatchEvent(new CustomEvent('suggestions:select', {
        detail: {
          product: product
        }
      }));
      console.log('dispatchEvent:suggestions:select',product);

      window.dispatchEvent(new CustomEvent('suggestions:get', {
        detail: {
          product_id: product.id
        }
      }));
      console.log('dispatchEvent:suggestions:get', product);

    }

    addListener(suggestions) {
      suggestions.forEach(p => {
        const $element = document.getElementById(`suggestion-${p.id}`);
        if ($element) $element.addEventListener('click', this.select.bind(this, p));
      });
    }

    gettemplateproduct(p) {
      return `    
        <figure class="itemside">
            <div class="aside"><img src="teamorchestrator/front/images/items/${p.id}.jpg" class="img-sm"></div>
            <figcaption class="text-wrap align-self-center">
                <h6 class="title"><a id='suggestion-${p.id}' href='#' >${p.name}</a></h6>
                <div class="price-wrap">
                    <span class="price-new">${p.priceNew}$</span>
                    <del class="price-old text-muted">${p.priceOld}$</del>
                </div> 
            </figcaption>
        </figure>
        `
    }


    render(suggestions) {

      let elelments = '';
      suggestions.forEach(p => {
        elelments += this.gettemplateproduct(p);
      });

      this.innerHTML = `
          <div id="code_itemside_img2">
              <div class="box items-bordered-wrap">
             ${elelments}  
              </div> <!-- box.// -->
          </div>
          `;

      this.addListener(suggestions);

    }

    disconnectedCallback() {
      // window.removeEventListener('product:select',this.render());
    }

  }
  window.customElements.define('wc-suggestions', Suggestions);


}());