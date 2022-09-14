import React from "react";

const FaqItem = ({ question, answer }) => {
  return (
    <>
      <span className="font-bold text-white text-xs mt-5 sm:text-xl">
        {question}
      </span>
      <span className="text-white font-extralight sm:w-[500px] text-[8px] sm:text-base mt-2">
        {answer}
      </span>
    </>
  );
};

export default FaqItem;
