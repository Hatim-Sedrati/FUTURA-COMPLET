// src/components/EmailVerification.jsx

import React, { useState } from 'react';
import '../style/App.css'; // Ensure global styles are available

const EmailVerification = () => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Verification code submitted:", verificationCode);
        // Add verification logic here
    };

    return (
        <div className="email-verification-container">
            <h1 className="verification-title">Vérifier e-mail</h1>

            <div className="verification-card glass-card">
                <p className="verification-text">
                    Pour finaliser la création de votre compte, nous devons confirmer que cette e-mail « x » vous appartient.
                </p>
                <p className="verification-subtext">
                    Un lien de vérification vous a été envoyé
                </p>

                <form onSubmit={handleSubmit} className="verification-form">
                    <input
                        type="text"
                        placeholder="Entrez le code de vérification"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className="form-input verification-input"
                        required
                    />
                    <button type="submit" className="signup-button verification-button">
                        Vérifier
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EmailVerification;
