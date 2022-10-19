import React from "react";
import FaqPage from "../components/FaqPage/FaqPage";
import Footer from "../components/Footer/Footer";

const faq = () => {
  return (
    <div className="p-3 bg-[#141a3a] h-screen overflow-scroll">
      <FaqPage />
      <Footer />
    </div>
  );
};

export default faq;
