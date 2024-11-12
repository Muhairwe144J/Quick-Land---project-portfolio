import React from 'react';
import Footer from './Footer'; // Import Footer
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LandDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [land, setLand] = React.useState(null);

  React.useEffect(() => {
    // Fetch land details from the backend
    axios.get(`http://localhost:5000/api/lands/${id}`) //pick from backend port
            .then(response => setLand(response.data))
      .catch(error => console.log(error));
  }, [id]);

   // Function to handle the payment
  const handleBuyClick = () => {
    navigate('/payment'); // Adjust the route path as needed

  };

  if (!land) {
    return <div>Loading...</div>;
  }

  return (
    <div
    style={{
      backgroundColor: 'white', // Set black background
      padding: '50px',
      color: 'black', // Ensure text is visible on black background
      display: 'flex', // Use flexbox to center the content
      flexDirection: 'column', // Stack the content vertically
      alignItems: 'center', // Center content horizontally
      justifyContent: 'center', // Center content vertically
      height: '100vh' // Ensure full viewport height
    }}
    >
      <h2>{land.title}</h2>
      <img 
      src={land.image} 
      alt="land" 
      width="800" 
      height="400" 
      style={{ marginBottom: '20px' }} // Space below the image
    />
      <p>{land.description}</p>
      <p>Price: {land.price}</p>
      <button className="buy-button" onClick={handleBuyClick}>
        Buy
      </button>
      <Link to="/listings"style={{ color: 'red', textDecoration: 'underline' }}>Back to Listings</Link>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default LandDetails;
