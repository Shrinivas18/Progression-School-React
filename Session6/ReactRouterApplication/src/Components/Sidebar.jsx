import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="sidebar-toggle d-md-none" onClick={toggleSidebar}>
        <i className="fa fa-bars"></i>
      </div>

      <div className={`sideBar ${isOpen ? 'open' : ''}`}>
        <h1>React Router App</h1>
        <hr />
        <nav className="navlinks">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-house"></i> Home
          </NavLink>
          <NavLink to="/users" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-user-group"></i> Users
          </NavLink>
          <NavLink to="/quotes" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-quote-right"></i> Quotes
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-message"></i> Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
