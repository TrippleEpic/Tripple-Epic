import Image from "next/image";
import React from "react";

const Bonus = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 p-4 w-full">
      <div className="w-44 h-36 sm:h-44 text-center">
        <Image
          src="/images/emoji.png"
          alt="emoji"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </div>

      <span className="text-base text-white font-normal sm:mb-5">
        Record Not Found
      </span>
    </div>
  );
};

export default Bonus;
