import React, { useState } from "react";
import Players from "../Players/Players";

const Tabs = () => {
  const [active, setActive] = useState(0);

  const handleSelection = (index) => {
    setActive(index);
  };
  return (
    <div>
      <div className="hidden sm:relative sm:flex ml-2 pt-2 pb-10 w-80 items-center justify-center rounded-[66px] bg-[#29325E]">
        <span
          onClick={() => handleSelection(0)}
          className={`${
            active === 0 ? "text-[#AEADFA]" : "text-white"
          } font-normal text-sm cursor-pointer`}
        >
          Players
        </span>
        <div className="border-r-[1px] mx-3 mt-2 h-6 border-r-[#AEADFA]"></div>
        <span
          onClick={() => handleSelection(1)}
          className={`${
            active === 1 ? "text-[#AEADFA]" : "text-white"
          } font-normal text-sm cursor-pointer`}
        >
          Chats
        </span>
        <div className="border-r-[1px] mx-3 mt-2 h-6 border-r-[#AEADFA]"></div>
        <span
          onClick={() => handleSelection(2)}
          className={`${
            active === 2 ? "text-[#AEADFA]" : "text-white"
          } font-normal text-sm cursor-pointer`}
        >
          History
        </span>
      </div>

      {active === 0 && (
        <div className="sm:-mt-8">
          <Players />
        </div>
      )}
      {active === 1 && (
        <div className="-mt-10">
          <Players />
        </div>
      )}
      {active === 2 && (
        <div className="-mt-10">
          <Players />
        </div>
      )}
    </div>
  );
};

export default Tabs;
