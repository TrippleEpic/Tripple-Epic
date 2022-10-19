import { Backdrop, CircularProgress } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/UserContext";
import { db } from "../../firebase";
import SidebarItems from "./SidebarItems";

const Sidebar = ({ setShowSidebar }) => {
  const router = useRouter();
  const [selected, setSelected] = useState();
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  console.log(user);

  useEffect(() => {
    setSelected(JSON.parse(localStorage.getItem("currentTab")));
  }, []);
  const handleSelection = async (index) => {
    if (index === 7) {
      setLoading(true);
      updateDoc(doc(db, "USERS", user.uid), { status: "offline" }).then(() => {
        console.log("User updated");
      });
      router.replace("/");
      await logout();
      setSelected(0);
      localStorage.setItem("currentTab", JSON.stringify(0));
      setShowSidebar(false);
      setLoading(false);
    } else {
      setSelected(index);
      localStorage.setItem("currentTab", JSON.stringify(index));
      setShowSidebar(false);
    }
  };
  return (
    <div className="w-full h-screen p-3 flex flex-col bg-[#141A3A] z-10 transition-all duration-600 ease-in-out">
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="primary" />
        </Backdrop>
      )}
      <div className="flex w-full justify-center items-center space-x-4">
        <div className="w-10 h-10 object-contain">
          <Image
            src="/icons/logo.png"
            alt="logo"
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>
        <span className="font-semibold text-sm text-[#AEADFA]">
          Tripple Epic
        </span>
      </div>

      <div className="border-b-[1px] w-full mt-2 mb-8 border-b-[#38416b]" />

      <SidebarItems
        text="home"
        url="/icons/home.png"
        link="/"
        selected={selected === 0}
        handleSelection={handleSelection}
        index={0}
      />
      <SidebarItems
        text="cashier"
        link="/cashier"
        url="/icons/cashier.png"
        selected={selected === 1}
        handleSelection={handleSelection}
        index={1}
      />
      <SidebarItems
        text="affiliate"
        link="/affiliate"
        url="/icons/affiliate.png"
        selected={selected === 2}
        handleSelection={handleSelection}
        index={2}
      />
      <SidebarItems
        text="faq"
        link="/faq"
        url="/icons/faq.png"
        selected={selected === 3}
        handleSelection={handleSelection}
        index={3}
      />
      <SidebarItems
        text="mark"
        link="/account"
        url="/icons/person.png"
        selected={selected === 4}
        handleSelection={handleSelection}
        index={4}
      />
      <SidebarItems
        text="kes 0.80"
        link="/setting"
        url="/icons/dollar.png"
        selected={selected === 5}
        handleSelection={handleSelection}
        index={5}
      />
      <SidebarItems
        text="settings"
        link="/setting"
        url="/icons/settings.png"
        selected={selected === 6}
        handleSelection={handleSelection}
        index={6}
      />
      <SidebarItems
        text="logout"
        url="/icons/logout.png"
        link="/login"
        selected={selected === 7}
        handleSelection={handleSelection}
        index={7}
      />
    </div>
  );
};

export default Sidebar;
