import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ProductCard } from '@nx-workshop/ui';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSell = (productId) => {
    fetch('http://localhost:3001/api/sell', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId })
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          fetchProducts();
        } else {
          alert(result.message);
        }
      });
  };

  return (
    <div>
      <h1>POS App</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onSell={handleSell} />
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
