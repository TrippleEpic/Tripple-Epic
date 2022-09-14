import React from "react";
import Balances from "../Balances/Balances";
import CashierButton from "../CashierButton/CashierButton";

const Withdraw = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className="w-80 sm:w-96 max-w-xl">
        <div className="flex flex-col w-full items-center justify-center border border-solid border-[#474c64] p-14">
          <span className="font-bold text-[7px] sm:text-sm text-white">
            Withdraw Tax Notice
          </span>
          <span className="font-normal mt-8 text-[7px] sm:text-sm text-white">{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`}</span>
        </div>

        <div className="w-full items-start mt-4">
          <span className="text-white font-normal text-[7px] sm:text-xs">
            Amout
          </span>
          <input
            name="amount"
            className="rounded-lg text-[7px] sm:text-xs text-white mt-2 h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
            type="text"
          />
        </div>

        <div className="w-full mt-4">
          <Balances />
        </div>

        <div className="w-full p-4 mt-4">
          <CashierButton text="Withdraw" handleClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
