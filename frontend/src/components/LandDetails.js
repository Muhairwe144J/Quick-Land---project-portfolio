import React from 'react';
import Footer from './Footer'; // Import Footer
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const LandDetails = () => {
  const { id } = useParams();
  const [land, setLand] = React.useState(null);

  React.useEffect(() => {
    // Fetch land details from the backend
    axios.get(`http://localhost:5000/api/lands/${id}`) //pick from backend port
            .then(response => setLand(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const handlePayment = () => {
    // Example payment data
    const paymentData = {
      landId: land._id,
      amount: land.price, // Assuming price is a number
    };

    axios.post('http://localhost:5000/api/payment/process', paymentData) //connect to backend port
      .then(response => {
        alert('Payment Successful!');
        // Redirect or update UI as necessary
      })
      .catch(error => {
        console.error(error);
        alert('Payment ongoing, if it takes long try again.');
      });
  };

  if (!land) return <div>Loading...</div>;

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
      <button onClick={handlePayment}>Buy Now</button>
      <Link to="/listings"style={{ color: 'red', textDecoration: 'underline' }}>Back to Listings</Link>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default LandDetails;
