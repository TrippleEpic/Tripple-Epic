import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center bg-[#29325E] py-4 px-10 sm:px-20">
      <span className="text-white text-lg sm:text-2xl font-normal w-full text-center">
        Game Setting
      </span>

      <div className="flex items-center w-64 sm:w-80 md:w-[50%] justify-center space-x-4 mt-20">
        <span className="text-white text-xs sm:text-sm font-normal whitespace-nowrap">
          Player list size:
        </span>
        <input
          name="currentPassword"
          className="rounded-lg grow text-white mt-2 h-6 bg-inherit outline-none border-solid border border-[#474c64]"
          type="text"
        />
      </div>

      <span className="text-white text-xs w-64 sm:w-80 md:w-[50%] sm:text-sm font-extralight mt-10 pb-20">{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`}</span>
    </div>
  );
};

export default SettingsPage;
