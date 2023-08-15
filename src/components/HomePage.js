import React from 'react';
import './HomePage.css'; // Import the stylesheet for HomePage

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner">
        <img src="amazon_banner.jpg" alt="Amazon Banner" />
      </div>
      <div className="product-grid">
        {/* Sample product cards */}
        <div className="product-card">
          <img src="product1.jpg" alt="Product 1" />
          <p>Product Name</p>
          <p>$99.99</p>
        </div>
        <div className="product-card">
          <img src="product2.jpg" alt="Product 2" />
          <p>Product Name</p>
          <p>$149.99</p>
        </div>
        {/* Add more product cards */}
      </div>
    </div>
  );
};

export default HomePage;
