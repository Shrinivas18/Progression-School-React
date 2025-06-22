import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, patchExpense } from "../redux/actions";
import SearchBox from "./SearchBox";
import eye from "../assets/eye.png";
import hidden from "../assets/hidden.png";

function ExpenseTable() {
  const expenses = useSelector((state) => state.expenses);
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const [showTable, setShowTable] = useState();

  const patchData = (id) => {
    const data = expenses.find((expense) => expense.id === id);
    dispatch(patchExpense(data));
  };

  const deleteData = (id) => {
    dispatch(deleteExpense(id));
  };

  const filteredData = expenses.filter((item) =>
    item.description.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <button
        className="mt-4 cursor-pointer"
        onClick={() => setShowTable(!showTable)}
      >
        <img
          className="size-5"
          src={showTable ? hidden : eye}
          title={showTable ? "Hide Expenses" : "Show Expenses"}
          alt="show/hide icon"
        />
      </button>
      {showTable && (
        <div className="w-full mx-auto p-4 bg-white rounded-xl shadow-lg mt-4 overflow-x-auto">
          <SearchBox searchItem={searchItem} setSearchItem={setSearchItem} />
          <table className="min-w-full divide-y divide-gray-200 shadow-lg overflow-x-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(searchItem ? filteredData : expenses).map((item) => {
                return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      <span className="text-black text-bold">$</span>{" "}
                      {item.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm mr-2 cursor-pointer"
                        onClick={() => patchData(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm cursor-pointer bold"
                        onClick={() => deleteData(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ExpenseTable;
