/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
(function listcart() {

  class ListCart extends HTMLElement {

    constructor() {
      super();
    }

    connectedCallback() {
      window.dispatchEvent(new Event('basket:list'));
      console.log('dispatchEvent:basket:list');
      this.addListener();
    }

    addListener() {

      window.addEventListener('basket:change', (ev) => {
        this.render(ev.detail.list);
      });


    }


    getElement(p) {
      return `
        <tr>
          <td>
              <figure class="media">
                  <div class="img-wrap"><img src="/common/images/items/${p.id}.jpg"
                          class="img-thumbnail img-sm"></div>
                  <figcaption class="media-body">
                      <a href="#/product/${p.id}">${p.name}</a>
                  </figcaption>
              </figure>
          </td>
          <td>
              <select class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
              </select>
          </td>
          <td>
              <div class="price-wrap">
                  <var class="price">${p.priceNew}</var>
              </div>
          </td>
          <td class="text-right">
              <wc-btn-remove product_id=${p.id}></wc-btn-remove>
          </td>
      </tr>
      `;
    }

    render(list) {


      let elementos = '';
      list.forEach(p => elementos += this.getElement(p));

      this.innerHTML = `
        <div id="code_cart">
            <div class="card">
                <table class="table table-hover shopping-cart-wrap">
                    <thead class="text-muted">
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col" width="120">Quantity</th>
                            <th scope="col" width="120">Price</th>
                            <th scope="col" width="200" class="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${elementos}
                    </tbody>
                </table>
            </div> <!-- card.// -->
        </div>
  `;


    }
    disconnectedCallback() {

    }

  }
  window.customElements.define('wc-listcart', ListCart);


}());