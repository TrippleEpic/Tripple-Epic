import React, { useState } from "react";
import { useBet } from "../../context/BetContext";

const Popup = (props) => {
  const { placeBet } = useBet();
  const closePopup = () => {
    props.setOpenPopup(false);
  };

  const placeOrder = (value) => {
    alert(`You have placed bet on item ` + value);
    placeBet(value);
    closePopup();
  };

  return props.open ? (
    <div className="w-full h-screen flex items-center justify-center fixed bg-[rgba(0,0,0,0.7)] left-0 top-0 z-10">
      <div className="relative p-10 w-full bg-[#29325E] flex justify-between">
        <div className="flex flex-[2] items-center justify-between mt-4">
          <button
            className="p-2 rounded w-24 bg-green-600 text-white text-sm font-normal"
            onClick={() => placeOrder("green")}
          >
            Green
          </button>
          <button
            className="p-2 rounded w-24 bg-red-600 text-white text-sm font-normal"
            onClick={() => placeOrder("red")}
          >
            Red
          </button>
          <button
            className="p-2 rounded w-24 bg-gray-600 text-white text-sm font-normal"
            onClick={() => placeOrder("Nnutral")}
          >
            Neutral
          </button>
        </div>

        <button
          onClick={closePopup}
          className="absolute top-0 right-4 text-sm text-black font-normal px-4 py-1 rounded mt-2 bg-[#7581BB]"
        >
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
