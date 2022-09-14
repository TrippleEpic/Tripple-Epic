import React from "react";
import CashierButton from "../CashierButton/CashierButton";
import PendingVerifying from "../PendingVerifying/PendingVerifying";

const Paybill = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center border border-solid border-[#474c64] mt-4 p-4">
        <div className="flex flex-col items-start justify-center w-full">
          <span className="text-white text-[7px] sm:text-xs font-normal uppercase">
            Note:
          </span>

          <span className="text-white w-60 font-normal text-[7px] sm:text-xs mt-6">{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "`}</span>
        </div>

        <div className="flex flex-col items-start justify-center mt-5 w-full">
          <span className="text-white text-[7px] sm:text-xs font-normal uppercase">
            Steps:
          </span>

          <span className="text-white w-60 font-normal text-[7px] sm:text-xs mt-6">{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "`}</span>
        </div>

        <div className="w-56 m-10">
          <CashierButton text={"Deposit"} handleClick={() => {}} />
        </div>
      </div>

      <PendingVerifying />
    </div>
  );
};

export default Paybill;
