import React from "react";
import ReactDOM from "react-dom";
import Products from "./Products";

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
  connectedCallback() {
    // Uncomment to isolate global stylesheet
    this.attachShadow({
      mode: "open"
    }).appendChild(template.content.cloneNode(true));
    const mountPoint = this.shadowRoot.querySelector("span");

    //   // no shadow dom
    //   this.appendChild(template.content.cloneNode(true));
    // const mountPoint = this.querySelector("span");

    ReactDOM.render(<Products />, mountPoint);
  }
}
customElements.define("wc-products", XProduct);
