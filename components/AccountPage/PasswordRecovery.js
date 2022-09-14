import React from "react";
import CashierButton from "../CashierButton/CashierButton";

const PasswordRecovery = () => {
  return (
    <div className="flex flex-col">
      <span className="text-white w-full text-center text-lg sm:text-2xl font-bold">
        Change Password
      </span>

      <span className="text-white mt-5 w-full text-sm font-extralight">
        Current Password
      </span>
      <input
        name="currentPassword"
        className="rounded-sm sm:rounded-lg grow text-white text-xs sm:text-base mt-2 h-7 p-2 sm:h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
        type="text"
      />

      <span className="text-white mt-5 w-full text-sm font-extralight">
        New Password
      </span>
      <input
        name="newPassword"
        className="rounded-sm sm:rounded-lg grow text-white text-xs sm:text-base mt-2 h-7 p-2 sm:h-10 bg-inherit outline-none w-full border-solid border border-[#474c64]"
        type="text"
      />
      <div className="mt-5 w-full">
        <CashierButton text="Save Changes" />
      </div>
    </div>
  );
};

export default PasswordRecovery;
