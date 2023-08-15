import React from 'react';

const Navbar = ({ setRoute }) => {
  return (
    <nav>
      <button onClick={() => setRoute('home')}>Home</button>
      <button onClick={() => setRoute('shop')}>Shop</button>
      <button onClick={() => setRoute('cart')}>Cart</button>
    </nav>
  );
};

export default Navbar;
