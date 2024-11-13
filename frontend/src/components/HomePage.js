import React from 'react';
import { Link } from 'react-router-dom'; /* Import Link for navigation */
import './HomePage.css';
import Footer from './Footer'; // Import Footer

const HomePage = () => {
  const user = localStorage.getItem('user');
let parsedUser = null;

if (user) {
  try {
    parsedUser = JSON.parse(user);
  } catch (error) {
    console.error('Error parsing user data:', error);
  }
}

if (parsedUser) {
  return (
    <div className="profile">
      <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
      <span>{user.name}</span>
    </div>
  );
}
  return (
    <div className="homepage">
        <h1 className="title"> 
	<span className="quick">Quick</span>
        <span className="land">-Land</span>
        <span className="uganda"> Uganda</span>
      </h1>      
      <p>Find your dream plot here!</p>
      <div className="auth-links">
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Sign Up</Link>
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default HomePage;