import React, { useEffect, useState } from "react";

const ProductEventsManager = handler => ({
  subscribe: productId => {
    const event = new CustomEvent("product:get", {
      detail: {
        product_id: productId
      }
    });
    window.dispatchEvent(event);
    console.log("dispatchEvent:product:get");

    window.addEventListener("product:change", handler);
    window.addEventListener("suggestions:select", handler);
  },
  unsubscribe: () => {
    window.removeEventListener("product:change", handler);
    window.removeEventListener("suggestions:select", handler);
  }
});

function Product(props) {
  console.log(props);
  const [p, setProduct] = useState([]);

  function handleProductsChange(ev) {
    setProduct(ev.detail.product);
  }

  useEffect(() => {
    const em = ProductEventsManager(handleProductsChange);
    console.log("Product will mount");
    em.subscribe(props.productId);
    return () => {
      console.log("Product will unmount");
      em.unsubscribe();
    };
  }, [props.productId]);

  return !p ? (
    ""
  ) : (
    <main className="card">
      <div className="row no-gutters">
        <aside className="col-sm-6 border-right">
          <article className="gallery-wrap">
            <div className="img-big-wrap">
              <div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">
                  <img alt="item" src={`/common/images/items/${p.id}.jpg`} />
                </a>
              </div>
            </div>{" "}
            {/* <!-- slider-product.// -->*/}
          </article>{" "}
          {/* <!-- gallery-wrap .end// -->*/}
        </aside>
        <aside className="col-sm-6">
          <article className="card-body">
            <h3 className="title mb-3">{p.name}</h3>
            <div className="mb-3">
              <var className="price h3 text-primary">
                <span className="num">{p.priceNew}</span>
              </var>
            </div>{" "}
            {/*<!-- price-detail-wrap .// --> */}
            <dl>
              <dd>
                <p>{p.descextended}</p>
              </dd>
            </dl>
            <div className="rating-wrap">
              <ul className="rating-stars">
                <li style={{ width: p.ratin }} className="stars-active">
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
            <hr />
            <div className="row">
              <div className="col-sm-7">
                <dl className="dlist-inline">
                  <dt>Quantity: </dt>
                  <dd>
                    <select
                      className="form-control form-control-sm"
                      style={{ width: "70px" }}
                    >
                      <option> 1 </option>
                      <option> 2 </option>
                      <option> 3 </option>
                    </select>
                  </dd>
                </dl>
              </div>
              {/*  <!-- col.// --> */}
              <div className="col-sm-5">
                <dl className="dlist-inline">
                  <dt>&nbsp;</dt>
                  <dd>
                    <wc-btn-buy product_id={p.id} />
                  </dd>
                </dl>{" "}
                {/* <!-- item-property .// -->*/}
              </div>{" "}
              {/* <!-- col.// -->*/}
            </div>{" "}
            {/* <!-- row.// -->*/}
          </article>
        </aside>{" "}
        {/* <!-- col.// -->*/}
      </div>{" "}
      {/* <!-- row.// -->*/}
    </main>
  );
}

export default Product;
