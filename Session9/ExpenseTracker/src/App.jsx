import { useState } from "react";
import "./App.css";
import Budget from "./Components/Budget";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import SideBar from "./Components/sideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-5 h-screen bg-gray-100 flex gap-5">
      <SideBar />
      <div className="border p-5 w-[100%]">
        <h1 className="text-3xl font-bold">Expense Tracker</h1>
        <Budget />
        <ExpenseForm />
        <ExpenseTable />
      </div>
    </div>
  );
}

export default App;
