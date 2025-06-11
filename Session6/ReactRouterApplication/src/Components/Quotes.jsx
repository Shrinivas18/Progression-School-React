import axios from "axios";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import "../Style/Quote.css";

const Quotes = () => {
  const url = "https://dummyjson.com/quotes";
  const [fetchedData, setfetchedData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");
  const getData = async () => {
    try {
      setisLoading(true);
      seterror("");
      setfetchedData([]);
      const res = await axios.get(url);
      setfetchedData(res.data.quotes);
      setisLoading(false);
    } catch (e) {
      seterror(e.message);
      console.log("error", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="quoteContainer">
      <div className="header">
        <h1>Inspirational Quotes</h1>
        <button onClick={getData}>
          <i className="fas fa-sync-alt"></i> Refresh
        </button>
      </div>
      <div className="quoteInfo">
        {fetchedData.map((item) => {
          return (
            <div className="quote" key={item.id}>
              <i className="fa-solid fa-quote-right fa-2x"></i>
              <p>{item.quote}</p>
              <p className="author">&mdash; {item.author}</p>
            </div>
          );
        })}
        {isLoading && <ClipLoader size={150} />}
        {error && <h1>Something went wrong...</h1>}
      </div>
    </div>
  );
};

export default Quotes;
