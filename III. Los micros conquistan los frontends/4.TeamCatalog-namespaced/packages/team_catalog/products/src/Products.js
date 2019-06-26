import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductEventsManager = handler => ({
  subscribe: () => {
    window.addEventListener("products:change", handler);
    window.dispatchEvent(new Event("products:get"));
    console.log("dispatchEvent:products:get");
  },
  unsubscribe: () => {
    window.removeEventListener("products:change", handler);
  }
});

function Products() {
  const [products, setProducts] = useState([]);

  function handleProductsChange(ev) {
    setProducts(ev.detail.products);
  }

  useEffect(() => {
    const em = ProductEventsManager(handleProductsChange);
    console.log("Product will mount");
    em.subscribe();
    return () => {
      console.log("Prloduct will unmount");
      em.unsubscribe();
    };
  }, []);

  return (
    <div className="row">
      {products.map(p => (
        <Product key={p.id} {...p} />
      ))}
    </div>
  );
}

export default Products;
