import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import PaymentStatus from './components/PaymentStatus';
import LandDetails from './components/LandDetails';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/land/:id" component={LandDetails} />
      </Routes>
    </Router>
	 <Routes>
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/payment" component={Payment} />
  <Route path="/payment-status" component={PaymentStatus} />
  <Route path="/admin/dashboard" component={AdminDashboard} />
</Routes>
  );
}

export default App;
