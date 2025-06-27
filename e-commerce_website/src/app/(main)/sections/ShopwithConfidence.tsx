"use client"

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Design from "./Design";
import FeaturePlan from "./FeaturePlan";
import Footer from "@/app/components/layout/Footer";
import axiosInstance from "@/app/utils/axiosInstance";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FaHeart } from "react-icons/fa";
import { IoIosStar, IoIosArrowRoundForward } from "react-icons/io";



export default function ShopwithConfidence() {
  useEffect(() => {
    allCategoriesAPI()
  }, [])
  
  // Method 1: useEffect approach (current implementation)
  // useEffect(() => {
  //   handleDesignHome()
  // }, [activeCategory])

  // Method 2: Custom onChange handler
  

  // Method 3: Direct onClick approach
  
  const[getluxuryVillaPlans,setGetluxuryVillaPlans]=useState<any[]>([])
  const[getCompactHomePlans,setGetCompactHomePlans]=useState<any[]>([])
  const[getAppartmentPlans,setGetAppartmentPlans]=useState<any[]>([])
  const[getIndependentHousePlans,setGetIndependentHousePlans]=useState<any[]>([])
  const[getCustomizedPlans,setGetCustomizedPlans]=useState<any[]>([])

  const allCategoriesAPI = async () => {
   
    const categories = [
      {
        categoryName:"New Luxurious Villa Plans",
        limit: 1
      },
      {
        categoryName:"Compact Home Plans",
        limit: 1
      },
      {
        categoryName:"Appartment Plans",
        limit: 1
      },
      {
        categoryName:"Independent House Plans",
        limit: 1
      },
      {
        categoryName:"Customized Plans",
        limit: 2
      },

    ]
    const response:any = await axiosInstance.post("category/getAllCategory",categories)
    setGetluxuryVillaPlans(response.data.data["New Luxurious Villa Plans"])
    setGetCompactHomePlans(response.data.data["Compact Home Plans"])
    setGetAppartmentPlans(response.data.data["Appartment Plans"])
    setGetIndependentHousePlans(response.data.data["Independent House Plans"])
    setGetCustomizedPlans(response.data.data["Customized Plans"])
  }
  // console.log(getluxuryVillaPlans[0].images[0].imageUrl)
  
  const handleDesignHome = async (category?: string) => {
    const selectedCategory = category || activeCategory;
    console.log("🔥🔥🔥🔥🔥🔥activeCategory🔥🔥🔥🔥🔥🔥", selectedCategory)
    // You can add your API call here to fetch data based on selectedCategory
    // Example:
    // const response = await axiosInstance.post('design/getDesigns', { category: selectedCategory });
    // setDesignData(response.data);
  }
  

  const shopWithConfidence = [{
    img1: "/assets/kamathenu Images/shopWithConfidence/secureTop.png",
    img2: "/assets/kamathenu Images/shopWithConfidence/secureLow.png",
    title: "Secure Payment",
    desc: "Safe and encrypted transactions for worry-free checkout.",
  },
  {
    img1: "/assets/kamathenu Images/shopWithConfidence/download.png",
    title: "Instant Download",
    desc: "Your purchases are ready to use immediately after checkout.",
  },
  {
    img1: "/assets/kamathenu Images/shopWithConfidence/contact.png",
    title: "Customer Support",
    desc: "Get support from our team anytime you need assistance.",
  },
  {
    img1: "/assets/kamathenu Images/shopWithConfidence/trust.png",
    title: "Trusted by Thousands",
    desc: "Join thousands of happy customers who trust our service.",
  },]
  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:mt-24 w-full px-4 md:px-16">
        {shopWithConfidence.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-[#FFFAEF] rounded-[9px] border-0 p-6 lg:p-8"
          >
            <div>
              <img
                src={item.img1}
                alt="icon"
                className="w-[70px] h-[56px] object-contain"
              />
              {item.img2 && (
                <img
                  src={item.img2}
                  alt="icon-2"
                  className="w-[71.84px] h-[24.31px] mt-2"
                />
              )}
            </div>
            <div>
              <h1 className="text-[19px] font-semibold">{item.title}</h1>
              <p className="text-gray-400 font-normal mt-2 text-[17px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

                                                                                {/* categories start*/}
      <div className="">
        <h1 className="text-center mt-[62px] text-[29px] font-semibold">
          Categories
        </h1>
        <div className="p-15 grid grid-cols-1 lg:grid-cols-12 grid-rows-4  gap-7">
          {/* first */}
          <div className=" group col-span-6 row-span-4 border rounded-xl overflow-hidden bg-[#FFF4DA]">
            <div className=" text-[#333] flex flex-col gap-y-5 py-5 px-8 ">
              <h1 className="text-[24px] text-right text-[#D8A526] font-semibold">
                New Plans
              </h1>
              <h1 className="text-[28px] font-semibold text-right">
                {getluxuryVillaPlans.length > 0 
                  ? getluxuryVillaPlans[0].category.name 
                  : "none"}
              </h1>
              <h1 className="text-[24px] text-gray-600  text-right font-semibold">
                Up to {getluxuryVillaPlans.length > 0 ? `${getluxuryVillaPlans[0].discounts[0].discountValue}${getluxuryVillaPlans[0].discounts[0].discountType === 'percentage' ? '%' : '₹'}` 
                  : '20%'} offer
              </h1>
              <Button
                className="ml-[83%] bg-white w-[17%] text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[17px] p-6 "
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
              
              <div className="relative w-[110%] bottom-13 right- ">
                <img
                  src={getluxuryVillaPlans.length > 0 ? getluxuryVillaPlans[0].images[0].imageUrl[0] 
                    : "/assets/kamathenu Images//Categories/Home/Home_1.png"}
                  alt="Luxury Villa Plan"
                  className="absolute transition-transform duration-300 group-hover:scale-x-97 group-hover:scale-y-97 w-[40%] object-contain"
                />
              </div>
              <div className="relative top-9 left-169">
                <img
                  src={getluxuryVillaPlans.length > 0  
                    ? getluxuryVillaPlans[0].images[0]?.imageUrl[1]   
                    : "/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png"}
                  alt="Home1_outlook"
                  className="absolute  w-[140.49600219726562px] h-[204px] object-contain opacity-60"
                />
              </div>
            </div>
          </div>

          {/* second */}
          <div className=" col-span-6 row-span-4  lg:col-span-3 lg:row-span-2 group flex border rounded-xl overflow-hidden bg-[#FFE2C7]">
            <div className=" text-[#333] flex flex-col gap-y-1 py-5 px-6 w-full ">
              <h1 className="text-[24px] text-right text-[#0f0f0e] font-semibold">
                {getCompactHomePlans.length > 0 
                  ? getCompactHomePlans[0].category.name 
                  : "none"}
              </h1>
              <h1 className="text-[18px] text-gray-600  text-right font-semibold">
                Up to {getCompactHomePlans.length > 0 
                  ? `${getCompactHomePlans[0].discounts[0].discountValue}${getCompactHomePlans[0].discounts[0].discountType === 'percentage' ? '%' : '₹'}` 
                  : 'd0%'} offer
              </h1>
              <Button
                className="ml-[73%] bg-white w-[12%] text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[13px] px-13  "
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
              <div className="relative w-[97%] bottom-16 right-22 ">
                <img
                  src={getCompactHomePlans.length > 0 ? getCompactHomePlans[0].images[0].imageUrl[0] : "asdfa"}
                  alt="Compact Home Plan"
                  className="absolute transition-transform duration-300 group-hover:scale-x-97  "
                />
              </div>
              <div className="relative w-[20%] top left-75  ">
                <img
                  src={getCompactHomePlans.length > 0 ? getCompactHomePlans[0].images[0].imageUrl[1] : "asdfasd"}
                  alt="Home4_outlook"
                  className="absolute  opacity-90"
                />
              </div>
            </div>
          </div>
          {/* third */}
          <div className=" col-span-6 row-span-4 lg:col-span-3 lg:row-span-2 group flex border rounded-xl overflow-hidden bg-[#FFE2C7]">
            <div className=" text-[#333] flex flex-col gap-y-1 py-5 px-6 w-full ">
              <h1 className="text-[24px] text-right text-[#0f0f0e] font-semibold">
                {getAppartmentPlans.length >0 ?getAppartmentPlans[0].category.name :"none"}
              </h1>
              <h1 className="text-[17px] text-gray-600  text-right font-semibold">
              Up to {getAppartmentPlans.length > 0 
                  ? `${getAppartmentPlans[0]?.discounts[0]?.discountValue}${getAppartmentPlans[0]?.discounts[0]?.discountType === 'percentage' ? '%' : '₹'}` 
                  : '20%'} offer
              </h1>
              <Button
                className="ml-[73%] bg-white w-[12%] text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[13px] px-13  "
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
              <div className="relative w-[97%] bottom-44 right-27 ">
                <img
                  src={getAppartmentPlans.length > 0 ? getAppartmentPlans[0]?.images[0]?.imageUrl[0] : "asdfa"}
                  alt=""
                  className="absolute transition-transform duration-300 group-hover:scale-x-97 "
                />
              </div>
              <div className="relative w-[40%] top-5 left-58  ">
                <img
                  src={getAppartmentPlans.length > 0 ? getAppartmentPlans[0]?.images[0]?.imageUrl[1] : "asdfa"}
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
                {getIndependentHousePlans.length > 0 ? getIndependentHousePlans[0].category.name : "none"}
              </h1>
              <h1 className="text-[18px] text-gray-600  text-right font-semibold">
                Up to {getIndependentHousePlans.length > 0 
                  ? `${getIndependentHousePlans[0]?.discounts[0]?.discountValue}${getIndependentHousePlans[0]?.discounts[0]?.discountType === 'percentage' ? '%' : '₹'}` 
                  : '0%'} offer
              </h1>
              <Button
                className="ml-[83%] bg-white w-[17%] text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] text-[13px] px-11  "
                style={{ borderColor: "#D8A526" }}
              >
                Shop now
              </Button>
              <div className="relative w-[75%] bottom-48 right-7 ">
                <img
                  src={getIndependentHousePlans.length > 0 ? getIndependentHousePlans[0]?.images[0]?.imageUrl[0] : "asdfa"}
                  alt="Independent House Plan"
                  className="absolute transition-transform duration-300 group-hover:scale-x-97 "
                />
              </div>
              <div className="relative left-8 bottom-1 ">
                <img
                  src={getIndependentHousePlans.length > 0 ? getIndependentHousePlans[0]?.images[0]?.imageUrl[1] : "afdsa"}
                  alt="Independent House Plan"
                  className="absolute w-[14%] opacity-90"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
                                                                                {/* Desing Home Start */}

      
                  <Design/>
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
