import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import CartPage from './components/CartPage';

const App = () => {
  const [route, setRoute] = useState('home');

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage />;
      case 'cart':
        return <CartPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar setRoute={setRoute} />
      {renderPage()}
    </div>
  );
};

export default App;
