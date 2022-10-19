import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/UserContext";
import { useKsh } from "../../context/SelectedKshContext";
import Popup from "../Popup/Popup";
import { useBet } from "../../context/BetContext";
import { deleteField, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Card = () => {
  const { user } = useAuth();
  const { selectedKsh, changeSelectedKsh } = useKsh();
  const { betOn } = useBet();
  const router = useRouter();

  const [disable, setDisable] = useState(false);

  const [openPopup, setOpenPopup] = React.useState(false);
  const [result, setResult] = React.useState("");

  const [error, setError] = useState(false);
  const goToLogin = () => {
    router.push("/login");
  };

  const goToSignup = () => {
    router.push("/signup");
  };

  const handlePopupOpen = () => {
    console.log("IM");
    if (validate()) {
      setOpenPopup(true);
    }
    console.log(error);
  };

  const validate = () => {
    console.log("IMh");
    console.log(selectedKsh);
    if (selectedKsh > 0) {
      setError(false);
      return true;
    } else {
      setError(true);
      return false;
    }
  };
  useEffect(() => {
    try {
      const unsub = onSnapshot(
        doc(db, "USERS", user.uid),
        (document) => {
          setDisable(document.data()?.playing);
        },
        (error) => {
          console.log(error);
        }
      );
      return () => {
        unsub();
      };
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  return (
    <div className="w-full bg-[#29325E]">
      <Popup open={openPopup} setOpenPopup={setOpenPopup}></Popup>
      {user ? (
        <div className="flex flex-col items-center justify-center h-full p-6">
          <div className="flex items-center justify-between space-x-3 mx-8">
            <div className="flex flex-col items-start">
              <span className="font-normal text-[12px] text-white uppercase">
                Amout
              </span>
              <input
                value={selectedKsh}
                onChange={() => changeSelectedKsh("")}
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
          <div className="h-5">
            {error && (
              <span className="text-[10px] sm:text[12px] md:text-base text-[#F55959]">
                Please select a box to place a bet
              </span>
            )}
          </div>
          <button
            onClick={handlePopupOpen}
            disabled={disable}
            className={`${disable ? "bg-[#3d4670] text-gray-800" : "bg-[#7581BB] text-black"} mt-8 w-56 px-4 py-2 rounded-lg text-sm sm:text-base font-medium tracking-[0.16em]`}
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
                className="font-semibold text-green-500 text-sm sm:text-base md:text-lg hover:cursor-pointer"
              >
                Login
              </span>
              <span className="font-semibold text-white text-sm sm:text-base md:text-lg">
                or
              </span>
              <span
                onClick={goToSignup}
                className="font-semibold text-green-500 text-sm sm:text-base md:text-lg hover:cursor-pointer"
              >
                Register
              </span>
            </span>

            <span className="font-semibold text-white ttext-sm sm:text-base md:text-lg">
              to Start Playing
            </span>
            <span className="font-black text-white text-sm sm:text-base md:text-lg mb-5">
              Tripple Epic
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
