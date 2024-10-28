import React, { useState } from 'react';
import axios from 'axios';
import Footer from './Footer'; // Import Footer

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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
      </form>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default Register;
