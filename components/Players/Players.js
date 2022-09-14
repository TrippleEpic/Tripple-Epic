import React from "react";
import PlayersContainer from "./PlayersContainer";

const Players = () => {
  return (
    <div className="relative bg-[#29325E] h-[800px] flex">
      {/* <div className="transform w-10 -rotate-90 ml-80 flex justify-center text-[#AEADFA] text-base tracking-[1.015em] font-normal">
        Players
      </div> */}
      <div className="w-full">
        <PlayersContainer />
      </div>
    </div>
  );
};

export default Players;
