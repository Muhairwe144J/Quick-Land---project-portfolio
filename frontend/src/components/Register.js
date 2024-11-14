import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer'; // Import Footer
import './Access.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // State to handle success feedback
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, { name, email, password });
      setSuccess('Registration successful! Redirecting to login...');
      setError(''); // Clear any error message
      setTimeout(() => {
        navigate('/login'); // Redirect to login after 2 seconds
      }, 2000);
    } catch (err) {
      setError('User already exists');
      setSuccess(''); // Clear any success message
    }
  };

  return (
    <div className="access-page">
      <div className="content"></div>
      <h1>Register</h1>
      {success && <p className="success-message">{success}</p>} {/* Display success message */}
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
      <form onSubmit={handleSubmit} className="log-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="submit-button">Sign up</button>
      </form>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Register;
