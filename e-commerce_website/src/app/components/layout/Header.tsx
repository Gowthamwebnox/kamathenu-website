"use client";

import React, { useState, useEffect, use } from "react";
import kamathenuLogo from "../../../../public/assets/kamathenu Images/kamathenuLogo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import userData from "@/app/(main)/StateManagement/userData";

type HeaderProps = {
  headerColor?: [string, string]; // [backgroundColor, textColor]
};

export default function Header({ headerColor = ["none", "none"] }: HeaderProps) {
  useEffect(()=>{
    if(localStorage.getItem('jwtToken')!=null){
      setShowLogin(false)
      
    }
  },[])
  const currentUser=(userData.getState()as any).userData  
  // localStorage.setItem('currentUserId',(userData.getState() as any).userId)
  console.log("currentUser🔥🔥🔥🔥🔥🎊🎊🎊🎊🎊",currentUser)
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
    const routers=useRouter()
    const [showLogin,setShowLogin]=useState(true)
    

     const handleBecomeSellerPage=async()=>{
     routers.push('/becomeSeller')
  }
  const handleAboutPage=async()=>{
    routers.push('/about')
  }
  const handleHomePage=async()=>{
    routers.push('/')
  }
  const handleShopPlanPage=async()=>{
    routers.push('/shopPlan')
  }
  const handleContactPage=async()=>{
    routers.push('/contact')
  }
  const handleLogout=async()=>{
    localStorage.removeItem('jwtToken')
    setShowLogin(true)
    window.location.reload()
  }
  const handleAddCartPage=async()=>{
    routers.push('/addCart')
  }
  const handleWishlistPage=async()=>{
    routers.push('/wishlist')
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
      <div className=" flex items-center justify-between p-4">
        <div>
          <Image
            src={kamathenuLogo}
            alt="kamathenu logo"
            className="w-[73.73px] h-[53px]"
          />
        </div>
        <div className="hidden md:flex gap-[50px]">
          <h2 onClick={handleHomePage} className="cursor-pointer ">Home</h2>
          <h2 onClick={handleAboutPage} className="cursor-pointer ">About Us</h2>
            <h2 onClick={handleShopPlanPage} className="cursor-pointer ">Shop Plans</h2>
            <h2 onClick={handleContactPage} className="cursor-pointer ">Contact Us</h2>
            <h2 onClick={handleWishlistPage} className="cursor-pointer ">Wishlist</h2>
          <h2 onClick={handleBecomeSellerPage} className="cursor-pointer ">Become a Seller</h2>
        </div>
        <div className="flex items-center gap-2">
          {showLogin && <Button
            className="bg-white text-[#D8A526] border hover:bg-[#D8A526] hover:text-white"
            style={{ borderColor: "#D8A526" }}
          >
            Log in
          </Button>}
          {showLogin && <Button
            className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526]"
            style={{ borderColor: "#D8A526" }}
          >
            Sign in
          </Button>}
          {!showLogin && <h1 className="text-white font-bold text-lg">{currentUser}</h1>}
          {!showLogin && <Button
            className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526]"
            style={{ borderColor: "#D8A526" }} onClick={()=>handleLogout()}
          >
            Log out
          </Button>}
          <div className="w-[1px] h-9 bg-white opacity-50 mx-2"></div>
          <MdOutlineShoppingCart className="size-6 cursor-pointer" onClick={()=>handleAddCartPage()} />
        </div>
      </div>
    </header>
  );
}
