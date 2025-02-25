import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/Dashboard';
import VRSimulation from './components/VRSimulation';
import AIFraudDetection from './components/AIFraudDetection';
import SMEPortal from './components/SMEPortal';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vr-simulation" element={<VRSimulation />} />
          <Route path="/ai-fraud-detection" element={<AIFraudDetection />} />
          <Route path="/sme-portal" element={<SMEPortal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
