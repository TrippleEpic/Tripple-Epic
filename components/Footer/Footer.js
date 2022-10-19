import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAuth } from "../../context/UserContext";
import HeaderTabs from "../Header/HeaderTabs";

const Footer = () => {
  const { user } = useAuth();
  return (
    <div className="relative bg-[#29325E] p-2 sm:p-4 mt-2">
      <div className="flex justify-between">
        <div className="w-24 sm:w-56">
          <div className="w-10 h-8 sm:w-14 sm:h-10 mb-4">
            <Image
              src="/icons/logo.png"
              alt="LOGO"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
          <span className="text-white font-normal text-[8px] sm:text-[12px] md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>

        {user && (
          <div className="flex flex-col items-center mt-4">
            <span
              className={`text-white text-[8px] sm:text-[12px] md:text-base mb-5 uppercase hover:cursor-pointer`}
            >
              <Link href="/cashier">Cashier</Link>
            </span>
            <span
              className={`text-white text-[8px] sm:text-[12px] md:text-base mb-5 uppercase hover:cursor-pointer`}
            >
              <Link href="/affiliate">Affiliate Program</Link>
            </span>
            <span
              className={`text-white text-[8px] sm:text-[12px] md:text-base mb-5 uppercase hover:cursor-pointer`}
            >
              <Link href="/faq">Faq</Link>
            </span>
            <span
              className={`text-white text-[8px] sm:text-[12px] md:text-base mb-5 uppercase hover:cursor-pointer`}
            >
              <Link href="/account">mark</Link>
            </span>
            <span
              className={`text-white text-[8px] sm:text-[12px] md:text-base uppercase hover:cursor-pointer`}
            >
              Kes 0.80
            </span>
          </div>
        )}

        <div className="flex items-center justify-start h-full mt-6 space-x-2">
          <button className="w-10 sm:w-20 p-px py-1 bg-inherit rounded-sm sm:rounded-md border border-solid border-[rgba(255, 255, 255, 0.4)] text-[7px] sm:text-xs text-white font-normal">
            Login
          </button>
          <button className="w-10 sm:w-20 p-px py-1 bg-inherit rounded-sm sm:rounded-md border border-solid border-[rgba(255, 255, 255, 0.4)] text-[7px] sm:text-xs text-white font-normal">
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
