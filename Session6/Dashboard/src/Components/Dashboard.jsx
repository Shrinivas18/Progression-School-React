import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
        <h1>Welcome to the Dashboard</h1>
        <p>Manage your activities here!</p>
      </div>

      <div className="dashboard-content">
        <div className="card">
          <h2>Users</h2>
          <p>View and manage user accounts.</p>
        </div>

        <div className="card">
          <h2>Analytics</h2>
          <p>Check reports and user activities.</p>
        </div>

        <div className="card">
          <h2>Settings</h2>
          <p>Adjust your preferences and privacy.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
