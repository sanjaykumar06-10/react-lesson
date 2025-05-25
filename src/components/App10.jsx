import React, { useState } from "react";

export default function App10() {
  const products = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 25 },
  ];

  const [cart, setCart] = useState({});

  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    setCart({ ...cart });
  }

  function increase(id) {
    cart[id]++;
    setCart({ ...cart });
  }

  function decrease(id) {
    if (cart[id] === 1) {
      delete cart[id];
    } else {
      cart[id]--;
    }
    setCart({ ...cart });
  }

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ${p.price}{" "}
          <button onClick={() => addToCart(p.id)}>Add</button>
        </div>
      ))}

      <hr />

      <h2>My Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        Object.keys(cart).map((id) => {
          const product = products.find((p) => p.id == id);
          return (
            <p key={id}>
              {product.name} - ${product.price} -{" "}
              <button onClick={() => decrease(product.id)}>-</button>{" "}
              {cart[id]}{" "}
              <button onClick={() => increase(product.id)}>+</button> = $
              {product.price * cart[id]}
            </p>
          );
        })
      )}
    </div>
  );
}
