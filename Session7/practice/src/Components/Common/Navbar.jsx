import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex flex-wrap justify-around shadow-md">
      <Link to="/">UserMania</Link>
      <Link to="/users">Users Page</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;
