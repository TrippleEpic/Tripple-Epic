import React from "react";
import FaqItem from "./FaqItem";

const FaqPage = () => {
  return (
    <div className="w-full flex flex-col items-start p-10 bg-[#29325E]">

      <FaqItem question="HOW DO I PLAY TRIPPLE EPIC?" answer={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`} />
      <FaqItem question="HOW DO I PLAY TRIPPLE EPIC?" answer={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`} />
      <FaqItem question="HOW DO I PLAY TRIPPLE EPIC?" answer={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`} />
      <FaqItem question="HOW DO I PLAY TRIPPLE EPIC?" answer={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`} />
      
    </div>
  )
};

export default FaqPage;
