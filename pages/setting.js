import React from "react";
import SettingsPage from "../components/SettingsPage/SettingsPage";
import Footer from "../components/Footer/Footer";

const setting = () => {
  return (
    <div className="p-3 bg-[#141a3a] h-screen overflow-hidden">
      <SettingsPage />
      <Footer />
    </div>
  );
};

export default setting;
