import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [customInp, setcustomInp] = useState(null);

  const handleClick = (val) => {
    const newVal = parseInt(val);
    const sum = newVal + count;
    if (check(sum)) {
      setCount(sum);
    } else {
      if (sum > 100) {
        alert(`Sorry! value reached upper limit: 100`);
      } else if (sum < -100) {
        alert(`Sorry! value reached lower limit: -100`);
      } else {
        alert("Something went wrong!");
      }
    }
  };

  const handleCustomInput = () => {};
  function check(val) {
    if (val > 100) {
      return false;
    } else if (val < -100) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="container">
      <div
        className={`counter ${
          count > 0 ? "positive" : count == 0 ? "zero" : "negative"
        }`}
      >
        {count}
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("+1")}>+1</button>
        <button onClick={() => handleClick("-1")}>-1</button>
        <button onClick={() => handleClick("+5")}>+5</button>
        <button onClick={() => handleClick("-5")}>-5</button>
        <button className="zero" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <div className="customInput">
        <input
          type="number"
          onChange={(e) => setcustomInp(e.target.value)}
          placeholder="Enter custom value"
        />
        <button onClick={() => handleClick(customInp)}>Set Value</button>
      </div>
    </div>
  );
}

export default App;
