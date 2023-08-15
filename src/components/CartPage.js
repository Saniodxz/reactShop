import React from 'react';
import './CartPage.css';

const CartPage = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${calculateTotal().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
