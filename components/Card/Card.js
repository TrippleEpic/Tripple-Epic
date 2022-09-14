import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../context/UserContext";
import { useKsh } from "../../context/SelectedKshContext";
import Popup from "../Popup/Popup";
import { useBet } from "../../context/BetContext";

const Card = () => {
  const { user } = useAuth();
  const { selectedKsh } = useKsh();
  const { betOn, findWinner, emptyBet } = useBet();
  const router = useRouter();

  const [openPopup, setOpenPopup] = React.useState(false);
  const [result, setResult] = React.useState("");
  const goToLogin = () => {
    router.push("/login");
  };

  const goToSignup = () => {
    router.push("/signup");
  };

  const handlePopupOpen = () => {
    setOpenPopup(true);
  };

  if (betOn?.length > 0) {
    setTimeout(() => {
      setResult(findWinner);
      emptyBet();
    }, 5000);
  }

  return (
    <div className="w-full bg-[#29325E] mt-4">
      <Popup open={openPopup} setOpenPopup={setOpenPopup}></Popup>
      {user ? (
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="flex items-center justify-between space-x-3 mx-8">
            <div className="flex flex-col items-start">
              <span className="font-normal text-[12px] text-white uppercase">
                Amout
              </span>
              <input
                value={selectedKsh}
                onChange={() => {}}
                className="rounded-lg p-1 text-sm text-white h-10 bg-inherit outline-none w-full border-solid border border-[#52587c]"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-normal whitespace-nowrap text-[12px] text-white uppercase">
                Auto Cashout (X)
              </span>
              <input
                className="rounded-lg p-1 text-sm text-white h-10 bg-inherit outline-none w-full border-solid border border-[#52587c]"
                type="number"
              />
            </div>
          </div>
          <button
            onClick={handlePopupOpen}
            className="mt-8 w-56 px-4 py-2 rounded-lg bg-[#7581BB] text-sm sm:text-base text-black font-medium tracking-[0.16em]"
          >
            BET
          </button>
          <div className="flex w-56 items-center justify-between mt-4">
            <div className="flex flex-col items-start">
              <span className="text-xs text-[#7581BB] font-normal ">
                Total Profit
              </span>
              <span className="text-xs text-[#7581BB] font-normal ">???</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs text-[#7581BB] font-normal ">
                Win Chance
              </span>
              <span className="text-xs text-[#7581BB] font-normal ">???</span>
            </div>
          </div>
          <div
            className={`${
              betOn?.length > 0 ? "inline-block" : "hidden"
            } text-gray-400 text-xs font-normal mt-2`}
          >
            {`You have placed a bet on ${betOn}`}
          </div>
          <div
            className={`${
              result?.length > 0 ? "inline-block" : "hidden"
            } text-gray-400 text-xs font-normal mt-2`}
          >
            {`${result}`}
          </div>
        </div>
      ) : (
        <>
          <div className="text-center">
            <Image
              src="/icons/parabola.png"
              alt="parabola"
              layout="responsive"
              width="100%"
              height="30px"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="flex space-x-1 items-center">
              <span
                onClick={goToLogin}
                className="font-semibold text-green-500 text-lg hover:cursor-pointer"
              >
                Login
              </span>
              <span className="font-semibold text-white text-lg">or</span>
              <span
                onClick={goToSignup}
                className="font-semibold text-green-500 text-lg hover:cursor-pointer"
              >
                Register
              </span>
            </span>

            <span className="font-semibold text-white text-lg">
              to Start Playing
            </span>
            <span className="font-black text-white text-lg">Tripple Epic</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
