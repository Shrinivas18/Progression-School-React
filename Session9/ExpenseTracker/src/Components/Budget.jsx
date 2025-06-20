import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBudget } from "../redux/actions";
function Budget() {
  const dispatch = useDispatch();
  const budgetValue = useSelector((state) => state.budget);
  const expensesList = useSelector((state) => state.expenses);

  let sum = 0;
  for (let i = 0; i < expensesList.length; i++) {
    sum = Number(sum) + Number(expensesList[i]["amount"]);
  }
  let total_expense = sum;
  let remainingBudget = Number(budgetValue) - Number(total_expense);

  const [newBudget, setNewBudget] = useState("");

  const updateAmounts = (e) => {
    e.preventDefault();
    dispatch(setBudget(newBudget, total_expense, remainingBudget));
  };

  return (
    <div className="shadow-md bg-white mt-10 p-6 rounded-xl">
      <form className="flex" onSubmit={updateAmounts}>
        <input
          type="text"
          placeholder="Enter Budget"
          className="w-[90%] mr-5 border rounded-lg px-4 shadow-md"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
        />
        <button
          className="w-32 break-words text-center bg-blue-600 p-3 hover:bg-blue-700 cursor-pointer text-white rounded-lg"
          type="submit"
        >
          Set Budget
        </button>
      </form>

      {/* Summary Cards */}

      <div className="grid grid-cols-3 gap-5 mt-8">
        <div className="bg-purple-50 p-2 rounded-lg">
          <h3 className="text-blue-500 font-bold text-[0.8rem]">
            Total Budget
          </h3>
          <p className="text-[1.5rem]">${budgetValue}</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg">
          <h3 className="text-green-500 font-bold text-[0.8rem]">
            Total Expense
          </h3>
          <p className="text-[1.5rem]">${total_expense}</p>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <h3 className="text-yellow-500 font-bold text-[0.8rem]">Remaining</h3>
          <p className="text-[1.5rem]">${remainingBudget}</p>
        </div>
      </div>
    </div>
  );
}

export default Budget;
