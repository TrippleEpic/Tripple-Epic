import React from "react";

const Table = ({ heading1, heading2, heading3, heading4 }) => {
  return (
    <div className="flex px-8 py-2 w-full items-center bg-[#AEADFA]">
      <span className="text-black flex-1 text-xs sm:text-lg font-bold">
        {heading1}
      </span>
      <span className="text-black flex-1  text-xs sm:text-lg font-bold">
        {heading2}
      </span>
      <span className="text-black flex-[2] ml-2 sm:ml-0 text-xs sm:text-lg font-bold">
        {heading3}
      </span>
      <span className="text-black text-xs sm:text-lg font-bold">
        {heading4}
      </span>
    </div>
  );
};

export default Table;
