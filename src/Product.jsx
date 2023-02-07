import React from "react";

const Product = ({ id, name, cost, inCart, add }) => {
  return (
    <div>
      name: <span>{name} </span>
      cost: <span> {cost}</span>
      {/* id: <span> {id} </span> */}
      inCart: <span> {!inCart ? "not in cart" : "IN CART"}</span>
      <button onClick={() => add(id)}>to cart</button>
    </div>
  );
};

export default Product;
