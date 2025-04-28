import React from 'react';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const styles = {
    cart: {
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '400px',
      margin: '20px auto',
      boxSizing: 'border-box',
    },
    cartTitle: {
      fontSize: '1.5em',
      marginBottom: '10px',
      textAlign: 'center',
    },
    cartEmpty: {
      fontSize: '1.2em',
      color: '#888',
      textAlign: 'center',
    },
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      padding: '10px',
      borderBottom: '1px solid #eee',
      gap: "50px"
    },
    cartItemDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap:"10px"
    
    },
    quantityInput: {
      width: '50px',
      padding: '5px',
      marginTop: '5px',
    },
    removeButton: {
      backgroundColor: '#ff4d4d',
      border: 'none',
      color: 'white',
      padding: '5px 10px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    productImage: {
    position: "relative",
    left: "40px",
      width: '150px',
      height: '200px',
      objectFit: 'cover',
      marginRight: '10px',
    },
    cartItemContainer: {
      display: 'flex',
      alignItems: 'center',
      gap:"5px"
    }
  };

  return (
    <div style={styles.cart}>
      <h2 style={styles.cartTitle}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p style={styles.cartEmpty}>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={styles.cartItem}>
              <div style={styles.cartItemContainer}>
                <div style={styles.cartItemDetails}>
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
                    min="1"
                    style={styles.quantityInput}
                  />
                  <button 
                    onClick={() => onRemoveItem(item.id)} 
                    style={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
                <img src={item.image} alt={item.name} style={styles.productImage} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
