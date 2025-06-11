import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function RandomPerson() {
  const [fetchedData, setfetchedData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");

  const url = "https://randomuser.me/api/";

  const getData = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(url);
      setfetchedData(res.data.results[0]);
      setisLoading(false);
    } catch (e) {
      seterror(e);
      setisLoading(false);
      console.log("Error occured", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="parentContainer">
      {fetchedData &&
        (isLoading ? (
          <ClipLoader size={150} />
        ) : (
          <div className="container">
            <img src={fetchedData.picture.large} alt="profile" />
            <div className="fullname">
              {fetchedData.name.first} {fetchedData.name.last}
            </div>
            <div className="info">
              <div className="username">
                <i className="fas fa-user"></i>
                {fetchedData.login.username}
              </div>

              <div className="email">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                {fetchedData.email}
              </div>
              <div className="dob">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                {new Date(fetchedData.dob.date).toLocaleDateString()}, (
                {fetchedData.dob.age} years)
              </div>
              <div className="phone">
                <i className="fa fa-phone-square" aria-hidden="true"></i>
                {fetchedData.phone}
              </div>
              <div className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {fetchedData.location.city}, {fetchedData.location.country}
              </div>
              <div className="password">
                <i className="fa fa-key" aria-hidden="true"></i>
                {fetchedData.login.password}
              </div>
            </div>
            <button onClick={getData}>Random Person Generate</button>
          </div>
        ))}

      {!fetchedData && !isLoading && <h2>Oops! No data to show...</h2>}
      {error && <h2>Something went wrong...</h2>}
    </div>
  );
}

export default RandomPerson;
