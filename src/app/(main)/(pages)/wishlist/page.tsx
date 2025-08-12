
'use client'
import Header from "@/app/components/layout/Header";
import axiosInstance from "@/app/utils/axiosInstance";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

export default function Wishlist() {

  const [wishlistData, setWishlistData] = useState<any[]>([]);
  const [showWishlistData, setShowWishlistData] = useState(false)
  const router = useRouter()
  useEffect(() => {
    getWishlistData()
  }, [])
  const getWishlistData = async () => {
    const localData= localStorage.getItem('userData-storage')
    const userData=JSON.parse(localData||'{}')
    try {
      const payload = {
        userId: userData?.state.userData.userId
      }
      const response: any = await axiosInstance.post('product/fetchWishlist', payload)
      if(response.data.wishlist.length>0){
        setWishlistData(response.data.wishlist)
        console.log(response.data.wishlist)
      }
      else{
        setShowWishlistData(true)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (

    <div>
      <Header headerColor={['gray', 'white']} />
      {showWishlistData && (
        <div className="w-full mt-30  flex justify-center items-center">
          <Button className="w-[40% ] h-[40px] rounded-lg bg-[#D8A526] text-white cursor-pointer hover:bg-white hover:text-[#D8A526] hover:border-2 hover:border-[#D8A526]" onClick={() => router.push('/')}>View Our Products
          </Button>
            </div>
      )}
      <div className="w-full mt-30 p-34">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 ">
          {wishlistData.map((items: any, index: any) => (
            <div  key={index + 1} className="flex cursor-pointer flex-col border border-gray-300 shadow-lg rounded-t-[15px] gap-2 sm:gap-3 lg:gap-4 relative lg:h-[540px]">
            <img
              src={items?.product?.images[0]?.imageUrl.find((image: any) => image.isPrimary === true)?.imageUrl}
              alt="design_home_1"
              className="w-full h-[140px] sm:h-[200px] lg:h-[234px] border rounded-t-[11px] object-center"
              onClick={() => router.push(`/product/${items?.id}?name=${encodeURIComponent(items?.category?.name)}`)}
            />
            <div className="p-[10px] flex flex-col gap-4">
            <h1 className="text-[16px] sm:text-[18px] lg:text-[21px] px-2 sm:px-3 font-semibold">
              {items?.product?.name}
            </h1>
            <div className="flex items-center gap-1 sm:gap-2 px-2">
              <img
                src={items?.product?.seller?.profileImage}
                alt="constructor_person"
                className="w-[12px] h-[18px] sm:w-[13%] sm:h-[38px]  object-center rounded-[50%]"
              />
              <h1 className="text-[12px] sm:text-[14px]">{items?.seller?.sellerName}</h1>
              <h2 className="text-[12px] sm:text-[14px] text-gray-400 font-normal">
                ({items?.product?.seller?.storeDescription})
              </h2>
            </div>

            <div className="ml-3">
            <StarRatings
              rating={items?.product?.reviews[0]?.rating}
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
                  <span className="flex items-center text-[16px] sm:text-[18px] lg:text-[21px] font-semibold">₹ {items?.product?.price}</span>
                </div>
                <div className="text-[#D8A526] flex items-center ">
                  <span className="flex items-center text-[20px] sm:text-[24px] lg:text-[28px] font-semibold">₹ {(items?.product?.price-Math.round(items?.product?.price/100*items?.product?.discounts[0]?.discountValue))}</span>
                </div>
              </div>
              <div className="">
                <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF] p-1 sm:p-2 rounded-[50%] size-13 sm:size-14 lg:w-[60px] lg:h-[60px]" />
              </div>
            </div>
            {/* <div className="absolute top-4 right-4">
              <FaHeart 
                className={`size-4 sm:size-5 cursor-pointer transition-colors   ${
                  wishlistStatus[items.id] ? 'text-yellow-500' : 'text-gray-300'
                }`}
                onClick={() => handleWishlist(items.id, items.wishlist[0]?.productId, items?.wishlist[0]?.id)}
              />
            </div> */}
            </div>
          </div>
          ))}
        </div>

      </div>

    </div>
  );
}