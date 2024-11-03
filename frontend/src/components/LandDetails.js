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
      <Link to="/listings">Back to Listings</Link>
      <Footer /> {/* Add Footer here */}
    </div>
  );
};

export default LandDetails;
