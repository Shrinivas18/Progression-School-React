import React from "react";
import "../Style/LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to My Dashboard</h1>
        <p>Your all-in-one tool to manage everything efficiently.</p>
        <button className="landing-btn" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </header>
    </div>
  );
};

export default LandingPage;
