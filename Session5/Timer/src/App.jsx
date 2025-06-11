import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [hour, sethour] = useState(0);
  const [minute, setminute] = useState(0);
  const [second, setsecond] = useState(0);
  const [centiseconds, setcentiseconds] = useState(0);
  const [start, setstart] = useState(true);
  const [stop, setstop] = useState(false);
  const [pause, setpause] = useState(false);
  const intervalRef = useRef(0);

  const handleChange = (action) => {
    let h = hour;
    let min = minute;
    let sec = second;
    let centi = centiseconds;

    switch (action) {
      case "start":
        setstart(false);
        setstop(true);
        intervalRef.current = setInterval(() => {
          centi = centi + 1;
          setcentiseconds(centi);

          if (centi === 100) {
            centi = 0;
            sec = sec + 1;
          }
          if (second === 60) {
            sec = 0;
            min = min + 1;
          }
          if (min === 60) {
            min = 0;
            h = h + 1;
          }

          setcentiseconds(centi);
          setsecond(sec);
          setminute(min);
          sethour(h);
        }, 10);
        break;

      case "stop":
        clearInterval(intervalRef.current);
        setstop(false);
        setpause(true);
        break;

      case "resume":
        handleChange("start");
        setpause(false);
        break;

      case "reset":
        clearInterval(intervalRef.current);
        sethour(0);
        setminute(0);
        setsecond(0);
        setcentiseconds(0);
        setstart(true);
        setpause(false);
        break;

      default:
        clearInterval(intervalRef.current);
        console.log("Something went wrong...");
    }
  };

  useEffect(() => {
    clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="container">
      <h1 className="timer">
        {hour}:{minute}:{second}:{centiseconds}
      </h1>
      {start && <button onClick={() => handleChange("start")}>Start</button>}
      {stop && <button onClick={() => handleChange("stop")}>Stop</button>}
      {pause && (
        <div>
          <button onClick={() => handleChange("resume")}>Resume</button>
          <button onClick={() => handleChange("reset")}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
