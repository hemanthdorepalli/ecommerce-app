import React, { useState } from 'react';

const Checkout = ({ onGoBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentDetails: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Confirmed!\n\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="address" placeholder="Address" onChange={handleChange} required />
      <input name="paymentDetails" placeholder="Payment Details" onChange={handleChange} required />
      <button type="submit" className="load-more">Confirm Order</button>
      <button type="button" style={{ backgroundColor: '#ff4d4d', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}  onClick={onGoBack}>Go Back</button>
    </form>
  );
};

export default Checkout;
