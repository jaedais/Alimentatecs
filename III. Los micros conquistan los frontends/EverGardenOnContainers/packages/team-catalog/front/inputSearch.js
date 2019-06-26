/* eslint-disable no-use-before-define, no-console, class-methods-use-this */
(function inputSearch() {

  class InputSearch extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render()
    }

    render() {
      this.innerHTML = `
        <form action="#" class="search-wrap">
        <div class="input-group w-100">
          <input type="text" class="form-control" style="width:55%;" placeholder="Search">
          <div class="input-group-append">
            <button class="btn btn-primary" type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      `;

    }
    disconnectedCallback() {
    }

  }
  window.customElements.define('wc-input-search', InputSearch);


}());
