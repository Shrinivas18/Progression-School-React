import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [billAmount, setbillAmount] = useState(null);
  const [tipPercentage, settipPercentage] = useState("");
  const [tipAmount, settipAmount] = useState(null);
  const [totalBill, settotalBill] = useState(null);

  const handleBillAmount = (e) => {
    let amount = parseInt(e.target.value);
    setbillAmount(amount);
    setAmounts(amount, tipPercentage);
  };

  const handleTipAmount = (e) => {
    let amount = parseInt(e.target.value);
    settipPercentage(amount);
    setAmounts(billAmount, amount);
  };

  const directTip = (billAmount, val) => {
    settipPercentage(val);
    setAmounts(billAmount, val);
  };

  const setAmounts = (amount, tip) => {
    if (isNaN(amount) || isNaN(tip)) {
      settipAmount(0);
      settotalBill(0);
      return;
    }
    let tips = amount * (tip / 100);
    settipAmount(tips);
    settotalBill(amount + tips);
  };

  return (
    <div className="parentContainer">
      <div className="container">
        <div className="input">
          <input
            type="number"
            onChange={handleBillAmount}
            placeholder="Enter bill amount..."
          />
          <input
            type="number"
            value={tipPercentage}
            onChange={handleTipAmount}
            placeholder="Enter tip %..."
          />
        </div>
        <div className="details">
          <h2>Tip {tipAmount}</h2>
          <h2>Total Bill {totalBill}</h2>
        </div>
        <div className="buttonGroup">
          <button onClick={() => directTip(billAmount, 15)}>15%</button>
          <button onClick={() => directTip(billAmount, 18)}>18%</button>
          <button onClick={() => directTip(billAmount, 20)}>20%</button>
        </div>
      </div>
    </div>
  );
}

export default App;
