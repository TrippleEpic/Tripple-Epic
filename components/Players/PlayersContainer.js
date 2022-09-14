import React from "react";
import Player from "./Player";

const PlayersContainer = () => {
  return (
    <div className="relative flex flex-col h-full">
      <div className="flex justify-between items-center bg-[#AEADFA] p-1 sm:p-3">
        <span className="flex-[2] ml-2 text-[12px] sm:text-base font-bold">
          User
        </span>
        <span className="flex-1 text-[12px] sm:text-base font-bold">@</span>
        <span className="flex-1 text-[12px] sm:text-base font-bold">
          Amount
        </span>
        <span className="mr-4 text-[12px] sm:text-base font-bold">Profit</span>
      </div>
      <div className="h-[86%] overflow-scroll">
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />

        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="atul" username="atul" amount="250" profit="300" />
        <Player name="kiui" username="atul" amount="250" profit="300" />
      </div>
      <div className="absolute bottom-0 flex justify-between items-center bg-[#AEADFA] p-1 sm:p-2 w-full">
        <div className="flex flex-col items-center basis-1/2">
          <span className="font-bold text-[12px] sm:text-base">ONLINE</span>
          <span>-</span>
        </div>
        <div className="flex flex-col items-center basis-1/2">
          <span className="font-bold text-[12px] sm:text-base">PLAYING</span>
          <span>-</span>
        </div>
      </div>
    </div>
  );
};

export default PlayersContainer;
