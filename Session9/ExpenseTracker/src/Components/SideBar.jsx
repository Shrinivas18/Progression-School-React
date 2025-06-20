import React, { useState } from "react";
import menu from "../assets/menu.png";
function SideBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className={showSideBar ? "w-[20%] p-3 border" : "w-[5%] p-3 border"}>
      <div>
        <img
          className="size-4 cursor-pointer"
          title="Menu"
          onClick={() => setShowSideBar(!showSideBar)}
          src={menu}
          alt="Menu Icon"
        />
      </div>

      {showSideBar && (
        <div className="flex flex-col mt-[10%] gap-4 ">
          <h1 className="shadow-lg">Menu 1</h1>
          <h1 className="shadow-lg">Menu 2</h1>
          <h1 className="shadow-lg">Menu 3</h1>
          <h1 className="shadow-lg">Menu 4</h1>
        </div>
      )}
    </div>
  );
}

export default SideBar;
