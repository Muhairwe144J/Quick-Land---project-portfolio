import React, { useState } from 'react';
import axios from 'axios';
import './Payment.css'; // Add custom styles for the form
import { Link } from 'react-router-dom';

const Payment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading indicator
    try {
      const token = localStorage.getItem('token'); // User authentication token
      const config = { headers: { Authorization: `Bearer ${token}` } };

       await axios.post('/api/payment/pay', { amount, phoneNumber }, config);
      setMessage('Payment request sent successfully. Awaiting confirmation...');
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setMessage('Error sending payment request');
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="form-control"
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="form-group">
          <label>Amount (UGX):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="form-control"
            placeholder="Enter the amount"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
      {message && <p className="payment-message">{message}</p>}
	  {/* Link to Payment Status */}
      <p>
        <Link to="/payment-status">Check Payment Status</Link>
      </p>
    </div>
  );
};

export default Payment;
