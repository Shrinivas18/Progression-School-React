import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/UserDetails.css";
import ClipLoader from "react-spinners/ClipLoader";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchUser = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(res.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading)
    return (
      <div className="loader">
        <ClipLoader size={150} />
      </div>
    );
  if (error) return <h1 className="error">Something went wrong: {error}</h1>;

  return (
    <div>
      <button className="back2user" onClick={() => navigate("/users")}>
        <i className="fa-solid fa-arrow-left"></i> &nbsp;Back to Users
      </button>
      <div className="user-card">
        <div className="user-header">
          <div className="icon-wrapper">
            <i className="fa-solid fa-user fa-2x"></i>
          </div>
          <div>
            <h2>{user.name}</h2>
            <p>@{user.username}</p>
          </div>
        </div>

        <div className="user-body">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-line">
              <i className="fa-regular fa-envelope"></i>
              <span>{user.email}</span>
            </div>
            <div className="info-line">
              <i className="fa-solid fa-phone"></i>
              <span>{user.phone}</span>
            </div>
            <div className="info-line">
              <i className="fa-solid fa-globe"></i>
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {user.website}
              </a>
            </div>
          </div>

          <div className="address-info">
            <h3>Address</h3>
            <p>
              <i className="fa-solid fa-location-dot"></i> {user.address.street}
              , {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>

        <div className="company-info">
          <h3>Company</h3>
          <div className="company-box">
            <div className="company-logo">
              <i className="fa-solid fa-film"></i>
            </div>
            <div className="company-card">
              <strong>{user.company.name}</strong>
              <p>
                <b>Catchphrase:</b> {user.company.catchPhrase}
              </p>
              <p>
                <b>Business:</b> {user.company.bs}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
