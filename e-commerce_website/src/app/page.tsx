'use client'
import { useEffect } from "react";
import Hero from "./(main)/sections/Hero";
import ShopwithConfidence from "./(main)/sections/ShopwithConfidence";
import Header from "./components/layout/Header";

export default function Home() {
  if (typeof window !== 'undefined') {
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      if (token) {
        localStorage.setItem('jwtToken', token);
        console.log("Token stored: ", token);
        // You can also navigate to your dashboard here if needed
      }
    }, []);
  }
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
