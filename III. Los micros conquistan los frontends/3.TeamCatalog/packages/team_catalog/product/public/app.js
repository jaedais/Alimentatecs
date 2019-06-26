/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
/* master js */

const $app = document.getElementById("app");

function renderPageSearch() {
  return `
	  <wc-products></wc-products>
  `;
}

function renderPageProduct(product_id) {
  return `
    <div class=row>
      <aside class="col-xl-8 col-md-8 col-sm-12">
        <wc-product product_id=${product_id}></wc-product>
      </aside>
      <aside class="col-xl-4 col-md-4 col-sm-12">
        <wc-suggestions product_id=${product_id}></wc-suggestions>
      </aside>
    <row>
  `;
}

function renderPageCart() {
  return `
	  <wc-listcart></wc-listcart>
  `;
}

function render(page) {
  if (page.includes("search")) {
    $app.innerHTML = this.renderPageSearch();
  } else if (page.includes("product")) {
    var path = page.split("/");
    var product_id = path[path.length - 1];
    $app.innerHTML = this.renderPageProduct(product_id);
  } else if (page.includes("cart")) {
    $app.innerHTML = this.renderPageCart();
  }
}

function addListeners() {
  window.addEventListener("popstate", event => {
    render(document.location.hash);
  });
}

addListeners();

render("search");
