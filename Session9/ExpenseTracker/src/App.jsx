import { useState } from "react";
import "./App.css";
import Budget from "./Components/Budget";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-10 h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Expense Tracker</h1>
      <Budget />
      <ExpenseForm />
      <ExpenseTable />
    </div>
  );
}

export default App;
