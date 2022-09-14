import React from "react";
import CashierButton from "../CashierButton/CashierButton";

const PendingVerifying = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-solid border-[#474c64] mt-4 p-4">
      <span className="text-white font-normal sm:text-[14px] sm:text-lg">
        Verifying Pending Details
      </span>

      <div className="flex space-x-4 mt-4 justify-start w-full">
        <span className="text-[#cdcfda] font-normal text-[7px] sm:text-xs">
          {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua."`}
        </span>
      </div>
      <div className="flex flex-col items-start w-full mt-4">
        <span className="text-[#cdcfda] font-normal text-[7px] sm: sm:text-xs">
          Reference Number
        </span>
        <input
          name="pendingVerifying"
          className="rounded-lg text-white mt-2 h-5 sm:h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
          type="text"
        />
      </div>

      <div className="w-56 mt-8 pb-6">
        <CashierButton text={"Verify"} handleClick={() => {}} />
      </div>
    </div>
  );
};

export default PendingVerifying;
