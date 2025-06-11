import { useState } from "react";
import Cards from "./Cards";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="parentContainer">
        <h1 className="mainHeader">
          The Right Plan for <span>Your Business</span>
        </h1>
        <p className="subHeader">
          Choose a perfect plan to scale your business with comprehensive suite
          of tools and services. Get started today and see the difference.
        </p>
        <Cards />
      </div>
    </>
  );
}

export default App;
