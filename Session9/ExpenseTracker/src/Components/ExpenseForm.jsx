import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/actions";
import { v4 as uuid } from "uuid";

function ExpenseForm() {
  const [formData, setFormData] = useState({
    id: "",
    description: "",
    amount: "",
    category: "other",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...formData, id: uuid() };
    dispatch(addExpense(newData));
    setFormData({
      id: "",
      description: "",
      amount: "",
      category: "other",
    });
  };
  return (
    <div className="bg-white mt-5 shadow-md rounded-lg">
      <form className="grid grid-cols-4 p-7 gap-3" onSubmit={handleSubmit}>
        <input
          className="border p-2 rounded-md shadow-md"
          name="description"
          value={formData.description}
          onChange={handleChange}
          type="text"
          placeholder="Enter Description"
          required
        />
        <input
          className="border p-2 rounded-md shadow-md"
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter Amount"
          required
        />
        <select
          className="border p-2 rounded-md shadow-md"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="other">Other</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
        </select>
        <button type="submit" className="bg-green-500 rounded-md shadow-lg">
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
