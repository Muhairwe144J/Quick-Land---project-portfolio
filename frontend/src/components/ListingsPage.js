import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer'; // Import Footer
import { Link } from 'react-router-dom';
import './ListingsPage.css'; // Import CSS for styling

const ListingsPage = () => {
    const [lands, setLands] = useState([]);

    useEffect(() => {
        // Fetch all lands from the backend
        axios.get('http://localhost:5000/api/lands') // backend port having data
            .then(response => {
                setLands(response.data);
            })
            .catch(error => {
                console.error('Error fetching lands:', error);
            });
    }, []);

    return (
        <div className="listings-page">
            {/* Content Overlay */}
            <div className="content-overlay">
                <h1>Land Listings</h1>
                <p>Here you can find various land listings available for sale.</p>
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
            </div>

            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default ListingsPage;
