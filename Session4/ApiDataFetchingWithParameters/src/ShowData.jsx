import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

function ShowData(props) {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts?userId=";
      try {
        setisLoading(true);
        const res = await axios.get(url + props.id);
        setdata(res.data);
        setisLoading(false);
      } catch (error) {
        seterror(error.message);
        setisLoading(false);
      }
    };
    getData();
  }, [props.id]);

  return (
    <div className="container">
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        data.map((item) => {
          return (
            <div className="fetchedData" key={item.id}>
              <h2>
                Title:
                <span>{item.title}</span>
              </h2>
              <h2>
                Body:
                <span>{item.body}</span>
              </h2>
            </div>
          );
        })
      )}

      {error && <h2>Sorry! Something went wrong, {error} happened.</h2>}
      {props.id === null && !error && !isLoading && (
        <h2>Oops! No data to show.</h2>
      )}
    </div>
  );
}

export default ShowData;
