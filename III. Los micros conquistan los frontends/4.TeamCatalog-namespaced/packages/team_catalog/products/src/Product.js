import React from "react";

function App(p) {
  return (
    <div className="col-md-3">
      <figure className="card card-product">
        <div className="img-wrap">
          <img alt="item" src={`/common/images/items/${p.id}.jpg`} />
        </div>
        <div className="price-wrap h5">
          <div style={{ margin: "5px" }} className="float-left">
            <wc-btn-buy product_id={p.id} />
          </div>
          <del style={{ margin: "10px 5px" }} className="float-right price-old">
            {p.priceOld}
          </del>
          <span
            style={{ margin: "10px 5px" }}
            className="float-right price-new"
          >
            {p.priceNew}
          </span>
        </div>
        <figcaption className="info-wrap">
          <h4 className="title text-truncate">
            <a href={`#/product/${p.id}`}>${p.name}</a>
          </h4>
          <p className="desc">${p.desc}</p>
          <div className="rating-wrap">
            <ul className="rating-stars">
              <li style={{ width: p.rating }} className="stars-active">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </li>
              <li>
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </li>
            </ul>
            <div className="label-rating">{p.reviews} reviews</div>
            <div className="label-rating">{p.orders} orders </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default App;
