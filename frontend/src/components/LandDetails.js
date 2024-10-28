// src/components/LandDetails.js
import React from 'react';
import Footer from './Footer'; // Import Footer
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LandDetails = () => {
  const { id } = useParams();
  const [land, setLand] = React.useState(null);

  React.useEffect(() => {
    axios.get(`/api/lands/${id}`)
      .then(response => setLand(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const handlePayment = () => {
    // Example payment data
    const paymentData = {
      landId: land._id,
      amount: land.price, // Assuming price is a number
    };

    axios.post('/api/payment/process', paymentData)
      .then(response => {
        alert('Payment Successful!');
        // Redirect or update UI as necessary
      })
      .catch(error => {
        console.error(error);
        alert('Payment Failed');
      });
  };

  if (!land) return <div>Loading...</div>;

  return (
    <div>
      <h2>{land.title}</h2>
      <p>{land.description}</p>
      <p>Price: {land.price}</p>
      <button onClick={handlePayment}>Buy Now</button>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default LandDetails;
