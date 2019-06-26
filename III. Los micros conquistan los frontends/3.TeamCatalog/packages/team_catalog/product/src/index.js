import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product";

const template = document.createElement("template");
template.innerHTML = `
<style>
@import '/common/css/bootstrap.css';
 @import '/common/fonts/fontawesome/css/fontawesome-all.css';
 @import '/common/css/ui.css';
 @import '/common/css/responsive.css';
</style>
<span></span>`;

class XProduct extends HTMLElement {
  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this.root = this.attachShadow({
      mode: "open"
    }).appendChild(template.content.cloneNode(true));
    this.mountPoint = this.shadowRoot.querySelector("span");
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  unmount() {
    console.log(ReactDOM.unmountComponentAtNode(this.mountPoint));
  }

  mount() {
    ReactDOM.render(<Product productId={this.productId} />, this.mountPoint);
  }

  static get observedAttributes() {
    return ["product_id"];
  }

  get productId() {
    return this.getAttribute("product_id");
  }
}
customElements.define("wc-product", XProduct);
