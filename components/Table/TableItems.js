import React from "react";

const TableItems = ({ value1, value2, value3, value4 }) => {
  return (
    <div className="flex items-center w-full border border-[#474c64] p-[5px]">
      <span className="flex-1 text-white text-[10px] sm:text-sm font-normal ml-6">
        {value1}
      </span>
      <span className="flex-1 text-white text-[10px] sm:text-sm font-normal">
        {value2}
      </span>
      <span className="flex-[2] text-white text-[10px] ml-4 sm:ml-0 sm:text-sm font-normal">
        {value3}
      </span>
      <span className="text-white text-[10px] sm:text-sm font-normal mr-8">
        {value4}
      </span>
    </div>
  );
};

export default TableItems;
