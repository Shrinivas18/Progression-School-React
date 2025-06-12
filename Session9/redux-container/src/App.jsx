import { useState } from "react";
import "./App.css";
import CounterApp from "./Components/counterApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterApp />
    </div>
  );
}

export default App;
