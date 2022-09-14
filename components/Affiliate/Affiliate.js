import Image from "next/image";
import React from "react";
import BalanceItem from "../Balances/BalanceItem";
import CashierButton from "../CashierButton/CashierButton";
import Table from "../Table/Table";
import TableItems from "../Table/TableItems";

const Affiliate = () => {
  const [selected, setSelected] = React.useState(0);

  const handleSelection = (index) => {
    setSelected(index);
  };
  return (
    <div className="flex flex-col bg-[#29325E] w-full items-center justify-center p-4 mt-4">
      <div className="flex w-full p-2 flex-col items-center justify-center">
        <div className="flex flex-col items-center sm:items-start justify-center mt-5">
          <span className="text-sm sm:text-lg font-bold text-white">
            TrippleEpic Affiliate Program
          </span>

          <span className="text-base text-white font-normal mt-10">
            Copy and Share Affiliate link
          </span>
          <div className="flex items-center w-full justify-start">
            <input
              name="link"
              className="rounded-sm sm:rounded-lg ml-14 sm:ml-0 text-white h-8 sm:h-10 bg-inherit text-xs sm:text-sm p-2 outline-none border-solid border border-[#474c64]"
              type="text"
            />
            <div className="sm:w-56">
              <CashierButton text="Copy Link" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6">
        <div className="flex justify-between items-center space-x-4 sm:space-x-10 md:space-x-36 p-2">
          <span
            className={`${
              selected === 0 ? "text-[#AEADFA]" : "text-white"
            } text-base font-normal hover:cursor-pointer`}
            onClick={() => handleSelection(0)}
          >
            Summary
          </span>
          <span
            className={`${
              selected === 1 ? "text-[#AEADFA]" : "text-white"
            } text-base font-normal hover:cursor-pointer`}
            onClick={() => handleSelection(1)}
          >
            Referals
          </span>
          <span
            className={`${
              selected === 2 ? "text-[#AEADFA]" : "text-white"
            } text-base font-normal hover:cursor-pointer`}
            onClick={() => handleSelection(2)}
          >
            Payments
          </span>
        </div>

        <div className="border-b-[1px] border-[#4e567a] w-full mt-2"></div>
      </div>

      {selected === 0 && (
        <>
          <div className="w-full  border border-[#474c64] mt-8">
            <BalanceItem itemText={"Number of referrals"} itemValue={"1"} />
            <BalanceItem itemText={"Total Paid"} itemValue={"1"} />
            <BalanceItem itemText={"Total unpaid"} itemValue={"1"} />
          </div>
          <div className="mt-20 w-72 pb-8">
            <CashierButton text={"Transfer to Wallet"} />
          </div>
        </>
      )}

      {selected === 1 && (
        <div className="flex flex-col w-full items-center mt-5">
          <Table
            heading1="#"
            heading2="Username"
            heading3="Commision"
            heading4="Date"
          />
          <TableItems value1="1" value2="-" value3="-" value4="-" />
        </div>
      )}

      {selected === 2 && (
        <div className="w-full text-center">
          <Image
            src="/images/card.png"
            alt="card"
            width="300px"
            height="200px"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default Affiliate;
