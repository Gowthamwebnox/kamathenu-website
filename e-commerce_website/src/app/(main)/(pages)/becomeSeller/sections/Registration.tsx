import { Button } from "@/components/ui/button";
import React from "react";
import vec from '../../../../../../public/assets/kamathenu Images/BAS/Seller/registrer_image2.png'

const RegistrationPage = () => {
  return (
    <>
      <div className="p-22 ">
        <div className="flex bg-[#D8A526] overflow-hidden  ">
          <div className="w-[53%] px-29 py-24">
            <h1 className="text-[40px]  font-bold ">
              Start Earning from Your Designs Today!
            </h1>
            <h1 className="mt-3 text-[18px]  font-normal ">
              Tap into builders, homeowners, and contractors looking for
              ready-made plans. Tap into builders, homeowners, and contractors
              looking for ready-made plans.
            </h1>
            <Button
              className="bg-white mt-7 text-[20px] py-6 text-[#D8A526] border hover:bg-[#D8A526] hover:text-white"
              
            >
              Register Now
            </Button>
          </div>
          <div className="w-[60%] relative  ">
            <img src="/assets/kamathenu Images/BAS/Seller/registrer_image2.png" alt="register_image" className=" absolute h-full w-full object-cover object-center rounded-tl-[18px] transform skew-x-[20deg]  origin-left left-29 md:left-22 "/>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
