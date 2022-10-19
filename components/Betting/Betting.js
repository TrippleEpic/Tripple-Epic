import { deleteField, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useBet } from "../../context/BetContext";
import { db } from "../../firebase";
import BettingItem from "./BettingItem";

const Betting = () => {
  const { isBetPlaced, counter } = useBet();

  return (
    <>
      {isBetPlaced ? (
        <div className="bg-[#29325E] flex flex-col items-center justify-center p-2 ">
          <span className="text-base sm:text-lg md:text-xl text-white font-normal">
            Result will be Declared in:
          </span>
          <span className="text-[#52587c] text-lg sm:text-xl md:text-3xl font-sans font-normal">
            {counter}
          </span>
        </div>
      ) : (
        <div className="w-full bg-[#29325E] p-2 grid grid-cols-3 grid-rows-2 gap-2">
          <BettingItem text={"50 ksh"} value={50} />
          <BettingItem text={"100 ksh"} value={100} />
          <BettingItem text={"200 ksh"} value={200} />
          <BettingItem text={"500 ksh"} value={500} />
          <BettingItem text={"1000 ksh"} value={1000} />
          <BettingItem text={"2000 ksh"} value={2000} />
        </div>
      )}
    </>
  );
};

export default Betting;
