import React from "react";
import securelogo_1 from "../../../../public/assets/kamathenu Images/shopWithConfidence/secureTop.png";
import securelogo_2 from "../../../../public/assets/kamathenu Images//Categories/Home/Home_1.png";
import logo from "../../../../public/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png";
import { Button } from "@/components/ui/button";
import Design from "./Design";
import FeaturePlan from "./FeaturePlan";
import Footer from "@/app/components/layout/Footer";

export default function ShopwithConfidence() {
  return (
    <div className="mt-12">
      <div className="mt-24 f-full flex gap-[53px] mx-15">
        <div className="w-[500px] h-[124px] p-8 border-0 bg-[#FFFAEF] flex items-center gap-7 rounded-[9px]">
          <div>
            <img
              src="/assets/kamathenu Images/shopWithConfidence/secureTop.png"
              alt="securelogo_1"
              className="w-[73.87px] h-[36.89]"
            />
            <img
              src="/assets/kamathenu Images/shopWithConfidence/secureLow.png"
              alt="securelogo_1"
              className="w-[71.84px] h-[24.31]"
            />
          </div>
          <div>
            <h1 className="text-[19px] font-semibold">Secure Payment</h1>
            <p className="text-[16px] text-gray-400 font-normal mt-2 text-[17px]">
              Safe and encrypted transactions for worry-free checkout.
            </p>
          </div>
        </div>
        <div className="w-[500px] h-[124px] p-8 border-0 bg-[#FFFAEF] flex items-center gap-7 rounded-[9px]">
          <div>
            <img
              src="/assets/kamathenu Images/shopWithConfidence/download.png"
              alt="securelogo_1"
              className="w-[73.87px] h-[56.89]"
            />
          </div>
          <div>
            <h1 className="text-[19px] font-semibold">Instant Download</h1>
            <p className="text-[16px] text-gray-400 font-normal mt-2 text-[17px]">
              Safe and encrypted transactions for worry-free checkout.
            </p>
          </div>
        </div>
        <div className="w-[500px] h-[124px] p-8 border-0 bg-[#FFFAEF] flex items-center gap-7 rounded-[9px]">
          <div>
            <img
              src="/assets/kamathenu Images/shopWithConfidence/contact.png"
              alt="securelogo_1"
              className="w-[70.87px] h-[56.89]"
            />
          </div>
          <div>
            <h1 className="text-[19px] font-semibold">Customer Support</h1>
            <p className="text-[16px] text-gray-400 font-normal mt-2 text-[17px]">
              Safe and encrypted transactions for worry-free checkout.
            </p>
          </div>
        </div>
        <div className="w-[500px] h-[124px] p-8 border-0 bg-[#FFFAEF] flex items-center gap-7 rounded-[9px]">
          <div>
            <img
              src="/assets/kamathenu Images/shopWithConfidence/trust.png"
              alt="securelogo_1"
              className="w-[70.87px] h-[56.89]"
            />
          </div>
          <div>
            <h1 className="text-[18px] font-semibold">Trusted by Thousands</h1>
            <p className="text-[16px] text-gray-400 font-normal mt-2 text-[17px]">
              Safe and encrypted transactions for worry-free checkout.
            </p>
          </div>
        </div>
      </div>
      {/* categories start*/}
      <div className="relative">
        <h1 className="ml-[46%] mt-[62px] text-[29px] font-semibold">
          Categories
        </h1>
        <div className="p-15 grid grid-cols-12 grid-rows-4  gap-7">
          {/* first */}
          <div className="relative group col-span-6 row-span-4 border rounded-xl overflow-hidden bg-[#FFF4DA]">
            <div>
              <img
                src="/assets/kamathenu Images//Categories/Home/Home_1.png"
                alt="home1"
                className="absolute left-[-283px] top-[-162px] w-[756px] h-[810px] scale-x-[-1] transition-transform duration-300 group-hover:animate-collapsible-in"
              />
            </div>

            <div className="absolute top-10 left-78 z-10 text-[#333] flex flex-col gap-y-5">
              <h1 className="text-[24px] text-right text-[#D8A526] font-semibold">
                New Plans
              </h1>
              <h1 className="text-[28px] font-semibold">
                New Luxurious Villa Plans
              </h1>
              <h1 className="text-[24px] text-gray-600  text-right font-semibold">
                Up to 20% offer
              </h1>
              <Button
                className="absolute left-49 top-45 bg-white w-[40%] text-black border-1 border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[17px] p-6"
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
            </div>
            <img
              src="/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png"
              alt="Home1_outlook"
              className="absolute bottom-12 right-10 w-[140.49600219726562px] h-[204px] opacity-60"
            />
          </div>

          {/* second */}
          <div className=" col-span-3 row-span-2 group flex border rounded-xl overflow-hidden bg-[#FFE2C7]">
            <div className="w-full ">
              <h1 className=" text-right relative right-3 top-4 text-[23px] font-semibold">
                Compact Home Plans
              </h1>
              <h1 className="text-right relative right-3 top-6 text-[20px] font-normal ">
                Up to 40% offer
              </h1>
              <Button
                className="relative bg-white w-[25%] font-semibold text-black border-1 border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[12px] p-3 float-right top-8 right-3"
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
              <img
                src="/assets/kamathenu Images//Categories/HomeOutlook/outLook_4.png"
                alt="outlook_4"
                className="w-[75px]  relative top-20 left-55 opacity-70"
              />

              <img
                src="/assets/kamathenu Images//Categories/Home/Home_4.png "
                alt="Home_4 "
                className="relative bottom-12 w-[173PX] h-[123px] right-13 "
              />
            </div>
          </div>
          {/* third */}
          <div className=" relative col-span-3 row-span-2 flex border rounded-xl overflow-hidden bg-[#FFF4DA]"></div>
          {/* fourth */}
          <div className="  col-span-6 row-span-2 h-[268px] border rounded-xl overflow-hidden bg-[#FFF4DA]"></div>
        </div>
      </div>
      {/* Desing Home Image */}

      <Design />

      {/* Desing Home End */}

      <div>
        <div className="p-12 flex w-full gap-13">
          <div className="w-[50%] h-[300px] border group border-[#DADADA] bg-[#DADADA] rounded-[4px]  ">
            <div className="flex flex-col gap-4 ">
              <h1 className="w-[67%] px-5 pt-9 text-[25px] font-semibold ">
                Get your Customized Appartment Plan
              </h1>
              <h2 className="w-[67%] px-5 text-[25px] text-[#1A1A1AB2] font-semibold">
                Up to 40% offer
              </h2>
              <Button className="mx-5 bg-[#DADADA] w-[15%] text-black border-1 border-black group-hover:bg-[#D8A526] group-hover:text-white group-hover:border-[#D8A526]  rounded-[23px] text-[17px] p-3">
                Shop now
              </Button>
            </div>
              <div className="relative w-[50%]   ">
                <img src="/assets/kamathenu Images//Categories/Home/Home_5.png" alt="" className="w-[52%] absolute bottom-[-82] left-68" />
              </div>
              <div className="relative w-[50%] ">
                <img src="/assets/kamathenu Images//Categories/Home/Home_5.png" alt="" className="w-[80%] absolute bottom-[-82] left-103" />
              </div>
          </div>
          <div className="w-[50%] h-[300px] border group border-[#DADADA] bg-[#DADADA] rounded-[4px] overflow-hidden  ">
            <div className="flex flex-col gap-4 ">
              <h1 className="w-[67%] px-5 pt-9 text-[25px] font-semibold ">
                Buy Customized 2BHK Home Plan Design
              </h1>
              <h2 className="w-[67%] px-5 text-[25px] text-[#1A1A1AB2] font-semibold">
                Up to 40% offer
              </h2>
              <Button className="mx-5 bg-[#DADADA] w-[15%] text-black border-1 border-black group-hover:bg-[#D8A526] group-hover:border-[#D8A526] group-hover:text-white  rounded-[23px] text-[17px] p-3">
                Shop now
              </Button>
            </div>
              <div className="relative w-[64%]">
                <img src="/assets/kamathenu Images//Categories/Home/Home_7.png" alt="" className="w-[132%] absolute bottom-[-152] left-62 "  />
              </div>
              
          </div>
          
        </div>
      </div>

      {/* Feature Plan start */}
      <FeaturePlan/>
      <Footer/>
    </div>
  );
}
