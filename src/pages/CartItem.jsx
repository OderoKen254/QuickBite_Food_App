import React from "react";

export default function CartItem({ item, onIncrease, onDecrease, onDelete }) {
  return (
    <div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h4>Ksh {item.price}</h4>
      </div>
      <div>
        <button onClick={onDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
