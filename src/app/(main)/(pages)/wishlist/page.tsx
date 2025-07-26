
'use client'
import Header from "@/app/components/layout/Header";
import axiosInstance from "@/app/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

export default function Wishlist() {

  const [wishlistData, setWishlistData] = useState<any[]>([]);
  const router = useRouter()
  useEffect(() => {
    getWishlistData()
  }, [])
  const getWishlistData = async () => {
    const localData= localStorage.getItem('userData-storage')
    const userData=JSON.parse(localData||'{}')
    try {
      const payload = {
        userId: userData?.state.userData.userId``
      }
      const response: any = await axiosInstance.post('product/fetchWishlist', payload)
      setWishlistData(response.data.wishlist)
      console.log(response.data.wishlist)
    }
    catch (err) {
      console.log(err)
    }
  }
  return (

    <div>
      <Header headerColor={['gray', 'white']} />

      <div className="w-full mt-30 p-34">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 ">
          {wishlistData.map((items: any, index: any) => (
            <div key={index + 1} className="flex cursor-pointer flex-col border border-gray-300 rounded-t-[15px] gap-2 sm:gap-3 h-[530px] lg:gap-4 relative">
              <img
                src={items.product?.images?.[0]?.imageUrl?.[0] || '/assets/kamathenu Images/Design/design_home_1.jpg'}
                alt="design_home_1"
                className="w-full h-[140px] sm:h-[200px] lg:h-[234px] border rounded-t-[11px] object-cover"
                onClick={() => router.push(`/product/${items.product?.id}?name=${encodeURIComponent(items.product?.category?.name || '')}`)}
              />
              <div className="p-[12px] flex flex-col gap-4">

                <h1 className="text-[16px] sm:text-[18px] lg:text-[21px] px-2 sm:px-3 font-semibold">
                  {items.product?.name || 'Product Name'}
                </h1>
                <div className="flex items-center gap-1 sm:gap-2 px-2">
                  <img
                    src={items.product?.seller?.profileImage || '/assets/kamathenu Images/Design/constructor_person.png'}
                    alt="constructor_person"
                    className="w-[12px] h-[18px] sm:w-[13%] sm:h-[38px] object-cover object-center rounded-[50%]"
                  />
                  <h1 className="text-[12px] sm:text-[14px]">{items.product?.seller?.sellerName || 'Unknown Seller'}</h1>
                  <h2 className="text-[12px] sm:text-[14px] text-gray-400 font-normal">
                    ({items.product?.seller?.storeDescription || 'No description'})
                  </h2>
                </div>

                <div className="ml-3">
                <StarRatings
                  rating={items.product?.reviews?.[0]?.rating || 0}
                  starRatedColor='#EACD3C'
                  numberOfStars={5}
                  name='rating'
                  starDimension="22px"
                  starSpacing="1px"
                />
                </div>
                <div className="flex p-2 ml-2 gap-2 sm:gap-4 lg:gap-18 items-center justify-between">
                  <div>
                    <div className="text-gray-400 line-through flex items-center">
                      <span className="flex items-center text-[16px] sm:text-[18px] lg:text-[21px] font-semibold">₹ {items.product?.variants?.[0]?.discountPrice || 0}</span>
                    </div>
                    <div className="text-[#D8A526] flex items-center ">
                      <span className="flex items-center text-[20px] sm:text-[24px] lg:text-[28px] font-semibold">₹ {items.product?.variants?.[0]?.price || 0}</span>
                    </div>
                  </div>
                  <div className="">
                    <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF] p-1 sm:p-2 rounded-[50%] size-13 sm:size-14 lg:size-12" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}