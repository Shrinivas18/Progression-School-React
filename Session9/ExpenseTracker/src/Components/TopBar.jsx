import React from "react";
import expenseTracker from "../assets/expense-tracker.png";
import userProfile from "../assets/user.png";
function TopBar() {
  return (
    <div className="flex gap-[75%] lg:gap-[80%] shadow-md">
      <img
        className="lg:size-[15%] size-[20%] p-1 mb-1"
        src={expenseTracker}
        alt="Expense Tracker Logo"
      />
      <img
        className="md:size-[2.5%] max-md:size-[3%] max-md:mt-2.5 max-sm:mt-2 max-sm:size-[3.5%]  align-middle justify-center mt-3"
        src={userProfile}
        alt="User Profile"
      />
    </div>
  );
}

export default TopBar;
