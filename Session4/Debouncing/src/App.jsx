import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import Highlighter from "react-highlight-words";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [fetchedData, setfetchedData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setsearchTerm] = useState("");
  const [filteredData, setfilteredData] = useState(null);
  const [status, setstatus] = useState("all");
  const [noData, setnoData] = useState(true);

  const fetchData = async () => {
    let url = "https://jsonplaceholder.typicode.com/todos";

    try {
      setisLoading(true);
      const res = await axios.get(url);
      setfetchedData(res.data);
      setisLoading(false);
    } catch (e) {
      setError(e.message);
      setisLoading(false);
    }
  };

  const applyfilter = () => {
    let updatedData = [...fetchedData];
    updatedData = updatedData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    if (status !== "all") {
      updatedData = updatedData.filter((item) =>
        status === "completed" ? item.completed : !item.completed
      );
    }
    if (updatedData.length === 0) {
      setnoData(true);
    } else {
      setnoData(false);
    }
    setfilteredData(updatedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      applyfilter();
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm, fetchedData, status, noData]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setsearchTerm(e.target.value)}
        placeholder="Search items here..."
      />
      <div>
        <button
          onClick={() => {
            setstatus("all");
          }}
          className={status === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => {
            setstatus("completed");
          }}
          className={status === "completed" ? "active" : ""}
        >
          Completed
        </button>
        <button
          onClick={() => {
            setstatus("incomplete");
          }}
          className={status === "incomplete" ? "active" : ""}
        >
          Incomplete
        </button>
      </div>
      <div>
        {isLoading ? (
          <div className="spinner">
            <ClipLoader size={150} />
          </div>
        ) : (
          filteredData &&
          filteredData.map((item) => {
            return (
              <div key={item.id}>
                <h2>
                  <span>
                    <input type="checkbox" checked={item.completed} readOnly />
                  </span>
                  <Highlighter
                    highlightClassName="highlight"
                    searchWords={[searchTerm]}
                    autoEscape={true}
                    textToHighlight={item.title}
                  />
                </h2>
              </div>
            );
          })
        )}

        {error && <h2>Oops! Something went wrong...</h2>}
        {noData && !isLoading && <h2>Oops! No matches found...</h2>}
      </div>
    </div>
  );
}

export default App;
