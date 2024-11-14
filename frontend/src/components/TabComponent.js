import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TabComponent.css';  // Importing the CSS file

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div>
            <div className="tab-container">
                <Link
                    to="/home"
                    className={activeTab === 'home' ? 'tab tab-active' : 'tab'}
                    onClick={() => setActiveTab('home')}
                >
                    Home
                </Link>
                <Link
                    to="/listings"
                    className={activeTab === 'listings' ? 'tab tab-active' : 'tab'}
                    onClick={() => setActiveTab('listings')}
                >
                    Listings
                </Link>
                <Link
                    to="/about"
                    className={activeTab === 'about' ? 'tab tab-active' : 'tab'}
                    onClick={() => setActiveTab('about')}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className={activeTab === 'contact' ? 'tab tab-active' : 'tab'}
                    onClick={() => setActiveTab('contact')}
                >
                    Contact
                </Link>
            </div>
            <div className="tab-content">
 	        {activeTab === 'home' && <div>Welcome!</div>}
                {activeTab === 'listings' && <div></div>}
                {activeTab === 'about' && <div></div>}
                {activeTab === 'contact' && <div></div>}
            </div>
        </div>
    );
}

export default TabComponent;
