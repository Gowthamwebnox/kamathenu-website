'use client'
import { useEffect } from "react";
import Hero from "./(main)/LandingSections/Hero";
import ShopwithConfidence from "./(main)/LandingSections/ShopwithConfidence";
import Header from "./components/layout/Header";
import userDataStore from "./(main)/StateManagement/userData";

export default function Home() {


  const { userData, setUserData, clearUserData } = userDataStore();

  // useEffect(() => {
  //   // Check if we're on the client side
  //   if (typeof window !== 'undefined') {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const userDataString = urlParams.get('user');
      
  //     if (userDataString) {
  //       try {
  //         const userData = JSON.parse(decodeURIComponent(userDataString));
  //         console.log("Parsed user data:", userData);
          
  //         setUserData({
  //           userId: userData.userId,
  //           userName: userData.userName,
  //           userEmail: userData.userEmail,
  //           token: userData.token || '',
  //           userRole: userData.userRole,
  //           sellerId: userData.userSellerProfile|| '',
  //         });
          
  //       } catch (error) {
  //         console.error("Error parsing user data:", error);
  //         console.log("Raw userDataString:", userDataString);
  //       }
  //     }
  //   }
  // }, []);

  return (
    <>
      <div className="relative">
        <Header />
        <Hero />
        <ShopwithConfidence />
      </div>
    </>
  );
}
