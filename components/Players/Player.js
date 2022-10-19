import React from "react";

const Player = ({ name, username, amount, profit }) => {
  return (
    <div className="flex p-2 justify-between items-center border-b-[1px] border-l-[1px] border-b-[#666c8b] border-l-[#666c8b]">
      <span className="flex-[2] w-[35%] truncate text-white text-[9px] sm:text-sm">
        {name}
      </span>
      <span className="flex-1 w-[25%] truncate text-white text-[9px] sm:text-sm">
        {username}
      </span>
      <span className="flex-1 w-[20%] text-end text-white text-[9px] sm:text-sm">
        {amount}
      </span>
      <span className="mr-8 w-[20%] text-end text-white text-[9px] sm:text-sm">
        {profit}
      </span>
    </div>
  );
};

export default Player;
