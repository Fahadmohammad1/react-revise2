import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <h2>Players</h2>
      {cart.map((p) => (
        <div>
          <h4>Name: {p.name}</h4>
          <p>Age: {p.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
