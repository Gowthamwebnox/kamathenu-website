import React from "react";
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
            <p className="] text-gray-400 font-normal mt-2 text-[17px]">
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
            <p className=" text-gray-400 font-normal mt-2 text-[17px]">
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
            <p className=" text-gray-400 font-normal mt-2 text-[17px]">
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
            <p className="text-gray-400 font-normal mt-2 text-[17px]">
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
          <div className=" group col-span-6 row-span-4 border rounded-xl overflow-hidden bg-[#FFF4DA]">
            

            <div className=" text-[#333] flex flex-col gap-y-5 py-5 px-8 ">
              <h1 className="text-[24px] text-right text-[#D8A526] font-semibold">
                New Plans
              </h1>
              <h1 className="text-[28px] font-semibold text-right">
                New Luxurious Villa Plans
              </h1>
              <h1 className="text-[24px] text-gray-600  text-right font-semibold">
                Up to 20% offer
              </h1>
              <Button
                className="ml-[83%] bg-white w-[17%] text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[17px] p-6 "
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
              <div className="relative w-[110%] bottom-133 right-77 ">
                <img
                  src="/assets/kamathenu Images//Categories/Home/Home_1.png"
                  alt=""
                  className="absolute transition-transform duration-300 group-hover:scale-x-97   "
                />
              </div>
              <div className="relative top-9 left-169">
                <img
                  src="/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png"
                  alt="Home1_outlook"
                  className="absolute  w-[140.49600219726562px] h-[204px] opacity-60"
                />
              </div>
            </div>
            
          </div>

          {/* second */}
          <div className=" col-span-3 row-span-2 group flex border rounded-xl overflow-hidden bg-[#FFE2C7]">
            <div className=" text-[#333] flex flex-col gap-y-1 py-5 px-6 w-full ">
              <h1 className="text-[24px] text-right text-[#0f0f0e] font-semibold">
                Compact Home Plans
              </h1>
              <h1 className="text-[18px] text-gray-600  text-right font-semibold">
                Up to 20% offer
              </h1>
              <Button
                className="ml-[73%] bg-white w-[12%] text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[13px] px-13  "
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
              <div className="relative w-[97%] bottom-16 right-22 ">
                <img
                  src="/assets/kamathenu Images//Categories/Home/Home_4.png"
                  alt=""
                  className="absolute transition-transform duration-300 group-hover:scale-x-97  "
                />
              </div>
              <div className="relative w-[20%] top left-75  ">
                <img
                  src="/assets/kamathenu Images//Categories/HomeOutlook/outLook_4.png"
                  alt="Home4_outlook"
                  className="absolute  opacity-90"
                />
              </div>
            </div>
          </div>
          {/* third */}
          <div className=" col-span-3 row-span-2 group flex border rounded-xl overflow-hidden bg-[#FFE2C7]">
            <div className=" text-[#333] flex flex-col gap-y-1 py-5 px-6 w-full ">
              <h1 className="text-[24px] text-right text-[#0f0f0e] font-semibold">
                Appartment Plans
              </h1>
              <h1 className="text-[17px] text-gray-600  text-right font-semibold">
                Up to 20% offer
              </h1>
              <Button
                className="ml-[73%] bg-white w-[12%] text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[13px] px-13  "
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
              <div className="relative w-[97%] bottom-44 right-27 ">
                <img
                  src="/assets/kamathenu Images//Categories/Home/Home_3.png"
                  alt=""
                  className="absolute transition-transform duration-300 group-hover:scale-x-97 "
                />
              </div>
              <div className="relative w-[40%] top-5 left-58  ">
                <img
                  src="/assets/kamathenu Images//Categories/HomeOutlook/outLook_3.png"
                  alt="Home3_outlook"
                  className="  opacity-90"
                />
              </div>
            </div>
          </div>
          {/* fourth */}
          <div className=" col-span-6 row-span-2 group flex border rounded-xl overflow-hidden bg-[#FFE2C7]">
            <div className=" text-[#333] flex flex-col gap-y-2 py-5 px-6 w-full ">
              <h1 className="text-[24px] text-right text-[#0f0f0e] font-semibold">
                Independent House Plans
              </h1>
              <h1 className="text-[18px] text-gray-600  text-right font-semibold">
                Up to 20% offer
              </h1>
              <Button
                className="ml-[83%] bg-white w-[17%] text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[13px] px-11  "
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
              <div className="relative w-[75%] bottom-48 right-7 ">
                <img
                  src="/assets/kamathenu Images//Categories/Home/Home_2.png"
                  alt=""
                  className="absolute transition-transform duration-300 group-hover:scale-x-97 "
                />
              </div>
              <div className="relative   left-178 bottom-1 ">
                <img
                  src="/assets/kamathenu Images//Categories/HomeOutlook/outLook_2.png"
                  alt="Home3_outlook"
                  className="absolute w-[14%] opacity-90"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* Desing Home Image */}

      <Design />

      {/* Desing Home End */}

      <div>
        <div className="p-12 flex w-full gap-13">
          <div className="w-[50%] h-[300px] border group border-[#DADADA] bg-[#DADADA] rounded-[4px] overflow-hidden  ">
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
            <div className="relative w-[45%]   ">
              <img
                src="/assets/kamathenu Images//Categories/Home/Home_5.png"
                alt=""
                className="w-[52%] absolute bottom-[-119] left-108 transition-transform duration-300 group-hover:scale-x-97"
              />
            </div>
            <div className="relative w-[32%] ">
              <img
                src="/assets/kamathenu Images//Categories/Home/Home_5.png"
                alt=""
                className=" absolute bottom-[-119] left-153 transition-transform duration-300 group-hover:scale-x-97"
              />
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
            <div className="relative w-[59%]">
              <img
                src="/assets/kamathenu Images//Categories/Home/Home_7.png"
                alt=""
                className=" absolute bottom-[-216] left-92 transition-transform duration-300 group-hover:scale-x-97 "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Plan start */}
      <FeaturePlan />
      <Footer />
    </div>
  );
}
