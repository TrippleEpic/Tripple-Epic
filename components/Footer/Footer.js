import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-[#29325E] p-3 mt-3 h-[250px]">
      <div className="w-10 h-8 sm:w-14 sm:h-10">
        <Image
          src="/icons/logo.png"
          alt="LOGO"
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </div>
      {/* <span className="text-white font-normal text-sm">LOGO</span> */}
      <div className="flex items-center justify-between mt-4">
        <div className="w-[200px]">
          <span className="text-white font-normal text-[9px] sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button className="w-10 sm:w-20 p-px py-1 bg-inherit rounded-sm sm:rounded-md border border-solid border-[rgba(255, 255, 255, 0.4)] text-[7px] sm:text-[8px] text-white font-normal">
            Login
          </button>
          <button className="w-10 sm:w-20 p-px py-1 bg-inherit rounded-sm sm:rounded-md border border-solid border-[rgba(255, 255, 255, 0.4)] text-[7px] sm:text-[8px] text-white font-normal">
            Register
          </button>
          <div className="hidden sm:inline-block mt-1">
            <Image
              src="/icons/settingsIcon.png"
              alt="logo"
              width="20px"
              height="20px"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-2">
        <div className="flex w-10 h-5 items-center justify-between">
          <Image
            src="/icons/facebookIcon.png"
            alt="logo"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/icons/facebookIcon.png"
            alt="logo"
            width="100%"
            height="100%"
            objectFit="contain"
          />
          <Image
            src="/icons/facebookIcon.png"
            alt="logo"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>
        <span className="text-white font-normal text-[7px] sm:text-sm">
          @copyright reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
