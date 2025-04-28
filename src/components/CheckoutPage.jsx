import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 300, image: '/assets/jacket.png' },
    { id: 2, name: 'Product 2', price: 500, image: '/assets/shoes.png' },
    { id: 3, name: 'Product 3', price: 200, image: '/assets/tshirt.png' },
  ]);

  // Add product to cart
  const addToCart = (product) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === product.id);
    if (index === -1) {
      newCart.push({ ...product, quantity: 1 });
    } else {
      newCart[index].quantity += 1;
    }
    setCart(newCart);
  };

  const updateQuantity = (id, quantity) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCart(newCart);
  };

  // Remove item from cart
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // Calculate total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={styles.checkoutPage}>
      <h1 style={styles.checkoutTitle}>Checkout Page</h1>
      <div style={styles.productList}>
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cart} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />
      <div style={styles.total}>
        <h3>Total: ${calculateTotal()}</h3>
        <button style={styles.checkoutButton}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

const styles = {
  checkoutPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  },
  checkoutTitle: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  productList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '20px',
  },
  total: {
    marginTop: 'auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '1.2rem',
  },
};

export default CheckoutPage;
