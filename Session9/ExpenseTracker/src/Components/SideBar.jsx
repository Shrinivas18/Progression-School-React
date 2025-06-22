import React, { useState } from "react";
import menu from "../assets/menu.png";
import { Link, NavLink } from "react-router-dom";
function SideBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div
      className={showSideBar ? "w-[20%] p-3 shadow-lg" : "w-[5%] p-3 shadow-lg"}
    >
      <div>
        <img
          className="size-4 cursor-pointer"
          title="Menu"
          onClick={() => setShowSideBar(!showSideBar)}
          src={menu}
          alt="Menu Icon"
        />
      </div>
      {/* 
      ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-800 hover:bg-gray-200"
              } */}

      {showSideBar && (
        <div>
          <nav className="flex flex-col mt-[10%] gap-4 ">
            <NavLink className={`shadow-lg `} to="/">
              Budget
            </NavLink>
            <NavLink className="shadow-lg" to="/expenses">
              Expenses
            </NavLink>
            <NavLink className="shadow-lg" to="/menu3">
              menu 3
            </NavLink>
            <NavLink className="shadow-lg" to="/menu4">
              menu 4
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}

export default SideBar;
