import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Cards from "./Cards";

function App() {
  const [fetchedData, setfetchedData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState("");

  const getData = async () => {
    setisLoading(true);
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const res = await axios.get(url);
      setfetchedData(res.data);
      setisLoading(false);
    } catch (error) {
      console.log("error", error);
      seterror(error.message);
      setisLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        fetchedData.map((item) => {
          return (
            <div className="fetchedData" key={item.id}>
              <Cards
                name={item.name}
                email={item.email}
                companyName={item.company.name}
              />
            </div>
          );
        })
      )}

      {error && <h2>Sorry! Something went wrong, {error} happened.</h2>}
    </div>
  );
}

export default App;
