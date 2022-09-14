import React, { useState } from "react";
import InputDeposit from "./InputDeposit";
import Paybill from "./Paybill";

const Deposit = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div>
      <div className="flex items-center mt-8">
        <button
          onClick={() => setSelected(1)}
          className={`${
            selected === 1 ? "bg-[#AEADFA]" : "bg-white"
          } text-black font-normal text-[10px] transition-all duration-200 ease-in-out p-2`}
        >
          Input Deposit
        </button>
        <button
          onClick={() => setSelected(2)}
          className={`${
            selected === 2 ? "bg-[#AEADFA]" : "bg-white"
          } text-black transition-all ease-in-out duration-200 font-normal text-[10px] p-2`}
        >
          Paybill Instructions
        </button>
      </div>

      {selected === 1 ? <InputDeposit /> : <Paybill />}
    </div>
  );
};

export default Deposit;
