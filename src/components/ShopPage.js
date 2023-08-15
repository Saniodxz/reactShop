import React, { useState, useEffect } from 'react';
import ProductCard from './ProductPage';

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API (FakeStore or similar)
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopPage;
