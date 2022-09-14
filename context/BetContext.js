import { createContext, useContext, useState } from "react";

const BetContext = createContext({});

export const useBet = () => useContext(BetContext);

export const BetContextProvider = ({ children }) => {
  const [betOn, setBetOn] = useState("");

  const placeBet = (value) => {
    console.log(value);
    setBetOn(value);
  };

  const findWinner = () => {
    if (betOn === "green") {
      return "You Won";
    } else {
      return "You lost";
    }
  };

  const emptyBet = () => {
    setBetOn();
  };

  return (
    <BetContext.Provider value={{ betOn, placeBet, findWinner, emptyBet }}>
      {children}
    </BetContext.Provider>
  );
};
