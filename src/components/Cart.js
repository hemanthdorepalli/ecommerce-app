import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = ({ onCheckout }) => {
  const { cart, removeFromCart, incrementItem, decrementItem, totalItems, totalPrice } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? <p>No items in the cart.</p> : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.title}</p>
                  <p>₹{(item.price * 83).toFixed(2)} x {item.quantity} = ₹{(item.price * item.quantity * 83).toFixed(2)}</p>
                  <div className="cart-item-actions">
                    <button onClick={() => decrementItem(item.id)} disabled={item.quantity === 1}>-</button>
                    <span> <b>{item.quantity} </b></span>
                    <button style={{ backgroundColor: '#4dff6b'}} onClick={() => incrementItem(item.id)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total Items: <b>{totalItems}</b></p>
          <p >Total Price: <b>₹{(totalPrice * 83).toFixed(2)}</b></p>
          <button onClick={onCheckout} className="load-more">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
