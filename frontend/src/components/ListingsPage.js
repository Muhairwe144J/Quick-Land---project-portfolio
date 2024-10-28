import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer'; // Import Footer
import { Link } from 'react-router-dom';

const ListingsPage = () => {
    const [lands, setLands] = useState([]);

    useEffect(() => {
        // Fetch all lands from the backend
        axios.get('/api/lands') // Adjust the endpoint if necessary
            .then(response => {
                setLands(response.data);
            })
            .catch(error => {
                console.error('Error fetching lands:', error);
            });
    }, []);

    return (
        <div>
            <h1>Land Listings</h1>
            <p>Here you can find various land listings available for sale.</p>
            {/* Add more details about listings here, like a list of lands */}
            <ul>
            {lands.map(land => (
                    <li key={land._id}>
                        <h2>{land.title}</h2>
                        <p>{land.description}</p>
                        <p>Price: {land.price}</p>
                        <Link to={`/land/${land._id}`}>View Details</Link>
                    </li>
                ))}
            </ul>
            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default ListingsPage;
