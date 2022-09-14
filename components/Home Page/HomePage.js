import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import Betting from "../Betting/Betting";
import Card from "../Card/Card";
import Divider from "../Divider/Divider";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Players from "../Players/Players";
import Popup from "../Popup/Popup";
import Tabs from "../Tabs/Tabs";

const HomePage = () => {
  return (
    <div className="bg-[#141a3a] overflow-scroll h-screen">
      {/* <div className="flex flex-col justify-center sm:justify-between items-center sm:space-x-2 sm:flex-row"> */}
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-2">
        <Betting />
        <Card />
      </div>
      <Advertisement />
      <Tabs />
      <Footer />
    </div>
  );
};

export default HomePage;
