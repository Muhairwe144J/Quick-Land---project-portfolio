import React from 'react'; 
import Footer from './Footer'; // Import Footer
import './ContactPage.css'; // Import CSS for styling

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-content">
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, feel free to reach out to us:</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Message:</label>
                        <textarea name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default ContactPage;