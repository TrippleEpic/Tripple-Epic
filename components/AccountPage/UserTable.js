import React from "react";

const UserTable = ({ item, value }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between w-full p-2">
        <span className="text-white font-extralight text-xs sm:text-sm">
          {item}
        </span>
        <span className="text-white font-extralight text-xs sm:text-sm">
          {value}
        </span>
      </div>
      <div className="border-b-[1px] border-b-[#4c5370] w-full" />
    </div>
  );
};

export default UserTable;
