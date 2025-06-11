import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <div className="steps">
        <h2>Steps</h2>
        <button onClick={() => setCount(count + 5)}>5</button>
        <button onClick={() => setCount(count + 10)}>10</button>
        <button onClick={() => setCount(count + 15)}>15</button>
      </div>

      <div className="container">
        <button className="bt" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="bt" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button className="bt" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
