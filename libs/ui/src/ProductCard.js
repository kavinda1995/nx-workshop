import React from 'react';

const ProductCard = ({ product, onSell }) => (
  <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', width: '200px' }}>
    <img src={product.image} alt={product.name} style={{ width: '100%' }} />
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    {onSell && (
      <button onClick={() => onSell(product.id)} style={{ marginTop: '0.5rem', padding: '0.5rem', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Sell
      </button>
    )}
  </div>
);

export default ProductCard;