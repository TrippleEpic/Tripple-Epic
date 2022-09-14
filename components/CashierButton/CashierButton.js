import React from "react";

const CashierButton = ({ text, handleClick }) => {
  return (
    <button
      className="bg-[#7581BB] text-sm whitespace-nowrap sm:text-base text-black rounded-md font-bold px-2 py-[7px] marker:sm:py-0 sm:p-2 w-full tracking-[0.16em] "
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CashierButton;
