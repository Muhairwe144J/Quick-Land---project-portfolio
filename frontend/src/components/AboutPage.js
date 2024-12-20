import React from 'react';
import Footer from './Footer'; // Import Footer
import './AboutPage.css'; // Import CSS for styling

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="contents-overlay">
                <h1>About Us</h1>
                <p>Welcome to Quick Land, your reliable platform for buying and selling land in Uganda.</p>
                <p>Our mission is to connect land sellers with buyers in a seamless and efficient manner.</p>
                <p>Learn more about our services and how we can assist you!</p>
            </div>
            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default AboutPage;