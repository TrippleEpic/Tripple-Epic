import React, { useState } from "react";
import CashierTabs from "./CashierTabs";
import Deposit from "../Deposit/Deposit";
import Withdraw from "../Withdraw/Withdraw";
import History from "../History/History";
import Bonus from "../Bonus/Bonus";

const Wallet = () => {
  const [selected, setSelected] = useState(1);

  const handleSelection = (index) => {
    setSelected(index);
  };
  return (
    <div className="flex flex-col w-full justify-center bg-[#29325E] py-3 px-8">
      <span className="text-lg sm:text-2xl text-center font-normal text-white mb-4">
        Wallet
      </span>
      <CashierTabs selected={selected} handleSelection={handleSelection} />
      {selected === 1 && <Deposit />}
      {selected === 2 && <Withdraw />}
      {selected === 3 && <History />}
      {selected === 4 && <Bonus />}
    </div>
  );
};

export default Wallet;
