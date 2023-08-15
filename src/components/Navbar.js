import React, { useState } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ setRoute, addToCart, cartItems }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="amazon_logo.png" alt="Amazon Logo" />
      </div>
      <div className="nav-search">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      <div className="nav-links">
        <button onClick={() => setRoute('home')}>Home</button>
        <button onClick={() => setRoute('products')}>Products</button>
        <button onClick={() => setRoute('cart')}>
          <FaShoppingCart />
          <span>Cart</span>
          {cartItems && <span className="cart-item-count">{cartItems.length}</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
