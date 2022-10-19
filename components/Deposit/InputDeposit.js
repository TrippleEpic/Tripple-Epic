import React, { useState } from "react";
import PendingVerifying from "../PendingVerifying/PendingVerifying";
import PaypalCheckoutButton from "../PaypalCheckoutButton/PaypalCheckoutButton";

const InputDeposit = () => {
  const [amount, setAmount] = useState(50);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center border border-solid border-[#474c64] mt-4 p-4">
        <div className="flex items-center justify-start w-full">
          <span className="text-white text-[7px] sm:text-xs font-normal uppercase">
            Amount
          </span>
          <span className="uppercase text-[7px] sm:text-xs text-[#AEADFA] font-normal">{`(kes)`}</span>
        </div>
        <input
          name="phoneNumber"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="rounded-lg text-white text-xs ms:text-sm p-2 mt-2 h-5 sm:h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
          type="number"
        />

        <div className="flex space-x-4 mt-4 justify-start w-full">
          <div className="sm:w-1 w-px h-1 p-2 bg-white"></div>
          <span className="text-[#cdcfda] font-normal text-[7px] sm:text-xs w-36">
            {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."`}
          </span>
        </div>
        <div className="w-24 sm:w-56 mt-4 pb-6 flex items-center justify-center">
          <PaypalCheckoutButton amount={amount} />
        </div>
      </div>

      <PendingVerifying />
    </div>
  );
};

export default InputDeposit;
