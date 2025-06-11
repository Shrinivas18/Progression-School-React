import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import ToDo from "./Components/ToDo";

function App() {
  return (
    <div>
      <h1>Counter</h1>
      <Counter />
      <ToDo />
    </div>
  );
}

export default App;
