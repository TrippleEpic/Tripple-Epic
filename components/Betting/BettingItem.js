import React from "react";
import { useKsh } from "../../context/SelectedKshContext";

const BettingItem = ({ text }) => {
  const { changeSelectedKsh } = useKsh();
  return (
    <div
      className="border border-[#52587c] w-full h-full hover:cursor-pointer"
      onClick={() => changeSelectedKsh(text)}
    >
      <span className="text-white p-3 font-normal text-xs">{text}</span>
    </div>
  );
};

export default BettingItem;
