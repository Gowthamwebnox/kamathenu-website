'use client'
import axiosInstance from "@/app/utils/axiosInstance";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import {  IoIosArrowRoundForward } from "react-icons/io";
import StarRatings from "react-star-ratings";

const FeaturePlan = () => {
  const routes = useRouter();
  const [featuredPlans, setFeaturedPlans] = useState<any[]>([])
  const [limit, setLimit] = useState(1);
  const [showMore, setShowMore] = useState(true);
  const [wishlistStatus, setWishlistStatus] = useState<{ [key: string]: boolean }>({});

  const payload: { categoryName: string, limit: number } = {
    categoryName: "Featured Plans",
    limit: limit
  }
  useEffect(() => {
    getFeaturedPlans()
  }, [limit])

  const getFeaturedPlans = async () => {
    const response: any = await axiosInstance.post('category/getdesignAndFeature', payload)
    response.data.length === limit ? setShowMore(true) : setShowMore(false);
    setFeaturedPlans(response.data)
    const initialWishlistStatus: { [key: string]: boolean } = {};
    response.data.forEach((item: any, ele: any) => {
      console.log("🔥🔥🔥🔥🔥🔥item🔥🔥🔥🔥🔥🔥", ele)
      initialWishlistStatus[item.id] = item?.wishlist[0]?.productId === item?.id;
    })
    setWishlistStatus(initialWishlistStatus);
  }
  console.log("👌👌👌👌💕💕💕")
  console.log(featuredPlans)

  const handleWishlist = async (productId: string, wishlistProductId: string, wishlistId: string) => {
    console.log("🔥🔥🔥🔥🔥🔥wishlistId🔥🔥🔥🔥🔥🔥", wishlistId)
    const payload = {
      productId: productId,
      wishlistProductId: wishlistProductId,
      userId: localStorage.getItem("currentUserId"),
      wishlistId: wishlistId
    }
    console.log("🔥🔥🔥🔥🔥🔥payload🔥🔥🔥🔥🔥🔥", payload)
    try {
      if (wishlistStatus[productId] === true) {
        const response: any = await axiosInstance.post("product/removewishlistProduct", payload)
        console.log("🔥🔥🔥🔥🔥🔥response🔥🔥🔥🔥🔥🔥", response)
        setWishlistStatus(prev => ({
          ...prev,
          [productId]: false
        }));
        payload.wishlistId = '';
        console.log("🔥🔥🔥🔥🔥🔥wishlistStatus🔥🔥🔥🔥🔥🔥", wishlistStatus)
      } else {
        const response: any = await axiosInstance.post("product/addWishlistProduct", payload)
        console.log("🔥🔥🔥🔥🔥🔥response🔥🔥🔥🔥🔥🔥", response)
        setWishlistStatus(prev => ({
          ...prev,
          [productId]: true
        }));
      }
    } catch (error) {
      console.log("🔥🔥🔥🔥🔥🔥error🔥🔥🔥🔥🔥🔥", error)
    }
  }
  
  return (
    <>
      <h2 className="text-[#1A1A1A] text-2xl md:text-4xl text-center font-semibold px-4 py-[2rem]">
        Featured Plans
      </h2>
      <div className="px-3 md:px-26">
        
     <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 sm:gap-6 lg:gap-5  xl:gap-8 mb-8   ">
                {featuredPlans.map((items: any, index: any) => (
                  <div  key={index + 1} className="flex cursor-pointer flex-col border border-gray-300 shadow-lg rounded-t-[15px] gap-2 sm:gap-3 lg:gap-4 relative lg:h-[540px]">
                    <img
                      src={items.images[0].imageUrl[0]}
                      alt="design_home_1"
                      className="w-full h-[140px] sm:h-[200px] lg:h-[234px] border rounded-t-[11px] object-cover"
                      onClick={() => routes.push(`/product/${items.id}?name=${encodeURIComponent(items.category.name)}`)}
                    />
                    <div className="p-[10px] flex flex-col gap-4">
                    <h1 className="text-[16px] sm:text-[18px] lg:text-[21px] px-2 sm:px-3 font-semibold">
                      {items.name}
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 px-2">
                      <img
                        src={items.seller.profileImage}
                        alt="constructor_person"
                        className="w-[12px] h-[18px] sm:w-[13%] sm:h-[38px]  object-center rounded-[50%]"
                      />
                      <h1 className="text-[12px] sm:text-[14px]">{items.seller.sellerName}</h1>
                      <h2 className="text-[12px] sm:text-[14px] text-gray-400 font-normal">
                        ({items.seller.storeDescription})
                      </h2>
                    </div>

                    <div className="ml-3">
                    <StarRatings
                      rating={items.reviews[0].rating}
                      starRatedColor='#EACD3C'
                      numberOfStars={5}
                      name='rating'
                      starDimension="25px"
                      starSpacing="1px"
                    />
                    </div>
                    <div className="flex p-2 gap-2 sm:gap-4 lg:gap-18 items-center justify-between ml-1">
                      <div>
                        <div className="text-gray-400 line-through flex items-center">
                          <span className="flex items-center text-[16px] sm:text-[18px] lg:text-[21px] font-semibold">₹ {items?.discountPrice}</span>
                        </div>
                        <div className="text-[#D8A526] flex items-center ">
                          <span className="flex items-center text-[20px] sm:text-[24px] lg:text-[28px] font-semibold">₹ {items?.price}</span>
                        </div>
                      </div>
                      <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF] p-1 sm:p-2 rounded-[50%] size-13 sm:size-14 lg:w-[60px] lg:h-[60px]" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <FaHeart 
                        className={`size-4 sm:size-5 cursor-pointer transition-colors ${
                          wishlistStatus[items.id] ? 'text-yellow-500' : 'text-white'
                        }`}
                        onClick={() => handleWishlist(items.id, items.wishlist[0]?.productId, items?.wishlist[0]?.id)}
                      />
                    </div>
                    </div>
                  </div>
                ))}
              </div>

      </div>
      {showMore && <Button className="bg-[#D8A526] text-white border ml-[44%] hover:bg-white hover:text-[#D8A526] font-semibold py-6 " style={{ borderColor: '#D8A526' }}>
        <div className="flex items-center gap-1 cursor-pointer " onClick={() => setLimit(limit + 5)}><span className="text-[19px]"  >See More</span> <IoIosArrowRoundForward className=" size-12" /></div>
      </Button>}
    </>

  );
};

export default FeaturePlan;
