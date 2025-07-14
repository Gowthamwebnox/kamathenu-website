"use client";

import React from "react";
import { Button } from "@/components/ui/button";

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
              "url('/assets/kamathenu Images/ShopPlan/shopPlanLandingPage.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="text-center relative top-[40%]">
            <h2 className="text-[30px] font-normal text-white">Shop plans</h2>
            <h1 className="text-[45px] font-bold text-[#EFBB39]">Find Your Dream House Plan Today</h1>
            <Button className="bg-white text-black text-[29px] px-10 font-normal py-7 rounded-[8px] mt-8">Explore plans</Button>
        </div>


        
    
      </div>
    </>
  );
};

export default AboutHero;
