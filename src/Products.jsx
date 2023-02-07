import { nanoid } from "nanoid";
import React, { useState } from "react";
import Product from "./Product";

const Products = () => {
  function id() {
    return nanoid();
  }

  const initProds = [
    { id: id(), name: "product1", cost: 100, inCart: false },
    { id: id(), name: "product2", cost: 200, inCart: false },
    { id: id(), name: "product3", cost: 300, inCart: false },
  ];

  const [prods, setProds] = useState(initProds);

  function addToCart(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.inCart = !prod.inCart;
        }
        return prod;
      })
    );
  }

  const result = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        inCart={prod.inCart}
        add={addToCart}
      />
    );
  });

  return <div>{result}</div>;
};

export default Products;
