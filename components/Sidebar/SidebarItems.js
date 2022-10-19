import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarItems = ({
  url,
  text,
  selected,
  handleSelection,
  index,
  link,
}) => {
  console.log(selected);
  return (
    <Link href={`${link}`}>
      <div
        className={`${
          selected && "bg-[#AEADFA4D]"
        } flex w-32 mb-6 p-2 items-center space-x-2`}
        onClick={() => handleSelection(index)}
      >
        <div className="w-5 h-5">
          <Image
            src={url}
            alt="home"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>
        <span className="uppercase text-sm text-[#AEADFA]">{text}</span>
      </div>
    </Link>
  );
};

export default SidebarItems;
