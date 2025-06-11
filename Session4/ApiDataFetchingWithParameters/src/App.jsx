import { useState } from "react";
import "./App.css";
import ShowData from "./ShowData";

function App() {
  const [selectedId, setselectedId] = useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSelected = (e) => {
    setselectedId(e.target.value);
  };
  return (
    <div>
      <div>
        <select name="" id="" onChange={handleSelected}>
          <option value="select">SELECT</option>
          {arr.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <ShowData id={selectedId} />
      </div>
    </div>
  );
}

export default App;
