import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';

const App = () => {
  const [isCheckout, setIsCheckout] = useState(false);

  return (
    <CartProvider>
      <div className="app-container">
        <h1>Simple E-Commerce Site</h1>
        {!isCheckout ? (
          <>
            <ProductList />
            <Cart onCheckout={() => setIsCheckout(true)} />
          </>
        ) : (
          <Checkout onGoBack={() => setIsCheckout(false)} />
        )}
      </div>
    </CartProvider>
  );
};

export default App;
