import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { useKsh } from "./SelectedKshContext";
import { useAuth } from "./UserContext";

const BetContext = createContext({});

export const useBet = () => useContext(BetContext);

export const BetContextProvider = ({ children }) => {
  const { user } = useAuth();
  const { changeSelectedKsh } = useKsh();
  const [seletedColor, setSelectedColor] = useState("");
  const [winningColor, setWinningColor] = useState("");
  const [winningAmount, setWinningAmount] = useState();
  const [isBetPlaced, setIsBetPlaced] = useState(false);

  const [counter, setCounter] = useState(5);

  const placeBet = (value, colorSelected, uid) => {
    console.log(value);
    updateDoc(doc(db, "USERS", uid), {
      playing: true,
      amountBetted: value,
      colorSelected: colorSelected,
    })
      .then(() => {
        console.log("Betted");
        setSelectedColor(colorSelected);
        setIsBetPlaced(true);
        setCounter(5);
      })
      .catch((error) => {
        alert(error)
        console.log(error);
      });
  };

  useEffect(() => {
    try {
      if (user) {
        const unsub = onSnapshot(
          doc(db, "USERS", user.uid),
          (document) => {
            if (document.data()?.result) {
              const betHistoryData = {
                username: document.data().username,
                email: document.data().email,
                userid: document.data().userid,
                colorSelected: document.data().colorSelected,
                amountBetted: document.data().amountBetted,
                winningColor: document.data().winningColor,
                time: serverTimestamp(),
              };
              console.log(document.data().result);
              setWinningColor(document.data().winningColor);
              setWinningAmount(document.data().amountBetted);
              setTimeout(() => {
                updateDoc(doc(db, "USERS", user.uid), {
                  playing: deleteField(),
                  amountBetted: deleteField(),
                  winningColor: deleteField(),
                  colorSelected: deleteField(),
                  result: deleteField(),
                }).then(() => {
                  console.log("Bet removed");
                  addDoc(collection(db, "BetHistory"), {
                    ...betHistoryData,
                  })
                    .then(() => {
                      console.log("Bet history added");
                    })
                    .catch((err) => console.log(err));
                  setWinningColor("");
                  changeSelectedKsh("");
                });
              }, 5000);
            }
          },
          (error) => {
            console.log(error);
          }
        );
        return () => {
          unsub();
        };
      }
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  useEffect(() => {
    if (isBetPlaced) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      if (counter === 0) {
        clearTimeout(timer);
        setIsBetPlaced(false);
      }
    }
    // counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [isBetPlaced, counter]);

  return (
    <BetContext.Provider
      value={{
        placeBet,
        seletedColor,
        winningColor,
        winningAmount,
        isBetPlaced,
        setIsBetPlaced,
        counter,
      }}
    >
      {children}
    </BetContext.Provider>
  );
};
