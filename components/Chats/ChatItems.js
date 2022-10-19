import React from "react";

const ChatItems = ({ time, username, message }) => {
  return (
    <div className="flex flex-col mb-1">
      <div className="flex items-center space-x-3">
        <span className="text-gray-400 text-[10px] sm:text-xs md:text-base font-normal font-sans">
          {time}
        </span>
        <span className="text-gray-400 text-[10px] sm:text-xs md:text-base font-normal font-sans">
          {username}
        </span>
      </div>
      <span className="text-white whitespace-normal flex-grow text-[10px] sm:text-xs md:text-base font-normal font-sans">
        {message}
      </span>
    </div>
  );
};

export default ChatItems;
