// src/components/auth/SignUpForm.jsx

import React, { useState } from 'react';
// Assuming the CSS is imported or globally available
import '../style/App.css';

// Reusable Input Component for clean JSX
const FormInput = ({ label, name, type = 'text', value, onChange }) => {
  const inputType = name.includes('password') ? 'password' : type;

  return (
    <div className="form-input-container">
      <input
        type={inputType}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        className="form-input"
        required
      />
    </div>
  );
};

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- 1. Basic Validation ---
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // --- 2. Submission Logic Placeholder ---
    console.log("Données à envoyer:", formData);
  };

  return (
    <div className="signup-content-focus">
      <h1 className="signup-title">S'inscrire</h1>

      <form onSubmit={handleSubmit} className="signup-form">
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          label="Nom d'utilisateur"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <FormInput
          label="Mot de pass"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirmer mot de pass"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" className="signup-button">
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;