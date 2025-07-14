'use client'
import { useEffect } from "react";
import Hero from "./(main)/LandingSections/Hero";
import ShopwithConfidence from "./(main)/LandingSections/ShopwithConfidence";
import Header from "./components/layout/Header";

export default function Home() {
 
    useEffect(() => {
      // Check if we're on the client side
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
          localStorage.setItem('jwtToken', token);
          console.log("Token stored: ", token);
          // You can also navigate to your dashboard here if needed
        }
      }
    }, []);
  
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
