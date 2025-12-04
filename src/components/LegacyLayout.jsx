import React from 'react';
import Footer from './footer';
import '../style/App.css';
import xbkaImage from '../assets/XBKA.png';

const LegacyLayout = ({ children }) => {
    return (
        <div className="legacy-container">
            <main className="legacy-content">
                {children}
            </main>
            <img src={xbkaImage} alt="Decorative" className="bottom-right-image" />
            <Footer />
        </div>
    );
};

export default LegacyLayout;
