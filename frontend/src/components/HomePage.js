import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; /* Import Link for navigation */
import './HomePage.css';
import axios from 'axios';

const HomePage = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    axios.get('/api/lands')
      .then(response => setLands(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="homepage">
        <h1 className="title"> 
	<span className="quick">Quick</span>
        <span className="land">-Land</span>
        <span className="uganda"> Uganda</span>
      </h1>
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
      <ul>
        {lands.map(land => (
          <li key={land._id}>
            <h2>{land.title}</h2>
            <p>{land.description}</p>
            <p>Price: {land.price}</p>
            <Link to={`/land/${land._id}`} className="view-details-link">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
