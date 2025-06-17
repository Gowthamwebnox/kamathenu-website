"use client";

import React from "react";
import { Button } from "@/components/ui/button";


const BecomeSellerHero = () => {
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
              "url('/assets/kamathenu Images/BecomeSellereLand_bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Foreground content */}
        <div className="relative  flex flex-col justify-center items-start py-[240px] h-[853px] px-20 text-white">
          <h1 className="text-[44px] font-semibold ml-[24%] text-[#EFBB39]">
            Share Your Designs. Get Paid. Inspire Builders.
          </h1>

          <p className="mt-4 text-[25px] font-light w-[43%] ml-[30%]">
            Join our marketplace and monetize your floor plans, elevations,{" "}
            <span className="ml-41">and full construction drawings.</span>
          </p>
          <div className="ml-[45%] mt-9">
            <Button
              className="bg-[#D8A526] text-black text-[19px] p-6 border hover:bg-white hover:text-[#D8A526] "
              style={{ borderColor: "#D8A526" }}
            >
              Start Selling
            </Button>
          </div>

          {/* Example of tabs + search bar like in image */}
        </div>

        {/* why sell with us */}
        <div className="">
          <h1 className=" w-full text-[38px] text-center font-semibold  ">
            {" "}
            Why Sell With Us
          </h1>
          <div className="border border-t-1 border-black w-[8%]  ml-[46%] mt-3"></div>
        </div>
    
      </div>
    </>
  );
};

export default BecomeSellerHero;
