import React, { useState } from 'react';
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

function App() {
       // State to control footer visibility
       const [footerVisible] = useState(true); // Temporarily set to true
      
    return (
        <Router>
            <div>
                <h1>Quick-Land Uganda
                {/* // <img src="logo512.png" alt="Logo"/> needs formating size */}
                </h1>

                <TabComponent />
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
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Routes>
                <Footer isVisible={footerVisible} />
            </div>
        </Router>
    );
}

export default App;