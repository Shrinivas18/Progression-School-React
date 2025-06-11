import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/Cards.css";
import { ClipLoader } from "react-spinners";

const Users = () => {
  const [fetchedData, setfetchedData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");

  const navigation = useNavigate();

  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      setisLoading(true);
      const res = await axios.get(url);
      setfetchedData(res.data);
      setisLoading(false);
    } catch (e) {
      seterror(e.message);
      setisLoading(false);
      console.log("error", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading)
    return (
      <div className="loader">
        <ClipLoader size={150} />
      </div>
    );
  if (error) return <h1 className="error">Something went wrong: {error}</h1>;

  return (
    <div className="parentContainer">
      <h1>Users</h1>
      <div className="cards">
        {fetchedData.map((item) => {
          return (
            <div className="cardsInfo" key={item.id}>
              <div className="name">
                <i className="fa-regular fa-circle-user fa-3x"></i>
                <p>{item.name}</p>
              </div>
              <div className="email">
                <i className="fa-regular fa-envelope"></i> <p> {item.email}</p>
              </div>
              <div className="website">
                <i className="fa-solid fa-globe"></i> <p> {item.website}</p>
              </div>
              <button
                onClick={() => {
                  navigation(`/users/${item.id}`);
                }}
              >
                View Details &nbsp;<i className="fa-solid fa-arrow-right"></i>{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
