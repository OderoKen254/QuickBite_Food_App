import React, { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div className="cart-container"></div>;
}
