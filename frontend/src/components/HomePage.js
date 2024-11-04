import React from 'react';
import { Link } from 'react-router-dom'; /* Import Link for navigation */
import './HomePage.css';
import Footer from './Footer'; // Import Footer

const HomePage = () => {
  return (
    <div className="homepage">
        <h1 className="title"> 
	<span className="quick">Quick</span>
        <span className="land">-Land</span>
        <span className="uganda"> Uganda</span>
      </h1>
      <img src="https://img.youtube.com/vi/G1hKzCkywM8/maxresdefault.jpg" alt=""/>
        <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <Link to="/Home">Home</Link>
            <Link to="/land">Listings</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      
      <p>Find your dream property here!</p>
      <div className="auth-links">
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Sign Up</Link>
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default HomePage;
