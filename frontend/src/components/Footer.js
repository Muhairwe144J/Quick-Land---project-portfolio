import React from 'react';
import './Footer.css';

const Footer = ({ isVisible }) => {
    return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
        <p>Contact us at :</p>
        <p>Email: quickland@gmail.com</p>
        <p>Tel: +256726150581</p>
        <p>Copyright Quick-Land Uganda 2022</p>
    </footer>
);
}

export default Footer;