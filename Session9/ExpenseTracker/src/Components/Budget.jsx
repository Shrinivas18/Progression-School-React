import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBudget } from "../redux/actions";
function Budget() {
  const dispatch = useDispatch();
  const budgetValue = useSelector((state) => state.budget);
  const [newBudget, setNewBudget] = useState("");
  const updateAmounts = (e) => {
    e.preventDefault();
    dispatch(setBudget(newBudget));
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
          className="bg-blue-600 p-3 text-white w-[10%] rounded-lg"
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
          <p className="text-[1.5rem]">$0</p>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <h3 className="text-yellow-500 font-bold text-[0.8rem]">Remaining</h3>
          <p className="text-[1.5rem]">$0</p>
        </div>
      </div>
    </div>
  );
}

export default Budget;
