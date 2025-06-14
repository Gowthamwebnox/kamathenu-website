import Header from "@/app/components/layout/Header";
import { Button } from "@/components/ui/button";

import React from "react";

const BecomeSeller = () => {
  return (
    <>
      <Header headerColor={["black", "white"]} />
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
        {/* why we sell three div */}
        <div className="flex gap-10 py-15 px-22">
          <div className="border-1 group border-gray-400 w-[33%] rounded-[4px]">
            <h1 className="ml-12 mt-13 text-[26px] font-semibold ">
              Earn Passive Income
            </h1>
            <h1 className="ml-12 mt-5 text-[20px] w-[75%] font-normal text-[#767676] ">
              Sell your plans globally 24/7, earn every time someone downloads.
            </h1>
            <div className="flex items-center gap-44">
              <div className="flex ml-12 mt-32 py-12 gap-4 items-center">
                <h1 className=" text-[21px] group-hover:text-[#D8A526]">VIEW MORE </h1>
                <img
                  src="/assets/kamathenu Images/toparrow.png"
                  alt="toparrow"
                  className="w-3 h-3 group-hover:fill-[#D8A526] group-hover:rotate-45 "
                />
              </div>
              <div className=" relative top-4 border-1  bg-black w-[22%] h-[115px] py-7 px-6  group-hover:bg-[#D8A526]">
                <img src="/assets/kamathenu Images/vector.png" alt="" className="  group-hover:brightness-0 " />
              </div>
            </div>
          </div>
          <div className="border-1 group border-gray-400 w-[33%] rounded-[4px]">
            <h1 className="ml-12 mt-13 text-[26px] font-semibold ">
              Reach a Wider Audience
            </h1>
            <h1 className="ml-12 mt-5 text-[20px] w-[80%] font-normal text-[#767676] ">
              Tap into builders, homeowners, and contractors looking for ready-made plans.
            </h1>
            <div className="flex items-center gap-44">
              <div className="flex ml-12 mt-32 py-12 gap-4 items-center">
                <h1 className=" text-[21px] group-hover:text-[#D8A526]">VIEW MORE </h1>
                <img
                  src="/assets/kamathenu Images/toparrow.png"
                  alt="toparrow"
                  className="w-3 h-3 group-hover:fill-[#D8A526] group-hover:rotate-45 "
                />
              </div>
              <div className=" relative top-4 border-1  bg-black w-[22%] h-[115px] py-7 px-6  group-hover:bg-[#D8A526]">
                <img src="/assets/kamathenu Images/vecto_2.png" alt="" className="  group-hover:brightness-0 " />
              </div>
            </div>
          </div>
          <div className="border-1 group border-gray-400 w-[33%] rounded-[4px]">
            <h1 className="ml-12 mt-13 text-[26px] font-semibold ">
              Earn Passive Income
            </h1>
            <h1 className="ml-12 mt-5 text-[20px] w-[90%] font-normal text-[#767676] ">
              Upload, price, and manage your designs—your way.
            </h1>
            <div className="flex items-center gap-44">
              <div className="flex ml-12 mt-38 py-12 gap-4 items-center">
                <h1 className=" text-[21px] group-hover:text-[#D8A526]">VIEW MORE </h1>
                <img
                  src="/assets/kamathenu Images/toparrow.png"
                  alt="toparrow"
                  className="w-3 h-3 group-hover:fill-[#D8A526] group-hover:rotate-45 "
                />
              </div>
              <div className=" relative top-9 border-1  bg-black w-[22%] h-[115px] py-7 px-6  group-hover:bg-[#D8A526]">
                <img src="/assets/kamathenu Images/vecto_3.png" alt="" className="  group-hover:brightness-0 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeSeller;
