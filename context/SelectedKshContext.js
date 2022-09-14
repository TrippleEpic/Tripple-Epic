import { createContext, useContext, useState } from "react";

const KshContext = createContext({});

export const useKsh = () => useContext(KshContext);

export const KshContextProvider = ({ children }) => {
  const [selectedKsh, setSelectedKsh] = useState("");

  const changeSelectedKsh = (value) => {
    console.log(value);
    setSelectedKsh(value);
  };

  return (
    <KshContext.Provider value={{ selectedKsh, changeSelectedKsh }}>
      {children}
    </KshContext.Provider>
  );
};
