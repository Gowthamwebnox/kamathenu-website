import React from "react";
import securelogo_1 from "../../../../public/assets/kamathenu Images/shopWithConfidence/secureTop.png";
import securelogo_2 from "../../../../public/assets/kamathenu Images//Categories/Home/Home_1.png";
import logo from "../../../../public/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png";
import { Button } from "@/components/ui/button";

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
            <h1 className="text-[19px] font-semibold">Trusted by Thousands</h1>
            <p className="text-[16px] text-gray-400 font-normal mt-2 text-[17px]">
              Safe and encrypted transactions for worry-free checkout.
            </p>
          </div>
        </div>
      </div>
      {/* categories start*/}
      <div>
        <h1 className="ml-[46%] mt-[62px] text-[29px] font-semibold">
          Categories
        </h1>
        <div className="p-15 grid grid-cols-12 grid-rows-2  gap-4">
          <div className="relative col-span-6 row-span-2 border rounded-xl overflow-hidden bg-[#FFF4DA]">
            <div>
              <img
                src="/assets/kamathenu Images//Categories/Home/Home_1.png"
                alt="home1"
                className="absolute left-[-283px] top-[-162px] w-[756px] h-[794px] scale-x-[-1] "
              />
            </div>

            <div className="absolute top-10 left-128 z-10 text-[#333] flex flex-col gap-y-5">
              <h1 className="text-[24px] text-right text-[#D8A526] font-semibold">
                New Plans
              </h1>
              <h1 className="text-[28px] font-semibold">
                New Luxurious Villa Plans
              </h1>
              <h1 className="text-[24px]  text-right">Up to 20% offer</h1>
              <Button
                className="absolute left-49 top-45 bg-white w-[40%] text-black border-1 border-black hover:bg-[#D8A526] hover:text-white  rounded-[23px] text-[17px] p-6"
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
            </div>
            <img
              src="/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png"
              alt="Home1_outlook"
              className="absolute bottom-12 right-20 w-[140.49600219726562px] h-[204px] opacity-60"
            />
          </div>

          {/* second */}
          <div className=" relative    col-span-3 row-span-1 flex border rounded-xl overflow-hidden bg-[#FFF4DA]">
           
          </div>
          <div className=" relative    col-span-3 row-span-1 flex border rounded-xl overflow-hidden bg-[#FFF4DA]">
           
          </div>
          <div className="  col-span-6 row-span-2 h-[268px] border rounded-xl overflow-hidden bg-[#FFF4DA]">
            

            
          </div>
        </div>
      </div>
    </div>
  );
}
