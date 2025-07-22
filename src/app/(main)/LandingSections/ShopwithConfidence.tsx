"use client"

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Design from "./Design";
import FeaturePlan from "./FeaturePlan";
import Footer from "@/app/components/layout/Footer";
import axiosInstance from "@/app/utils/axiosInstance";



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

  const [getluxuryVillaPlans, setGetluxuryVillaPlans] = useState<any[]>([])
  const [getCompactHomePlans, setGetCompactHomePlans] = useState<any[]>([])
  const [getAppartmentPlans, setGetAppartmentPlans] = useState<any[]>([])
  const [getIndependentHousePlans, setGetIndependentHousePlans] = useState<any[]>([])
  const [getCustomizedPlans, setGetCustomizedPlans] = useState<any[]>([])

  const allCategoriesAPI = async () => {

    const categories = [
      {
        categoryName: "New Luxurious Villa Plans",
        limit: 1
      },
      {
        categoryName: "Compact Home Plans",
        limit: 1
      },
      {
        categoryName: "Appartment Plans",
        limit: 1
      },
      {
        categoryName: "Independent House Plans",
        limit: 1
      },
      {
        categoryName: "Customized Plans",
        limit: 2
      },

    ]
    const response: any = await axiosInstance.post("category/getAllCategory", categories)
    setGetluxuryVillaPlans(response.data.data["New Luxurious Villa Plans"])
    setGetCompactHomePlans(response.data.data["Compact Home Plans"])
    setGetAppartmentPlans(response.data.data["Appartment Plans"])
    setGetIndependentHousePlans(response.data.data["Independent House Plans"])
    setGetCustomizedPlans(response.data.data["Customized Plans"])
  }
  // console.log(getluxuryVillaPlans[0].images[0].imageUrl)


  console.log(getCustomizedPlans)
  console.log("👌👌👌👌")

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
        <div className="flex h-full w-full items-center justify-center">
          
          <div className="grid h-full w-full gap-4 0 p-2 grid-cols-4 grid-rows-4 gap-7 rounded-lg px-14 ">
            {/* first card start */}
            <div className="group col-span-4 lg:col-span-2 row-span-4 rounded-lg shadow-md flex items-end justify-center bg-[#FFF4DA]">
              <div className="md:w-[60%] ">
                <img
                  src={getluxuryVillaPlans.length > 0 ? getluxuryVillaPlans[0].images[0].imageUrl[0]
                    : "/assets/kamathenu Images//Categories/Home/Home_1.png"}
                  alt="Compact Home Plan"
                  className="transition-transform duration-300 group-hover:scale-x-97 object-cover object-center h-[300px] lg:h-[522px] "
                />
              </div>
              <div className=" text-[#333] flex flex-col gap-y-45 py-5 px-4 items-center lg:items-end overflow-hidden">
                <div className="flex flex-col gap-y-5 items-end">
                  <h1 className="sm:text-[20px] md:text-[24px] lg:text-[28px] text-right text-[#D8A526] font-semibold">
                    New Plans
                  </h1>
                  <h1 className="text-[12px] md:text-[24px] lg:text-[25px] font-semibold text-right">
                    {getluxuryVillaPlans.length > 0
                      ? getluxuryVillaPlans[0].name
                      : "none"}
                  </h1>
                  <h1 className="sm:text-[20px] md:text-[28px] lg:text-[32px] text-gray-600  text-right font-semibold">
                    Up to {getluxuryVillaPlans.length > 0 ? `${getluxuryVillaPlans[0].discounts[0].discountValue}${getluxuryVillaPlans[0].discounts[0].discountType === 'percentage' ? '%' : '₹'}`
                      : '20%'} offer
                  </h1>
                  <Button
                    className="sm:text-[14px] md:text-[17px] w-[130px] lg:text-[19px] bg-white  text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] "
                    style={{ borderColor: "#D8A526" }}
                  >
                    Shop now
                  </Button>

                </div>


                <div className="sm:block hidden">
                  <img
                    src={getluxuryVillaPlans.length > 0
                      ? getluxuryVillaPlans[0].images[0]?.imageLayerout[0]
                      : "/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png"}
                    alt="Home3_outlook"
                    className="  opacity-90 h-[182px]"
                  />
                </div>

              </div>
            </div>
            {/* second card start */}
            <div className="group col-span-4 lg:col-span-1 row-span-2 rounded-lg shadow-md bg-[#FFE2C7]">
              <h1 className="sm:text-[20px] md:text-[24px] lg:text-[20px] font-semibold text-right mr-4 my-4">
                {getCompactHomePlans.length > 0
                  ? getCompactHomePlans[0].name : "none"}
              </h1>
              <div className="  flex  items-center justify-end">
                  <div className="md:w-[61%] ">
                    <img
                      src={getCompactHomePlans.length > 0 ? getCompactHomePlans[0].images[0].imageUrl[1]
                        : "/assets/kamathenu Images//Categories/Home/Home_1.png"}
                      alt="Compact Home Plan"
                      className="transition-transform duration-300 group-hover:scale-x-97 object-cover object-center h-[158px] lg:h-[258px] "
                    />
                  </div>
                  <div className=" text-[#333] flex flex-col gap-y-19  px-4 items-end overflow-hidden">
                    <div className="flex flex-col gap-y-5 items-end">


                      <h1 className="text-[15px] md:text-[28px] lg:text-[15px] text-gray-600  text-right font-semibold">
                        Up to {getCompactHomePlans.length > 0 ? `${getCompactHomePlans[0]?.discounts[0]?.discountValue}${getCompactHomePlans[0]?.discounts[0]?.discountType === 'percentage' ? '%' : '₹'}`
                          : '20%'} offer
                      </h1>
                      <Button
                        className="sm:text-[14px] md:text-[17px] w-[90px] lg:text-[15px] bg-white  text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] py-2 "
                        style={{ borderColor: "#D8A526" }}
                      >
                        Shop now
                      </Button>

                    </div>


                    <div className="sm:block hidden">
                      <img
                        src={getCompactHomePlans.length > 0 ? getCompactHomePlans[0].images[0].imageLayerout[0]
                          : "/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png"}
                        alt="Home3_outlook"
                        className="  opacity-90 h-[82px]"
                      />
                    </div>

                  </div>

                </div>

            </div>

            {/* third card start */}
            <div className="group col-span-4 lg:col-span-1 row-span-2 bg-[#D9E6FF] rounded-lg shadow-md ">
              <h1 className="sm:text-[20px] md:text-[24px] lg:text-[20px] font-semibold text-right mr-4 my-4">
                {getAppartmentPlans.length > 0
                  ? getAppartmentPlans[0].name : "none"}
              </h1>
              <div className="  flex  items-center justify-end">
                  <div className="md:w-[61%] ">
                    <img
                      src={getAppartmentPlans.length > 0 ? getAppartmentPlans[0].images[0].imageUrl[1]
                        : "/assets/kamathenu Images//Categories/Home/Home_1.png"}
                      alt="Compact Home Plan"
                      className="transition-transform duration-300 group-hover:scale-x-97 object-cover object-center h-[158px] lg:h-[258px]  "
                    />
                  </div>
                  <div className=" text-[#333] flex flex-col gap-y-19  px-4 items-end overflow-hidden">
                    <div className="flex flex-col gap-y-5 items-end">


                      <h1 className="text-[15px] md:text-[28px] lg:text-[15px] text-gray-600  text-right font-semibold">
                        Up to {getAppartmentPlans.length > 0 ? `${getAppartmentPlans[0].discounts[0].discountValue}${getAppartmentPlans[0].discounts[0].discountType === 'percentage' ? '%' : '₹'}`
                          : '20%'} offer
                      </h1>
                      <Button
                        className="sm:text-[14px] md:text-[17px] w-[90px] lg:text-[15px] bg-white  text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] py-2 "
                        style={{ borderColor: "#D8A526" }}
                      >
                        Shop now
                      </Button>

                    </div>


                    <div className="sm:block hidden">
                      <img
                        src={getAppartmentPlans.length > 0 ? getAppartmentPlans[0].images[0].imageLayerout[0]
                          : "/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png"}
                        alt="Home3_outlook"
                        className="  opacity-90 h-[82px]"
                      />
                    </div>

                  </div>

                </div>
            </div>
            {/* fourth card start */}
            <div className="group col-span-4 lg:col-span-2 row-span-2 bg-[#F9C6A3] rounded-lg shadow-md ">
            <h1 className="sm:text-[20px] md:text-[24px] lg:text-[26px] font-semibold text-right mr-4 my-4">
                {getIndependentHousePlans.length > 0
                  ? getIndependentHousePlans[0].name : "none"}
              </h1>
              <div className="  flex  items-center justify-end">
                  <div className="md:w-[90%] ">
                    <img
                      src={getIndependentHousePlans.length > 0 ? getIndependentHousePlans[0].images[0].imageUrl[1]
                        : "/assets/kamathenu Images//Categories/Home/Home_1.png"}
                      alt="Compact Home Plan"
                      className="transition-transform duration-300 group-hover:scale-x-97 object-cover object-center h-[168px] lg:h-[258px] w-[80%] "
                    />
                  </div>
                  <div className=" text-[#333] flex flex-col gap-y-10  px-4 items-end overflow-hidden">
                    <div className="flex flex-col gap-y-5 items-end">


                      <h1 className="text-[15px] md:text-[28px] lg:text-[15px] text-gray-600 mb-5 text-right font-semibold">
                        Up to {getIndependentHousePlans.length > 0 ? `${getIndependentHousePlans[0]?.discounts[0]?.discountValue}${getIndependentHousePlans[0]?.discounts[0]?.discountType === 'percentage' ? '%' : '₹'}`
                          : '20%'} offer
                      </h1>
                      <Button
                        className="sm:text-[14px] md:text-[17px] w-[90px] lg:text-[15px] bg-white  text-black border-1  border-black group-hover:bg-[#D8A526] group-hover:text-white  rounded-[23px] py-2 "
                        style={{ borderColor: "#D8A526" }}
                      >
                        Shop now
                      </Button>

                    </div>


                    <div className="sm:block hidden">
                      <img
                        src={getIndependentHousePlans.length > 0 ? getIndependentHousePlans[0].images[0].imageLayerout[0]
                          : "/assets/kamathenu Images//Categories/HomeOutlook/outLook_1.png"}
                        alt="Home3_outlook"
                        className="  opacity-90 h-[82px]"
                      />
                    </div>

                  </div>

                </div>
            </div>

          </div>
        </div>

      </div>
      {/* Desing Home Start */}


      <Design />
      {/* Desing Home End */}

      <div>

        <div className="p-4 sm:p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-13">

          {getCustomizedPlans.map((ele, ind) => (
            <div key={ind} className="h-[250px] sm:h-[280px] md:h-[300px] border group border-[#DADADA] bg-[#DADADA] rounded-[4px] overflow-hidden relative">
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5">
                <h1 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-semibold leading-tight">
                  {ele.name}
                </h1>
                <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] text-[#1A1A1AB2] font-semibold">
                  Up to {ele?.discounts[0]?.discountValue} {ele?.discounts[0]?.discountType === 'percentage' ? '%' : '₹'} offer
                </h2>
                <Button className="bg-[#DADADA] w-fit text-black border border-black group-hover:bg-[#D8A526] group-hover:text-white group-hover:border-[#D8A526] rounded-[23px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] px-3 sm:px-4 py-2 sm:py-3">
                  Shop now
                </Button>
              </div>
              <div className="absolute bottom-0 right-0 w-[40%] sm:w-[45%] md:w-[45%]">
                <img
                  src={ele.images[0].imageUrl[0]}
                  alt="Customized Apartment Plan"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-95"
                />
              </div>
              <div className="absolute bottom-0 right-[45%] sm:right-[50%] md:right-[50%] w-[25%] sm:w-[30%] md:w-[32%]">
                <img
                  src={ele.images[0].imageUrl[1]}
                  alt="Customized Apartment Plan"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-95"
                />
              </div>
            </div>

          ))}
        </div>
      </div>

      {/* Feature Plan start */}
      <FeaturePlan />
      <Footer />
    </div>
  );
}
