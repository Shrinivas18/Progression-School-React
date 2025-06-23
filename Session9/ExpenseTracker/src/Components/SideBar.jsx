import React, { useState } from "react";
import menu from "../assets/menu.png";
import { NavLink } from "react-router-dom";
function SideBar() {
  const [showSideBar, setShowSideBar] = useState(false);

  const getLinkClasses = ({ isActive }) =>
    `shadow-lg p-2 rounded-md transition-colors ${
      isActive ? "bg-blue-500 text-white" : "text-gray-800 hover:bg-gray-200"
    }`;
  
  return (
    <div
      className={
        showSideBar ? "w-[20%] p-3 shadow-lg" : "w-[7%] p-3 shadow-lg"
      }
    >
      <div>
        {showSideBar ? (
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 text-center mb-6">
            Expense Tracker
          </h1>
        ) : (
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 text-center mb-6">
            Expense Tracker
          </h1>
        )}
        <img
          className="size-6 cursor-pointer"
          title="Menu"
          onClick={() => setShowSideBar(!showSideBar)}
          src={menu}
          alt="Menu Icon"
        />
      </div>
      {showSideBar && (
        <div>
          <nav className="flex flex-col mt-[10%] gap-7 text-xl ">
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
