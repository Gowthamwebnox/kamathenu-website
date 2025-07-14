"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const RegistrationPage = () => {
  const router = useRouter();
  return (
    <>
      {/* Mobile and Tablet Layout (sm and md) */}
      <div className="block lg:hidden p-4">
        <div className="flex flex-col bg-[#D8A526] overflow-hidden rounded-lg">
          <div className="w-full px-6 py-8 text-center">
            <h1 className="text-2xl font-bold text-white">
              Start Earning from Your Designs Today!
            </h1>
            <h1 className="mt-3 text-sm font-normal text-white leading-relaxed">
              Tap into builders, homeowners, and contractors looking for ready-made plans. Tap into builders, homeowners, and contractors looking for ready-made plans.
            </h1>
            <Button
              className="bg-white mt-6 text-base py-4 px-6 text-[#D8A526] border hover:bg-[#D8A526] hover:text-white rounded-lg" 
            >
              Register Now
            </Button>
          </div>
          <div className="w-full relative h-48">
            <img 
              src="/assets/kamathenu Images/BAS/Seller/registrer_image2.png" 
              alt="register_image" 
              className="absolute h-full w-full object-cover object-center rounded-b-lg"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout (lg) - Same as original */}
      <div className="hidden lg:block p-22">
        <div className="flex bg-[#D8A526] overflow-hidden">
          <div className="w-[53%] px-29 py-24">
            <h1 className="text-[40px] font-bold">
              Start Earning from Your Designs Today!
            </h1>
            <h1 className="mt-3 text-[18px] font-normal">
              Tap into builders, homeowners, and contractors looking for
              ready-made plans. Tap into builders, homeowners, and contractors
              looking for ready-made plans.
            </h1>
            <Button className="bg-white mt-7 text-[20px] py-6 text-[#D8A526] border hover:bg-[#D8A526] hover:text-white cursor-pointer" onClick={()=>router.push("/seller/sellerRegister")}>
              Register Now
            </Button>
          </div>
          <div className="w-[60%] relative">
            <img 
              src="/assets/kamathenu Images/BAS/Seller/registrer_image2.png" 
              alt="register_image" 
              className="absolute h-full w-full object-cover object-center rounded-tl-[18px] transform skew-x-[20deg] origin-left left-29 md:left-22"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
