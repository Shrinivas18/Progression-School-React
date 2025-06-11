import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlinks">
        <li>
          <NavLink to="./">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
