import { collection, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Player from "./Player";

const PlayersContainer = () => {
  const [online, setOnline] = useState(0);
  const [players, setPlayers] = useState([]);
  const [currentlyBetting, setCurrentlyBetting] = useState();
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "USERS"), (querySnapshot) => {
      var online = 0;
      var currentBets = 0;
      const currentPlayers = [];
      querySnapshot.docs.forEach((doc) => {
        var player = {};
        if (doc.data()?.status === "online") {
          online += 1;
          player = {
            ...player,
            email: doc.data().email,
            username: doc.data().username,
            userid: doc.data().userid,
          };
        }
        if (doc.data()?.playing) {
          currentBets += 1;
          player = {
            ...player,
            amountBetted: doc.data().amountBetted,
            playing: doc.data().playing,
            colorSelected: doc.data().colorSelected,
          };
        }
        if (doc.data().result) {
          player = { ...player, winningColor: doc.data().winningColor };
        }
        if(player.username?.length>0){
        currentPlayers.push(player);
        }
      });
      setCurrentlyBetting(currentBets);
      setPlayers(currentPlayers);
      setOnline(online);
    });

    return () => unsubscribe;
  }, []);

  console.log(players);

  return (
    <div className="relative flex flex-col w-full">
      <div className="flex justify-between rounded-sm items-center bg-[#AEADFA] p-1 sm:p-3">
        <span className="flex-[2] w-[35%] ml-2 text-[12px] sm:text-base font-bold">
          User
        </span>
        <span className="flex-1 w-[25%] text-[12px] sm:text-base font-bold">
          @
        </span>
        <span className="flex-1 w-[20%] text-[12px] sm:text-base font-bold">
          Amount
        </span>
        <span className="mr-4 w-[20%] text-end text-[12px] sm:text-base font-bold">
          Profit
        </span>
      </div>
      <div className="h-[86%] overflow-scroll mb-20">
        {players?.length > 0 ? (
          players.map((player, index) => (
            <Player
              key={index}
              username={player.username}
              name={player.email}
              amount={player.playing ? player.amountBetted : "-"}
              profit={
                player.winningColor
                  ? player.winningColor === player.colorSelected
                    ? `+${player.amountBetted}`
                    : `-${player.amountBetted}`
                  : "-"
              }
            />
          ))
        ) : (
          <span className="flex justify-center items-center font-sans font-medium text-white text-sm sm:text-base md:text-lg">
            No Online Players
          </span>
        )}
      </div>
      <div className="absolute bottom-0 flex rounded-sm justify-between items-center bg-[#AEADFA] p-1 sm:p-2 w-full">
        <div className="flex flex-col items-center basis-1/2">
          <span className="font-bold text-[10px] sm:text-base">ONLINE</span>
          <span>{online}</span>
        </div>
        <div className="flex flex-col items-center basis-1/2">
          <span className="font-bold text-[10px] sm:text-base">PLAYING</span>
          <span>{currentlyBetting}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayersContainer;
