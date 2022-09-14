import React from "react";

const BalanceItem = ({ itemText, itemValue }) => {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-b-[#474c64] p-3">
      <span className="text-white text-[10px] sm:text-xs font-normal">
        {itemText}
      </span>
      <span className="text-white text-[10px] sm:text-xs font-normal">
        {itemValue}
      </span>
    </div>
  );
};

export default BalanceItem;
