// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Contact from './components/contact';
import Inscription from './components/inscription';
import EmailVerification from './components/EmailVerification';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import LegacyLayout from './components/LegacyLayout';
import './style/App.css';

function App() {
  return (
    <div className="app-root">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Legacy Pages wrapped in LegacyLayout */}
        <Route path="/contact" element={<LegacyLayout><Contact /></LegacyLayout>} />
        <Route path="/services" element={<LegacyLayout><div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}><h1>Services</h1></div></LegacyLayout>} />
        <Route path="/inscription" element={<LegacyLayout><Inscription /></LegacyLayout>} />
        <Route path="/login" element={<LegacyLayout><Login /></LegacyLayout>} />
        <Route path="/email-verification" element={<LegacyLayout><EmailVerification /></LegacyLayout>} />
      </Routes>
    </div>
  );
}

export default App;