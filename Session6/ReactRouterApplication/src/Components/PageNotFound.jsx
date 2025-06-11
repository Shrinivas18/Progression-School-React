import React from "react";
import "../Style/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Oops! Page not found.</h2>
      <p className="error-description">
        The page you are looking for might have been removed or temporarily unavailable.
      </p>
      <a href="/" className="home-button">
        Go Back Home
      </a>
    </div>
  );
};

export default PageNotFound;
