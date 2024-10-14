import React, { useState } from 'react';
import axios from 'axios';
import './Payment.css'; // Re-use the same styling

const PaymentStatus = () => {
  const [transactionId, setTransactionId] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading indicator
    try {
      const token = localStorage.getItem('token'); // User authentication token
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const res = await axios.get(`/api/payment/status/${transactionId}`, config);
      setStatus(res.data.status);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setStatus('Error fetching payment status');
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h2>Check Payment Status</h2>
      <form onSubmit={handleCheckStatus} className="payment-form">
        <div className="form-group">
          <label>Transaction ID:</label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            required
            className="form-control"
            placeholder="Enter your transaction ID"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? 'Checking...' : 'Check Status'}
        </button>
      </form>
      {status && <p className="payment-message">{status}</p>}
    </div>
  );
};

export default PaymentStatus;
