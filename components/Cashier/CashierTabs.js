import React, { useState } from "react";

const CashierTabs = ({ selected, handleSelection }) => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <span
          className={`${
            selected === 1 ? "text-[#AEADFA]" : "text-white"
          } text-xs sm:text-lg font-normal hover:cursor-pointer`}
          onClick={() => handleSelection(1)}
        >
          Deposit
        </span>
        <span
          className={`${
            selected === 2 ? "text-[#AEADFA]" : "text-white"
          } text-xs sm:text-lg font-normal hover:cursor-pointer`}
          onClick={() => handleSelection(2)}
        >
          Withdraw
        </span>
        <span
          className={`${
            selected === 3 ? "text-[#AEADFA]" : "text-white"
          } text-xs sm:text-lg font-normal hover:cursor-pointer`}
          onClick={() => handleSelection(3)}
        >
          History
        </span>
        <span
          className={`${
            selected === 4 ? "text-[#AEADFA]" : "text-white"
          } text-xs sm:text-lg font-normal hover:cursor-pointer sm:mr-10`}
          onClick={() => handleSelection(4)}
        >
          Bonus
        </span>
      </div>
      <div className="mt-2 w-full border-b-[1px] border-b-[#4f557a]"></div>
    </div>
  );
};

export default CashierTabs;
