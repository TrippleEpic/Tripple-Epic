import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const HeaderTabs = () => {
  const [selected, setSelected] = useState();

  const handleSelection = (index) => {
    setSelected(index);
  };
  return (
    <div className="hidden sm:flex sm:items-center space-x-1 sm:space-x-3 md:space-x-4 lg:space-x-8">
      <span
        onClick={() => handleSelection(1)}
        className={`${
          selected === 1 ? "text-[#7581BB]" : "text-white"
        } text-[9px] leading-[11px] md:text-[14px] md:leading-[20px] font-medium uppercase hover:cursor-pointer`}
      >
        <Link href="/cashier">Cashier</Link>
      </span>
      <span
        onClick={() => handleSelection(2)}
        className={`${
          selected === 2 ? "text-[#7581BB]" : "text-white"
        }  text-[9px] leading-[11px] md:text-[14px] whitespace-nowrap md:leading-[20px] font-medium uppercase hover:cursor-pointer`}
      >
        <Link href="/affiliate">Affiliate Program</Link>
      </span>
      <span
        onClick={() => handleSelection(3)}
        className={`${
          selected === 3 ? "text-[#7581BB]" : "text-white"
        }  text-[8px] md:text-[14px] md:leading-[20px] font-medium uppercase hover:cursor-pointer`}
      >
        <Link href="/faq">Faq</Link>
      </span>
      <span
        onClick={() => handleSelection(4)}
        className={`${
          selected === 4 ? "text-[#7581BB]" : "text-white"
        }  text-[8px] md:text-[14px] md:leading-[20px] font-medium uppercase hover:cursor-pointer`}
      >
        <Link href="/account">mark</Link>
      </span>
      <span
        onClick={() => handleSelection(5)}
        className={`${
          selected === 5 ? "text-[#7581BB]" : "text-white"
        }  text-[8px] md:text-[14px] md:leading-[20px] font-medium uppercase hover:cursor-pointer`}
      >
        Kes 0.80
      </span>
      <div className="mt-1">
        <Image
          src="/icons/settingsIcon.png"
          alt="logo"
          width="20px"
          height="20px"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default HeaderTabs;
