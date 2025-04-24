import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setCartItems(updatedData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-items">{/* cart items go here */}</div>
      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total :0</h3>
        </div>
        <Link to="/checkout">
          <button className="checkout-button">Checkout</button>
        </Link>
      </div>
    </div>
  );
}
