import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TabComponent from './components/TabComponent';
import HomePage from './components/HomePage';
import Login from './Login';
import Register from './components/Register';
import Payment from './components/Payment';
import PaymentStatus from './components/PaymentStatus';
import LandDetails from './components/LandDetails';
import AdminDashboard from './components/AdminDashboard';
import ListingsPage from './components/ListingsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './components/Footer.css';          // Footer styling
import './styles.css'; // Ensure your styles are imported
import posthog from 'posthog-js'; // Ensure PostHog is imported

function App() {
    const [user, setUser] = useState(null); // State to hold the logged-in user
       // State to control footer visibility
       const [footerVisible] = useState(true); // Temporarily set to true
       // Check if there's a logged-in user in localStorage
    useEffect(() => {
        const userData = localStorage.getItem('user');

        if (userData) {
            try {
                const storedUser = JSON.parse(userData);
        if (storedUser) {
            setUser(storedUser);
        }
        } catch (error) {
            console.error('Error parsing user data:', error);
        }
     }
    
        // Only runs once when the component mounts
      
          if (user) {
            posthog.identify(user.id); // Identify the user in PostHog
          }
        }, [user]); // This ensures posthog.identify() runs when `user` changes
      
    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };
      
    return (
        <Router>
            <div>
            <header style={{ position: 'relative' }}>
                <h1>Quick-Land Uganda
                {/* // <img src="logo512.png" alt="Logo"/> needs formating size */}
                </h1>

                 {/* Profile in the top-right corner */}
                 {user && (
                        <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', alignItems: 'center' }}>
                            <div style={{ borderRadius: '50%', width: '40px', height: '40px', overflow: 'hidden' }}>
                                <img
                                    src={user.profilePhoto || 'defaultProfilePic.jpg'} // Use a default if no photo
                                    alt="Profile"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <span style={{ marginLeft: '10px' }}>{user.name}</span>
                            <button onClick={handleLogout} style={{ marginLeft: '10px' }}>
                                Logout
                            </button>
                        </div>
                    )}

                    <TabComponent />
                </header>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
	                <Route path="/home" element={<HomePage />} />
                    <Route path="/listings" element={<ListingsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/land/:id" element={<LandDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/payment-status" element={<PaymentStatus />} />
                    {/* Protected Admin Route */}
                    <Route path="/admin/dashboard" element={
                        user?.role === 'admin' ? <AdminDashboard /> : <div>You don't have permission to access this page.</div>
                    } />
                </Routes>
                <Footer isVisible={footerVisible} />
            </div>
        </Router>
    );
}

export default App;