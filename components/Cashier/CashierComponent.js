import React from "react";
import Footer from "../Footer/Footer";
import Wallet from "./Wallet";

const CashierComponent = () => {
  return (
    <div className="p-3">
      <Wallet />
      <Footer />
    </div>
  );
};

export default CashierComponent;
