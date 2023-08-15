import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import './App.css';

const App = () => {
  const [route, setRoute] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductPage addToCart={addToCart} />;
      case 'cart':
        return <CartPage cartItems={cartItems} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Navbar setRoute={setRoute} addToCart={addToCart} cartItems={cartItems} />
      {renderPage()}
    </div>
  );
};

export default App;
