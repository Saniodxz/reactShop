import React from 'react';
import './CartPage.css'; // Import the stylesheet for CartPage

const CartPage = () => {
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {/* Sample cart items */}
        <div className="cart-item">
          <img src="product1.jpg" alt="Product 1" />
          <div>
            <p>Product Name</p>
            <p>$99.99</p>
          </div>
        </div>
        <div className="cart-item">
          <img src="product2.jpg" alt="Product 2" />
          <div>
            <p>Product Name</p>
            <p>$149.99</p>
          </div>
        </div>
        {/* Add more cart items */}
      </div>
    </div>
  );
};

export default CartPage;
