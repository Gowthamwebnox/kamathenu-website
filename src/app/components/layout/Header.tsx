"use client";

import React, { useState, useEffect } from "react";
import kamathenuLogo from "../../../../public/assets/kamathenu Images/kamathenuLogo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Menu, X } from "lucide-react";
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

export default function Header({ headerColor = ["", ""] }: HeaderProps) {

  const [user, setUser] = useState<UserResponse | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
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
  }

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [getUserData,setUserData]=useState({
    userId:null,
    userName:null,
    userEmail:null,
    userRole:null,
    token:null
  })
  // const [getUserData, setUserData] = useState<any>()
  // const [showUserName, setShowUserName] = useState(false)

  const routers = useRouter()
  // const [showLogin, setShowLogin] = useState(true)
  
  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    // Check if we're on the client side before accessing localStorage
    if (typeof window !== 'undefined') {
      var getLoaclData=localStorage.getItem('userData-storage')
      getLoaclData=JSON.parse(getLoaclData || '{}')
      console.log("🔥🔥🔥🔥🔥🔥getLoaclData🔥🔥🔥🔥🔥🔥", getLoaclData)
        setUserData({
          userId:getLoaclData?.state?.userData?.userId,
          userName:getLoaclData?.state?.userData?.userName,
          userEmail:getLoaclData?.state?.userData?.userEmail,
          userRole:getLoaclData?.state?.userData?.userRole,
          token:getLoaclData?.state?.userData?.token
        })

      const userId = getLoaclData?.state?.userData?.userId
      if (userId) {
        const response: any = await axiosInstance.get(`auth/fetchUser/${userId}`)
        console.log("🔥🔥🔥🔥🔥🔥response🔥🔥🔥🔥🔥🔥", response)
        // setUserData(response.data)
        // setShowUserName(true)
      }
    }
  }
  console.log("🔥🔥🔥🔥🔥🔥getUserData🔥🔥🔥🔥🔥🔥", getUserData)
  const handleBecomeSellerPage = async (userRole:string | null) => {
    if(userRole == "SELLER"){ 
      routers.push('/seller')
    }
    else{
      routers.push('/becomeSeller')
    }
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
    if(getUserData.token){
      console.log("getUserData",getUserData)
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
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
      <div className="flex items-center justify-between p-4">
        <div>
          <Image
            src={kamathenuLogo}
            alt="kamathenu logo"
            className="w-[73.73px] h-[53px]"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-[50px]">
          <h2 onClick={handleHomePage} className="cursor-pointer hover:opacity-80 transition-opacity">Home</h2>
          <h2 onClick={handleAboutPage} className="cursor-pointer hover:opacity-80 transition-opacity">About Us</h2>
          <h2 onClick={handleShopPlanPage} className="cursor-pointer hover:opacity-80 transition-opacity">Shop Plans</h2>
          <h2 onClick={handleContactPage} className="cursor-pointer hover:opacity-80 transition-opacity">Contact Us</h2>
          <h2 onClick={handleWishlistPage} className="cursor-pointer hover:opacity-80 transition-opacity">Wishlist</h2>
          <h2 onClick={()=>handleBecomeSellerPage(getUserData.userRole)} className="cursor-pointer hover:opacity-80 transition-opacity">{
                getUserData.userRole == "SELLER" ? "Seller Dashboard" : "Become a Seller"
              }</h2>
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div onClick={handleUserProfile}>
              <FaUser size={25} className="cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
            <div className="hidden sm:block">
            {typeof window !== 'undefined' && getUserData.token !== null ? getUserData.userName : "Account"}
            </div>
          </div>
          <div className="w-[1px] h-9 bg-white opacity-50 mx-2 hidden sm:block"></div>
          <MdOutlineShoppingCart className="size-6 cursor-pointer hover:opacity-80 transition-opacity" onClick={handleAddCartPage} />
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden  backdrop-blur-sm border-t border-white/20">
          <div className="px-4 py-6 space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-white/20">
              <FaUser size={20} />
              <span className="font-bold">
                {typeof window !== 'undefined' && getUserData.token !== null ? getUserData.userName : "Account"}
              </span>
            </div>
            
            <div className="space-y-3">
              <div 
                onClick={() => { handleHomePage(); closeMobileMenu(); }}
                className="cursor-pointer py-2 hover:bg-white/10 rounded-md px-2 transition-colors font-bold  "
                style={{
                  
                  color: headerColor[1] || "black",
                }}
              >
                Home
              </div>
              <div 
                onClick={() => { handleAboutPage(); closeMobileMenu(); }}
                className="cursor-pointer py-2 hover:bg-white/10 rounded-md px-2 transition-colors font-bold"
                style={{
                  
                  color: headerColor[1] || "black",
                }}
              >
                About Us
              </div>
              <div 
                onClick={() => { handleShopPlanPage(); closeMobileMenu(); }}
                className="cursor-pointer py-2 hover:bg-white/10 rounded-md px-2 transition-colors font-bold "
                style={{
                  
                  color: headerColor[1] || "black",
                }}
              >
                Shop Plans
              </div>
              <div 
                onClick={() => { handleContactPage(); closeMobileMenu(); }}
                className="cursor-pointer py-2 hover:bg-white/10 rounded-md px-2 transition-colors font-bold "
                style={{
                  
                  color: headerColor[1] || "black",
                }}
              >
                Contact Us
              </div>
              <div 
                onClick={() => { handleWishlistPage(); closeMobileMenu(); }}
                className="cursor-pointer py-2 hover:bg-white/10 rounded-md px-2 transition-colors font-bold "
                style={{
                  
                  color: headerColor[1] || "black",
                }}
              >
                Wishlist
              </div>
              <div 
                onClick={() => { ()=>handleBecomeSellerPage(getUserData.userRole); closeMobileMenu(); }}
                className="cursor-pointer py-2 hover:bg-white/10 rounded-md px-2 transition-colors font-bold"
                style={{
                  
                  color: headerColor[1] || "black",
                }}  
              >{
                getUserData.userRole == "SELLER" ? "Seller Dashboard" : "Become a Seller"
              }
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
