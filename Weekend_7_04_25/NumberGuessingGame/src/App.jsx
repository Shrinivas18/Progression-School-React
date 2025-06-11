import { useState } from "react";
import "./App.css";

function App() {
  const [number, setnumber] = useState(null);
  const [Start, setStart] = useState(true);
  const [Reset, setReset] = useState(false);
  const [input, setinput] = useState("");
  const [answer, setanswer] = useState("");
  const start = () => {
    setReset(true);
    setStart(false);
    setanswer("");
    setnumber(Math.floor(Math.random() * 100));
  };

  const reset = () => {
    setReset(false);
    setanswer("");
    setStart(true);
  };

  const checkCloseness = () => {
    if (number < input) {
      return setanswer("Too High");
    } else if (number > input) {
      return setanswer("Too Low");
    } else {
      return setanswer("Correct Answer");
    }
  };

  return (
    <div className="container">
      <div>
        <button onClick={start} disabled={!Start}>
          Start the Game
        </button>
      </div>
      <div className="input">
        <input
          type="number"
          name=""
          id=""
          placeholder="Enter prediction here..."
          onChange={(e) => setinput(e.target.value)}
          disabled={Start}
        />
        <button disabled={Start} onClick={checkCloseness}>
          Check you luck?
        </button>
        <p className="result">{answer}</p>
      </div>
      <div>
        <button onClick={reset} disabled={!Reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
