'use client'
import axiosInstance from "@/app/utils/axiosInstance";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosStar, IoIosArrowRoundForward } from "react-icons/io";

const FeaturePlan = () => {
  const routes = useRouter();
  const [featuredPlans, setFeaturedPlans] = useState<any[]>([])
  const payload: { categoryName: string, limit: number } = {
    categoryName: "Featured Plans",
    limit: 12
  }
  useEffect(() => {
    getFeaturedPlans()
  }, [payload.limit])

  const getFeaturedPlans = async () => {
    const response:any = await axiosInstance.post('category/getdesignAndFeature', payload)
    setFeaturedPlans(response.data)
  }
  console.log("👌👌👌👌💕💕💕")
  console.log(featuredPlans)
  return (
    <>
    <h2 className="text-[#1A1A1A] text-2xl md:text-4xl text-center font-semibold px-4 py-[2rem]">
     Featured Plans
    </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-26 py-6 items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 ">
        {featuredPlans.map((items: any, index: any) => (
          <div onClick={() => routes.push(`/product/${items.id}?name=${encodeURIComponent(items.category.name)}`)} key={index + 1} className="flex cursor-pointer flex-col border border-gray-300 rounded-t-[15px] gap-2 sm:gap-3 lg:gap-4 relative">
            <img
              src={items.images[0].imageUrl[0]}
              alt="design_home_1"
              className="w-full h-[140px] sm:h-[200px] lg:h-[234px] border rounded-t-[11px] object-cover"
            />
            <h1 className="text-[16px] sm:text-[18px] lg:text-[21px] px-2 sm:px-3 font-semibold"> 
              {items.aboutProduct.about}
            </h1>
            <div className="flex items-center gap-1 sm:gap-2 px-2">
              <img
                src={items.seller.profileImage}
                alt="constructor_person"
                className="w-[12px] h-[18px] sm:w-[13%] sm:h-[38px] object-cover object-center rounded-[50%]"
              />
              <h1 className="text-[12px] sm:text-[14px]">{items.seller.sellerName}</h1>
              <h2 className="text-[12px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-gray-400 font-normal">
                ({items.seller.storeDescription})
              </h2>
            </div>
            <div className="flex px-2 gap-1 items-center">
              <IoIosStar className="text-[#EACD3C] size-3 sm:size-4" />
              <IoIosStar className="text-[#EACD3C] size-3 sm:size-4" />
              <IoIosStar className="text-[#EACD3C] size-3 sm:size-4" />
              <IoIosStar className="text-[#EACD3C] size-3 sm:size-4" />
              <IoIosStar className="text-[#EACD3C] size-3 sm:size-4" />
              <h1 className="ml-1 text-gray-400 text-[13px] sm:text-[15px]">({items.reviews[0].rating})</h1>
            </div>
            <div className="flex p-2 gap-2 sm:gap-4 lg:gap-18 items-center">
              <div>
                <div className="text-gray-400 line-through flex items-center">
                  <span className="flex items-center text-[16px] sm:text-[18px] lg:text-[21px] font-semibold">₹ {items.variants[0].discountPrice}</span>
                </div>
                <div className="text-[#D8A526] flex items-center">
                  <span className="flex items-center text-[20px] sm:text-[24px] lg:text-[28px] font-semibold">₹ {items.variants[0].price}</span>
                </div>
              </div>
              <div className="">
                <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF] p-1 sm:p-2 rounded-[50%] size-8 sm:size-10 lg:size-12" />
              </div>
            </div>
            <div className="absolute top-2 right-2">
              <FaHeart className="size-4 sm:size-5 text-white" />
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default FeaturePlan;
