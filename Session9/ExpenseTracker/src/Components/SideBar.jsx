import React, { useState } from "react";
import menu from "../assets/menu.png";
import { NavLink } from "react-router-dom";
import expenseTracker from "../assets/expense-tracker.png";

function SideBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const getLinkClasses = ({ isActive }) =>
    `shadow-lg p-2 rounded-md transition-colors ${
      isActive ? "bg-blue-500 text-white" : "text-gray-800 hover:bg-gray-200"
    }`;

  return (
    <div
      className={
        showSideBar
          ? "lg:w-[15%] w-[100%] p-3 shadow-lg"
          : "lg:w-[10%] w-[20%] mt-5 "
      }
    >
      <div>
        <img
          className="lg:size-6 cursor-pointer size-8"
          title="Menu"
          onClick={() => setShowSideBar(!showSideBar)}
          src={menu}
          alt="Menu Icon"
        />
      </div>
      {showSideBar && (
        <div>
          <nav className="flex lg:flex-col flex-row  mt-[10%] gap-7 text-md ">
            <NavLink className={getLinkClasses} to="/">
              Budget
            </NavLink>
            <NavLink className={getLinkClasses} to="/expenses">
              Expenses
            </NavLink>
            <NavLink className={getLinkClasses} to="/menu3">
              menu 3
            </NavLink>
            <NavLink className={getLinkClasses} to="/menu4">
              menu 4
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}

export default SideBar;
