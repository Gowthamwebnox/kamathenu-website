"use client";

import React, { useState, useEffect } from "react";
import kamathenuLogo from "../../../../public/assets/kamathenu Images/kamathenuLogo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";
import userData from "@/app/(main)/StateManagement/userData";
import { FaUser } from "react-icons/fa6";
import axiosInstance from "@/app/utils/axiosInstance";
import { toast } from "sonner";

type HeaderProps = {
  headerColor?: [string, string]; // [backgroundColor, textColor]
};

interface UserResponse {
  id: string;
  email: string;
  password: string;
  hasedPassword: string;
  profile: string | null;
  firstName: string;
  lastName: string;
  number: string;
  name: string;
  roleId: string;
  image: string | null;
  isEmailVerified: boolean;
  emailVerifiedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function Header({ headerColor = ["none", "none"] }: HeaderProps) {

  const [user, setUser] = useState<UserResponse | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  
  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      const storedUserId = localStorage?.getItem('currentUserId')
      setUserId(storedUserId)
      
      if (localStorage.getItem('jwtToken') != null) {
        fetchUser(storedUserId)
      }
    }
  }, [])
  
  const fetchUser = async (currentUserId: string | null) => {
    if (!currentUserId) return
    const response = await axiosInstance.get<UserResponse>(`auth/fetchUser/${currentUserId}`)
    setUser(response.data)
    console.log(response)
  }
  
  const currentUser = (userData.getState() as any).userData
  // Only set localStorage on client side
  if (typeof window !== 'undefined') {
    localStorage.setItem('currentUserId', (userData.getState() as any).userId)
  }

  console.log("currentUser🔥🔥🔥🔥🔥🎊🎊🎊🎊🎊", currentUser)
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const [getUserData, setUserData] = useState<any>()
  // const [showUserName, setShowUserName] = useState(false)

  const routers = useRouter()
  // const [showLogin, setShowLogin] = useState(true)
  
  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    if (typeof window !== 'undefined') {
      const userId = localStorage.getItem('currentUserId')
      if (userId) {
        const response: any = await axiosInstance.get(`auth/fetchUser/${userId}`)
        console.log("🔥🔥🔥🔥🔥🔥response🔥🔥🔥🔥🔥🔥", response)
        // setUserData(response.data)
        // setShowUserName(true)
      }
    }
  }
  const handleBecomeSellerPage = async () => {
    routers.push('/becomeSeller')
  }
  const handleAboutPage = async () => {
    routers.push('/about')
  }
  const handleHomePage = async () => {
    routers.push('/')
  }
  const handleShopPlanPage = async () => {
    routers.push('/shopPlan')
  }
  const handleContactPage = async () => {
    routers.push('/contact')
  }

  const handleAddCartPage = async () => {
    routers.push('/addCart')
  }
  const handleWishlistPage = async () => {
    if(localStorage.getItem('jwtToken')!==null){
      routers.push('/wishlist')
    }
    else{
      toast.error("Please login to access wishlist")
    }
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

  const handleUserProfile = () => {
    routers.push('/userProfile')
  }
  return (
    <header
      className={`transition-transform duration-500 ease-in-out w-full z-50 text-white backdrop-blur-md opacity-90 ${showHeader ? "translate-y-0" : "-translate-y-full"
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
          {/* {showLogin && <Button
            className="bg-white text-[#D8A526] border hover:bg-[#D8A526] hover:text-white"
            style={{ borderColor: "#D8A526" }}
          >
            Log in
          </Button>}
          {showLogin && <Button
            className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526]"
            style={{ borderColor: "#D8A526" }}>
            Sign in
          </Button>}
          {!showLogin && <h1 className="text-white font-bold text-lg">{currentUser}</h1>}
          {!showLogin && <Button
            className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526]"
            style={{ borderColor: "#D8A526" }} onClick={()=>handleLogout()}
          >
            Log out
          </Button>} */}
          {/* Toshow the userName */}
          {/* {userId!==null?getUserData?.name:'UserProfile'} */}
          <div className="flex items-center gap-2">
            <div onClick={handleUserProfile}>
              <FaUser size={25} className="cursor-pointer" />
            </div>
            <div>
              {typeof window !== 'undefined' && localStorage.getItem("jwtToken") !== null && user && user?.firstName
                ? user.firstName
                : "Account"}
            </div>
          </div>
          <div className="w-[1px] h-9 bg-white opacity-50 mx-2"></div>
          <MdOutlineShoppingCart className="size-6 cursor-pointer" onClick={handleAddCartPage} />
        </div>
      </div>
    </header>
  );
}
