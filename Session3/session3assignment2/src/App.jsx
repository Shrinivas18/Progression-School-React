import { useState } from "react";
import vegetables from "./vegetables";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleButtonClick = (el) => {
    alert(el);
  };
  return (
    <div className="container">
      {vegetables.map((item) => {
        return (
          <button
            className="bt"
            key={item.id}
            onClick={() => handleButtonClick(item.id)}
          >
            {item.value}
          </button>
        );
      })}
    </div>
  );
}

export default App;
