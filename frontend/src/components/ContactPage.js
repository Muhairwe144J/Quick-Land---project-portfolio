import React from 'react';
import Footer from './Footer'; // Import Footer

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions or inquiries, feel free to reach out to us:</p>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <Footer /> {/* Add Footer here */}
        </div>
    );
};

export default ContactPage;
