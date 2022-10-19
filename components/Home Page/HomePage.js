import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import Betting from "../Betting/Betting";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Tabs from "../Tabs/Tabs";

const HomePage = () => {
  return (
    <div className="bg-[#141a3a] overflow-scroll h-full p-3">
      <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-1 sm:gap-2 mt-4 ">
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
