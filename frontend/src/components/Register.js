import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer'; // Import Footer
import './Access.css'; // Import CSS for styling

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, { name, email, password });
      localStorage.setItem('token', res.data.token);
      window.location = '/';  // Redirect to home or dashboard
    } catch (err) {
      setError('User already exists');
    }
  };

  return (
    <div className="access-page">
            <div className="content"></div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}/>
      <form className="log-form">
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
        <button type="submit" className="submit-button">Login</button>
        {error && <p>{error}</p>}
      </form>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Register;
