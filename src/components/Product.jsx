import React from 'react';

const Product = ({ product, onAddToCart }) => {
  const styles = {
    product: {
      width: '200px',
      textAlign: 'center',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      marginBottom: '20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    productImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
    },
    productName: {
      fontSize: '1.2em',
      margin: '10px 0',
    },
    productPrice: {
      fontSize: '1.1em',
      color: '#888',
    },
    addButton: {
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '1rem',
    }
  };

  return (
    <div style={styles.product}>
      <img src={product.image} alt={product.name} style={styles.productImage} />
      <h3 style={styles.productName}>{product.name}</h3>
      <p style={styles.productPrice}>${product.price}</p>
      <button onClick={() => onAddToCart(product)} style={styles.addButton}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
