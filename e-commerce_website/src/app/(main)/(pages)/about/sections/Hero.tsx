"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import fad from '../../../../../../public/assets/kamathenu Images/About/HeroLanding_Imag.png'

const AboutHero = () => {
  // const [activeTab, setActiveTab] = useState("overview");
  // const tabItems = [
  //   {
  //     id: "overview",
  //     title: "Overview",
  //     content: "This is the Overview content.",
  //   },
  //   { id: "features", title: "Features", content: "Here are the Features." },
  //   {
  //     id: "specs",
  //     title: "Specifications",
  //     content: "These are the Specifications.",
  //   },
  // ];
  return (
    <>
      
      <div className="md:relative top-0 w-[100%] h-[795px]  ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/kamathenu Images/About/HeroLanding_Imag.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="text-center relative top-1/2">
            <h2 className="text-[33px] font-semibold text-white">About Us</h2>
            <h1 className="text-[48px] font-semibold text-[#EFBB39]">Your Dream Home Starts Here</h1>
        </div>

        
    
      </div>
    </>
  );
};

export default AboutHero;
