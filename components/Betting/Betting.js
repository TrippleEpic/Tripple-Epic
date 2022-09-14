import React from "react";
import BettingItem from "./BettingItem";

const Betting = () => {
  return (
    <div className="w-full bg-[#29325E] p-2 grid grid-cols-3 grid-rows-2 gap-2 mt-4">
      <BettingItem text={"50 ksh"} />
      <BettingItem text={"100 ksh"} />
      <BettingItem text={"200 ksh"} />
      <BettingItem text={"500 ksh"} />
      <BettingItem text={"1000 ksh"} />
      <BettingItem text={"2000 ksh"} />
    </div>
  );
};

export default Betting;
