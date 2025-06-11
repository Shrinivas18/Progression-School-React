import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <h1>404. Page not found</h1>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default NotFound;
