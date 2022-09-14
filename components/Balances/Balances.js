import React from "react";
import BalanceItem from "./BalanceItem";

const Balances = () => {
  return (
    <div className="w-full flex flex-col border border-solid border-[#474c64]">
      <BalanceItem itemText={"Available Balance"} itemValue="0.85" />
      <BalanceItem itemText={"Withdraw Amount"} itemValue="0.85" />
      <BalanceItem itemText={"Withdraw Tax"} itemValue="0.85" />
      <BalanceItem itemText={"Withdraw Fee"} itemValue="0.85" />
      <BalanceItem itemText={"Available Balance"} itemValue="0.85" />
    </div>
  );
};

export default Balances;
