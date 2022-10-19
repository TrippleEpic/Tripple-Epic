import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/UserContext";
import { db } from "../../firebase";

const BetHistory = () => {
  const { user } = useAuth();
  const [betHistory, setBetHistory] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "BetHistory"), orderBy("time")),
      (querySnapshot) => {
        const betPlayers = [];
        querySnapshot.docs.forEach((doc) => {
          if (doc.data()) {
            betPlayers.push({
              username: doc.data().username,
              email: doc.data().email,
              userid: doc.data().userid,
              colorSelected: doc.data().colorSelected,
              amountBetted: doc.data().amountBetted,
              winningColor: doc.data().winningColor,
            });
          }
        });
        setBetHistory(betPlayers);
      }
    );

    return () => unsubscribe();
  }, []);
  return (
    <>
      {user ? (
        <div className="z-10 rounded-sm relative bg-[#29325e]">
          <div className="flex items-center w-full bg-[#AEADFA] rounded-sm p-2">
            <span className="font-sans w-[30%] truncate font-bold text-black text-xs sm:text-sm md:text-base">
              Win Color
            </span>
            <span className="font-sans w-[30%] pl-5 truncate font-bold text-black text-xs sm:text-sm md:text-base">
              @
            </span>
            <span className="font-sans w-[20%] truncate text-center font-bold text-black text-xs sm:text-sm md:text-base">
              Amount
            </span>
            <span className="font-sans w-[20%] text-end truncate font-bold text-black text-xs sm:text-sm md:text-base">
              Profit
            </span>
          </div>
          <div className="relative max-h-[400px] overflow-scroll">
            {betHistory.length > 0 ? (
              betHistory.map((history, index) => (
                <div
                  key={index}
                  className="border flex items-center border-[#666c8b] w-full p-2"
                >
                  <span className="font-sans w-[30%] pl-5 font-light truncate text-white text-xs sm:text-sm">
                    {history.winningColor}
                  </span>
                  <span className="font-sans w-[30%] md:mr-8 font-light truncate text-white text-xs sm:text-sm">
                    {history.username}
                  </span>
                  <span className="font-sans w-[20%] text-center pl-4 font-light truncate text-white text-xs sm:text-sm">
                    {history.amountBetted}
                  </span>
                  <span className="font-sans w-[20%] mr-2 text-end font-light truncate text-white text-xs sm:text-sm">
                    {history.winningColor === history.colorSelected
                      ? `+${history.amountBetted}`
                      : `-${history.amountBetted}`}
                  </span>
                </div>
              ))
            ) : (
              <span className="w-full h-full mt-5 flex p-4 items-center justify-center text-white text-sm sm:text-base md:text-lg font-semibold font-sans">
                No Betting History Available
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="z-10 relative bg-[#29325e] p-4 px-4">
          <span className="w-full h-full flex justify-center items-center text-white text-sm sm:text-base md:text-lg font-semibold font-sans">
            You have to be logged in to access History
          </span>
        </div>
      )}
    </>
  );
};

export default BetHistory;
