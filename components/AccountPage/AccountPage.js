import React from "react";
import PasswordRecovery from "./PasswordRecovery";
import UserTable from "./UserTable";

const AccountPage = () => {
  const [selected, setSelected] = React.useState(1);
  return (
    <div className=" flex flex-col justify-center items-center bg-[#29325E] p-4">
      <span className="text-base sm:text-xl text-white font-semibold ">
        Account
      </span>

      <div className="flex flex-col mt-8">
        <div className="flex space-x-10 p-2">
          <span
            className={`${
              selected === 1 ? "text-[#7581BB]" : "text-white"
            } font-normal hover:cursor-pointer text-sm sm:text-base`}
            onClick={() => setSelected(1)}
          >
            Overview
          </span>
          <span
            className={`${
              selected === 2 ? "text-[#7581BB]" : "text-white"
            } font-normal hover:cursor-pointer text-sm sm:text-base`}
            onClick={() => setSelected(2)}
          >
            Settings
          </span>
        </div>
        <div className="border-b-[1px] border-b-[#4c5370] mt-2 w-full" />
      </div>

      {selected === 1 && (
        <>
          <div className="w-full mt-5 flex flex-col border border-[#4c5370]">
            <UserTable item="username" value="1" />
            <UserTable item="Joined" value="1" />
            <UserTable item="Profit" value="1" />
          </div>
          <div className="w-full mt-5 flex flex-col border border-[#4c5370]">
            <UserTable item="username" value="1" />
            <UserTable item="Joined" value="1" />
            <UserTable item="Profit" value="1" />
            <UserTable item="Profit" value="1" />
          </div>
        </>
      )}

      {selected === 2 && (
        <div className="p-5 w-full md:w-96 mt-5 border border-[#4c5370]">
          <PasswordRecovery />
        </div>
      )}
    </div>
  );
};

export default AccountPage;
