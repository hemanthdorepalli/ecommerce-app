import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">₹{(product.price * 83).toFixed(2)}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
