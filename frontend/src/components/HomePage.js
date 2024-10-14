import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    axios.get('/api/lands')
      .then(response => setLands(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Land Listings</h1>
      <ul>
        {lands.map(land => (
          <li key={land._id}>
            <h2>{land.title}</h2>
            <p>{land.description}</p>
            <p>Price: {land.price}</p>
            <a href={`/land/${land._id}`}>View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
