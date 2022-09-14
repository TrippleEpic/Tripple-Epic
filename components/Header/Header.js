import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../context/UserContext";
import HeaderTabs from "./HeaderTabs";

const Header = () => {
  const { user } = useAuth();
  const router = useRouter();

  const goToHome = () => {
    router.replace("/");
  };

  const goToLogin = () => {
    router.push("/login");
  };

  const goToSignup = () => {
    router.push("/signup");
  };
  return (
    <div className="flex items-center sm:p-1">
      <div className="grow flex items-center space-x-2 sm:space-x-4 ml-2 sm:ml-5">
        <div className="w-8 h-5 sm:h-8 mb-2">
          <Image
            onClick={goToHome}
            src="/icons/logo.png"
            alt="logo"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>

        <span className="text-[#BBBBBB] italic text-[10px] whitespace-nowrap sm:text-sm">
          Tripple Epic
        </span>
        <button className="w-12 p-px sm:w-24 bg-[#7581BB] rounded-sm sm:rounded-md border-[0.2px] sm:border border-solid border-[rgba(255, 255, 255, 0.4)] text-[7px] sm:text-sm text-[#141A3A] font-normal">
          Deposit
        </button>
        <div className="sm:mt-1 w-3 h-3 sm:w-4 sm:h-4 pb-5 sm:pb-0">
          <Image
            src="/icons/phone.png"
            alt="logo"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>
      </div>
      {user ? (
        <HeaderTabs />
      ) : (
        <div className="flex items-center space-x-2">
          <button
            onClick={goToLogin}
            className="w-12 p-px sm:w-24 sm:p-1 bg-[#7581BB] rounded-sm sm:rounded-md border-[0.2px] sm:border border-solid border-[rgba(255, 255, 255, 0.4)] text-[7px] sm:text-sm text-[#141A3A] font-normal"
          >
            Login
          </button>
          <button
            onClick={goToSignup}
            className="w-12 p-px sm:w-24 sm:p-1 bg-[#7581BB] rounded-sm sm:rounded-md border-[0.2px] sm:border border-solid border-[rgba(255, 255, 255, 0.4)] text-[7px] sm:text-sm text-[#141A3A] font-normal"
          >
            Register
          </button>
          <div className="sm:mt-1 sm:pb-0 pb-5 w-3 h-3 sm:w-5 sm:h-5">
            <Image
              src="/icons/settingsIcon.png"
              alt="logo"
              width="100%"
              height="100%"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
