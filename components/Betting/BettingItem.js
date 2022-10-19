import React from "react";
import { useBet } from "../../context/BetContext";
import { useKsh } from "../../context/SelectedKshContext";

const BettingItem = ({ text, value }) => {
  const { changeSelectedKsh } = useKsh();
  const { winningColor, winningAmount } = useBet();
  return (
    <div
      className={`${
        winningColor.length > 0 && winningAmount === value
          ? winningColor === "green"
            ? "bg-green-500"
            : winningColor === "red"
            ? "bg-red-500"
            : "bg-gray-600"
          : "bg-inherit"
      } border border-[#52587c] w-full h-full hover:cursor-pointer`}
      onClick={() => changeSelectedKsh(value)}
    >
      <span className="text-white flex justify-center items-center h-full p-3 font-normal text-sm sm:text-base">
        {text}
      </span>
    </div>
  );
};

export default BettingItem;
