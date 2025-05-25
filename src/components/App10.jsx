import React, { useState } from "react";

export default function App10() {
  const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 45 },
  ];

  const [cart, setCart] = useState({});

  // Add to cart
  const addToCart = (id) => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
  };

  // Increase quantity
  const increase = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };

  // Decrease quantity
  const decrease = (id) => {
    if (cart[id] === 1) {
      const newCart = { ...cart };
      delete newCart[id];
      setCart(newCart);
    } else {
      setCart({ ...cart, [id]: cart[id] - 1 });
    }
  };

  return (
    <div>
      <h1>App10 Assignment</h1>

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
        <ul>
          {Object.entries(cart).map(([id, qty]) => {
            const product = products.find((p) => p.id == id);
            return (
              <li key={id}>
                {product.name} - ${product.price} -{" "}
                <button onClick={() => decrease(product.id)}>-</button> {qty}{" "}
                <button onClick={() => increase(product.id)}>+</button> = $
                {product.price * qty}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
