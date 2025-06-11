import { useReducer, useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const initialData = {
  fetchedData: [],
  isLoading: true,
  error: "",
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "FETCH_START":
      console.log("Start");
      return {
        ...currentState,
        isLoading: true,
        error: "",
      };
    case "FETCH_SUCCESS":
      console.log("success");
      return {
        fetchedData: action.payload,
        isLoading: false,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...currentState,
        isLoading: false,
        error: action.payload,
      };
    default:
      return currentState;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, initialData);

  const getData = async () => {
    dispatch({ type: "FETCH_START" });
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const res = await axios.get(url);
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div className="container">
      {data.isLoading ? (
        <ClipLoader size={150} />
      ) : (
        data.fetchedData.map((item) => {
          return (
            <div className="fetchedData" key={item.id}>
              <h2>Name: {item.name}</h2>
              <h2>Email: {item.email}</h2>
              <h2>Company: {item.company.name}</h2>
            </div>
          );
        })
      )}

      {data.error && (
        <h2>Sorry! Something went wrong, {data.error} happened.</h2>
      )}
    </div>
  );
}

export default App;
