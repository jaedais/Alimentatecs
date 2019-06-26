/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
(function products() {

  class Products extends HTMLElement {
    connectedCallback() {

      window.dispatchEvent(new Event('products:get'));
      console.log('dispatchEvent:products:get');

      window.addEventListener('products:change', (ev) => {
        this.render(ev.detail.products);
      });

    }

    getTemplate(p) {
      return `
      <div class="col-md-3">
      <figure class="card card-product">
        <div class="img-wrap"><img src="/common/images/items/${p.id}.jpg"></div> 
        <div class="price-wrap h5">  
          <div style= "margin:5px" class="float-left"><wc-btn-buy product_id=${p.id}></wc-btn-buy></div>
          <del style= "margin:10px 5px" class="float-right price-old"> ${p.priceOld} </del>
          <span style= "margin:10px 5px" class="float-right price-new"> ${p.priceNew} </span> 
        </div> 
      <figcaption class="info-wrap">
        <h4 class="title text-truncate"><a href="#/product/${p.id}">${p.name}</a></h4>
        <p class="desc">${p.desc}</p>
        <div class="rating-wrap">
          <ul class="rating-stars">
            <li style="width:${p.rating}" class="stars-active">
              <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
            </li>
            <li>
              <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
            </li>
          </ul>
          <div class="label-rating">${p.reviews} reviews</div>
          <div class="label-rating">${p.orders} orders </div>
        </div> 
      </figcaption>
    </figure>
    </div> 
    `;
    }

    render(products) {

      let elelments = '';
      products.forEach(p => {
        elelments += this.getTemplate(p);
      });
      this.innerHTML = '<div class="row">' + elelments + '</div>';




    }


    disconnectedCallback() {}


  }
  window.customElements.define('wc-products', Products);


}());