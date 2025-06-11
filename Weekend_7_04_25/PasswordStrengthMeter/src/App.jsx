import React, { useState } from "react";
import "./App.css";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [criteria, setCriteria] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const evaluatePassword = (value) => {
    const length = value.length >= 8;
    const uppercase = /[A-Z]/.test(value);
    const number = /\d/.test(value);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const newCriteria = { length, uppercase, number, specialChar };
    const strengthLevel = Object.values(newCriteria).filter(Boolean).length;

    setCriteria(newCriteria);
    setStrength(strengthLevel);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    evaluatePassword(value);
  };

  const getStrengthClass = () => {
    if (strength === 0) return "strength-meter weak";
    if (strength <= 2) return "strength-meter medium";
    return "strength-meter strong";
  };

  return (
    <div className="password-container">
      <h2>Create a Password</h2>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
        className="password-input"
      />
      <div className={getStrengthClass()}></div>

      <div className="tips">
        {!criteria.length && (
          <p className="tip">Password must be at least 8 characters long.</p>
        )}
        {!criteria.uppercase && (
          <p className="tip">Include at least one uppercase letter.</p>
        )}
        {!criteria.number && (
          <p className="tip">Include at least one number.</p>
        )}
        {!criteria.specialChar && (
          <p className="tip">
            Include at least one special character (!@#$...)
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordStrength;
