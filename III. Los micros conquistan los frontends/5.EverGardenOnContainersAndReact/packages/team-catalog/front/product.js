/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
(function product() {
  class Product extends HTMLElement {
    connectedCallback() {
      const product_id = this.getAttribute("product_id");

      var event = new CustomEvent("product:get", {
        detail: {
          product_id: product_id
        }
      });
      window.dispatchEvent(event);
      console.log("dispatchEvent:product:get");

      window.addEventListener("product:change", ev => {
        this.render(ev.detail.product);
        console.log("addEventListener:product:change");
      });

      // selecion de un producto de los sugeridos
      window.addEventListener("suggestions:select", ev => {
        this.render(ev.detail.product);
        console.log("addEventListener:suggestions:select");
      });
    }

    render(p) {
      this.innerHTML = `
                <main class="card">
                <div class="row no-gutters">
                    <aside class="col-sm-6 border-right">
                        <article class="gallery-wrap">
                            <div class="img-big-wrap">
                                <div> <a href="#"><img src="/common/images/items/${
                                  p.id
                                }.jpg"></a></div>
                            </div> <!-- slider-product.// -->
                        </article> <!-- gallery-wrap .end// -->
                    </aside>
                    <aside class="col-sm-6">
                        <article class="card-body">
                            <h3 class="title mb-3">${p.name}</h3>

                            <div class="mb-3">
                                <var class="price h3 text-primary">
                                    <span class="num">${p.priceNew}</span>
                                </var>
                            </div> <!-- price-detail-wrap .// -->
                            <dl>
                                <dd><p>${p.descextended}</p></dd>
                            </dl>
                            <div class="rating-wrap">
                                <ul class="rating-stars">
                                    <li style="width:${
                                      p.rating
                                    }" class="stars-active">
                                        <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                    </li>
                                    <li>
                                        <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                                    </li>
                                </ul>
                            <div class="label-rating">${p.reviews} reviews</div>
                            <div class="label-rating">${p.orders} orders </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-sm-7">
                                    <dl class="dlist-inline">
                                    <dt>Quantity: </dt>
                                    <dd> 
                                        <select class="form-control form-control-sm" style="width:70px;">
                                            <option> 1 </option>
                                            <option> 2 </option>
                                            <option> 3 </option>
                                        </select>
                                    </dd>
                                </dl>
                                </div> <!-- col.// -->
                                <div class="col-sm-5">
                                    <dl class="dlist-inline">
                                        <dt>&nbsp;</dt>
                                        <dd>
                                            <wc-btn-buy product_id=${
                                              p.id
                                            }></wc-btn-buy>
                                        </dd>
                                    </dl> <!-- item-property .// -->
                                </div> <!-- col.// -->
                            </div> <!-- row.// -->
                        </article>
                    </aside> <!-- col.// -->
                </div> <!-- row.// -->
            </main> <!-- card.// -->
        `;
    }

    disconnectedCallback() {
      window.removeEventListener("suggestions:select", null);
    }
  }
  window.customElements.define("wc-product", Product);
})();
