import React, { useState } from 'react';
import axios from 'axios';
import { signInWithGoogle, signInWithFacebook, signInWithTwitter } from './authService'; // Custom auth functions
import Footer from './components/Footer'; // Import Footer
import './Access.css'; // Import CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      window.location = '/';  // Redirect to home or dashboard
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="access-page">
      <div className="content">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="log-form">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="submit-button">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>

        <h2>Or Login With:</h2>
        <button onClick={signInWithGoogle} className="social-button">Sign in with Google</button>
        <button onClick={signInWithFacebook} className="social-button">Sign in with Facebook</button>
        <button onClick={signInWithTwitter} className="social-button">Sign in with Twitter</button>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
