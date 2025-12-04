import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login data:", formData);
        // Add login logic here
    };

    return (
        <div className="signup-content-focus">
            <h1 className="signup-title">Se Connecter</h1>

            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-input-container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de pass"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <button type="submit" className="signup-button">
                    Se Connecter
                </button>

                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                    <Link to="/email-verification" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
                        Mot de pass oublié
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
