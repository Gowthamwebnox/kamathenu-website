"use client";

import React, { useState, useEffect } from "react";
import kamathenuLogo from "../../../../public/assets/kamathenu Images/kamathenuLogo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

type HeaderProps = {
  headerColor?: [string, string]; // [backgroundColor, textColor]
};

export default function Header({ headerColor = ["none", "none"] }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
    const routers=useRouter()

     const handleBecomeSellerPage=async()=>{
     routers.push('/becomeSeller')
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

   
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  

  

  return (
    <header
      className={`transition-transform duration-500 ease-in-out w-full z-50 text-white backdrop-blur-md opacity-90 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        backgroundColor: headerColor[0],
        color: headerColor[1],
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div className="flex items-center justify-between p-4">
        <div>
          <Image
            src={kamathenuLogo}
            alt="kamathenu logo"
            className="w-[73.73px] h-[53px]"
          />
        </div>
        <div className="hidden md:flex gap-[50px]">
          <h2>Home</h2>
          <h2>About Us</h2>
          <h2>Shop Plans</h2>
          <h2>Gallery</h2>
          <h2>FAQs</h2>
          <h2>Contact Us</h2>
          <h2 onClick={handleBecomeSellerPage} className="cursor-pointer ">Become a Seller</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="bg-white text-[#D8A526] border hover:bg-[#D8A526] hover:text-white"
            style={{ borderColor: "#D8A526" }}
          >
            Log in
          </Button>
          <Button
            className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526]"
            style={{ borderColor: "#D8A526" }}
          >
            Sign in
          </Button>
          <div className="w-[1px] h-9 bg-white opacity-50 mx-2"></div>
          <MdOutlineShoppingCart className="size-6" />
        </div>
      </div>
    </header>
  );
}
