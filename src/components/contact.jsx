import React from 'react';
import { Phone, Mail, Linkedin, Twitter } from 'lucide-react';
import '../style/App.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact</h1>

            <div className="contact-content">
                {/* Left Column: Form */}
                <div className="contact-form-section">
                    <h2 className="section-subtitle">Envoi un message</h2>
                    <div className="glass-card form-card">
                        <input type="text" placeholder="Prénom et Nom" className="contact-input" />
                        <input type="email" placeholder="Email" className="contact-input" />
                        <input type="text" placeholder="Sujet" className="contact-input" />
                        <textarea placeholder="Message" className="contact-textarea"></textarea>
                        <button className="send-button">Envoyer</button>
                    </div>
                </div>

                {/* Right Column: Info */}
                <div className="contact-info-section">
                    <div className="glass-card info-card">

                        <div className="info-item">
                            <div className="info-header">
                                <div className="icon-circle">
                                    <Phone size={20} />
                                </div>
                                <h3>Appel</h3>
                            </div>
                            <p>+212 6 66 66 66 66</p>
                        </div>

                        <div className="info-separator"></div>

                        <div className="info-item">
                            <div className="info-header">
                                <div className="icon-circle">
                                    <Mail size={20} />
                                </div>
                                <h3>Email</h3>
                            </div>
                            <p>example@example.com</p>
                        </div>

                        <div className="info-separator"></div>

                        <div className="social-icons">
                            <div className="social-circle"><Linkedin size={20} /></div>
                            <div className="social-circle"><Twitter size={20} /></div>
                        </div>

                        {/* Placeholder boxes from design */}
                        <div className="placeholder-grid">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="placeholder-box"></div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
