"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import axiosInstance from "@/app/utils/axiosInstance";
import StarRatings from "react-star-ratings";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const categories = [
  "Residential Designes",
  "Commercial Plans",
  "Industrial Plans",
  "Institutional Plans",
  "Infrastructure Plan",
];

export default function DesignShopPlan() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [designCategoryData, setDesignCategoryData] = useState<any>([]);
  // const [isLoading, setIsLoading] = useState(false);
  
  // const [wishlist, setWishlist] = useState<{[key:string]:boolean}>({});
  
  const [wishlistStatus, setWishlistStatus] = useState<{[key: string]: boolean}>({});
  const [limit,setLimit]=useState(1);
  const router = useRouter();
  const[showMore,setShowMore]=useState(true);
  const [filter, setFilter] = useState({
    planType: '',
    bedroomType: '',
    buildUpArea: '',
    features: '',
  });
  const setFilterData = (field: string, value: string) => {
    setFilter({ ...filter, [field]: value })
  }
  // Trigger on component mount
  useEffect(() => {
    handleDesignHome(activeCategory,limit);
  }, [activeCategory,limit]);

  // Trigger when activeCategory changes



  const handleDesignHome = async (category?: string,limit?:number) => {
    try {
      
      const selectedCategory = category || activeCategory;
      const payload = {
        categoryName: selectedCategory,
        limit: limit,
      };


      const response: any = await axiosInstance.post("category/getDesignAndFeature", payload);
      console.log("🔥🔥🔥🔥🔥🔥activeCategory🔥🔥🔥🔥🔥🔥", selectedCategory);
      console.log("🔥🔥🔥🔥🔥🔥designCategoryData🔥🔥🔥🔥🔥🔥", response.data);
      const initialWishlist:{[key:string]:boolean}={};
      response.data.forEach((item:any)=>{
        initialWishlist[item.id]=item?.wishlist?.[0]?.productId===item?.id;
      })
      setDesignCategoryData(response.data);
      setWishlistStatus(initialWishlist);
      response.data.length!==limit?setShowMore(false):setShowMore(true) 
    } catch (error) {
      console.error("Error fetching design data:", error);
    }
  };
  const handleApplyFilters = () => {
    console.log("🔥🔥🔥🔥🔥🔥filter🔥🔥🔥🔥🔥🔥", filter);
  }
  const handleWishlist = async (productId: string, wishlistProductId: string, wishlistId: string) => {
    console.log("🔥🔥🔥🔥🔥🔥wishlistId🔥🔥🔥🔥🔥🔥", wishlistId)
    console.log("🔥🔥🔥🔥🔥🔥wishlist🔥🔥🔥🔥🔥🔥", wishlistStatus)
    const payload = {
      productId: productId,
      wishlistProductId: wishlistProductId,
      userId: localStorage.getItem("currentUserId"),
      wishlistId: wishlistId // with the help of this we can remove the product from the wishlist
    }
    try {
      if (wishlistStatus[productId] === true) {
        console.log("🎊🎊😎😎🎊🎊")
        const response: any = await axiosInstance.post("product/removewishlistProduct", payload)
        console.log("🔥🔥🔥🔥🔥🔥response🔥🔥🔥🔥🔥🔥", response)
        console.log("productId", productId)
        setWishlistStatus(prev => ({
          ...prev,
          [productId]: false
        }));
        payload.wishlistId='';
        console.log("🔥🔥🔥🔥🔥🔥wishlistStatus🔥🔥🔥🔥🔥🔥", wishlistStatus)
      } else {
        console.log("🔥🔥🔥🔥🔥🔥payload🔥🔥🔥🔥🔥🔥", payload)
        const response: any = await axiosInstance.post("product/addWishlistProduct", payload)
        console.log("🔥🔥🔥🔥🔥🔥response🔥🔥🔥🔥🔥🔥", response)
        // Update local state to remove from wishlist
        setWishlistStatus(prev => ({
          ...prev,
          [productId]: true
        }));
      }
    } catch (error) {
      console.error("Error handling wishlist:", error);
    }
  }

  return (
    <div className="bg-white text-black py-8 px-4 md:px-8 my-[2rem] mb-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-[#1A1A1A] text-2xl md:text-4xl font-semibold px-4 py-[2rem]">
            Design for You
          </h2>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          defaultValue={categories[0]}
        >
          <div className="flex items-center justify-between">
            <div>
              <TabsList className="flex flex-wrap justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-sm sm:text-base md:text-lg">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <div className="flex items-center gap-4  rounded-[8px]">
              <div className="">
                <Dialog >
                  <DialogTrigger asChild>
                    <Button className="cursor-pointer bg-[#EACD3C] text-black border-transparent text-[16px] font-semibold border-0 hover:bg-[#EACD3C] hover:text-black px-7 py-6 rounded-[8px]">
                      Filter by
                      <div>
                <img
                  src="/assets/kamathenu Images/ShopPlan/Vector (1).png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
              </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]  border-3 border-[#D8A526]">
                    <DialogHeader>
                      <DialogTitle>Filter Designs</DialogTitle>
                      {/* <DialogDescription>
                        Apply filters to find the perfect design for your needs.
                      </DialogDescription> */}
                    </DialogHeader>
                    <div className="grid grid-cols-4 gap-y-6 gap-4 py-4">
                      <div className=" col-span-2 flex flex-col gap-2">
                        <Label htmlFor="planType">Plan Type</Label>
                        <Select value={filter.planType} onValueChange={(value) => setFilterData('planType', value)}>
                          <SelectTrigger className=" border-1 border-black">
                            <SelectValue placeholder="Select your plan type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Residential Designes">Residential Designes</SelectItem>
                            <SelectItem value="Commercial Plans">Commercial Plans</SelectItem>
                            <SelectItem value="Industrial Plans">Industrial Plans</SelectItem>
                            <SelectItem value="Institutional Plans">Institutional Plans</SelectItem>
                            <SelectItem value="Infrastructure Plan">Infrastructure Plan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div><div className=" col-span-2 flex flex-col gap-2">
                        <Label htmlFor="price-range">Room Types</Label>
                        <Select value={filter.bedroomType} onValueChange={(value) => setFilterData('bedroomType', value)}>
                          <SelectTrigger className="w-[180px] border-1 border-black ">
                            <SelectValue placeholder=" Bedrooms" />
                          </SelectTrigger >
                          <SelectContent className="border-white">
                            <SelectItem value="1BHK">1BHK</SelectItem>
                            <SelectItem value="2BHK">2BHK</SelectItem>
                            <SelectItem value="3BHK">3BHK</SelectItem>
                            <SelectItem value="4BHK">4BHK</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className=" col-span-2 flex flex-col gap-2">
                        <Label htmlFor="Features">Features</Label>
                        <Select value={filter.features} onValueChange={(value) => setFilterData('features', value)}>
                          <SelectTrigger className="w-[180px] border-1 border-black">
                            <SelectValue placeholder="Select your features" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Car Parking">Car Parking</SelectItem>
                            <SelectItem value="Balcony">Balcony</SelectItem>
                            <SelectItem value="Terrace Garden">Terrace Garden</SelectItem>
                            <SelectItem value="Open Kitchen">Open Kitchen</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className=" col-span-2 flex flex-col gap-2">
                        <Label htmlFor="Features">Build-Up-Area</Label>
                        <Select value={filter.buildUpArea} onValueChange={(value) => setFilterData('buildUpArea', value)}>
                          <SelectTrigger className="w-[180px] border-1 border-black">
                            <SelectValue placeholder="Select your features" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Slider">Slider</SelectItem>
                            <SelectItem value="min-max input">min-max input</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter className="justify-center">
                      <DialogClose asChild  >
                        <Button className="bg-white text-[#D8A526] border hover:bg-white hover:text-[#D8A526] font-semibold cursor-pointer" style={{ borderColor: "#D8A526" }}>Cancel</Button>
                      </DialogClose>
                      <Button type="submit" className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] font-semibold cursor-pointer " style={{ borderColor: "#D8A526" }} onClick={() => handleApplyFilters()}>Apply Filters</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              
            </div>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 sm:gap-6 lg:gap-5 xl:gap-8 mb-8 ">
                {designCategoryData.map((items: any, index: any) => (
                  <div  key={index + 1} className="flex cursor-pointer flex-col border border-gray-300 shadow-lg rounded-t-[15px] gap-2 sm:gap-3 lg:gap-4 relative lg:h-[540px]">
                    <img
                      src={items?.images[0]?.imageUrl.find((image: any) => image.isPrimary === true)?.imageUrl}
                      alt="design_home_1"
                      className="w-full h-[140px] sm:h-[200px] lg:h-[234px] border rounded-t-[11px] object-center "
                      onClick={() => router.push(`/product/${items?.id}?name=${encodeURIComponent(items?.category?.name)}`)}
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
                      <h1 className="text-[12px] sm:text-[14px]">{items?.seller?.sellerName}</h1>
                      <h2 className="text-[12px] sm:text-[14px] text-gray-400 font-normal">
                        ({items.seller.storeDescription})
                      </h2>
                    </div>

                    <div className="ml-3">
                    <StarRatings
                      rating={items?.reviews[0]?.rating}
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
                          <span className="flex items-center text-[16px] sm:text-[18px] lg:text-[21px] font-semibold">₹ {items?.price}</span>
                        </div>
                        <div className="text-[#D8A526] flex items-center ">
                          <span className="flex items-center text-[20px] sm:text-[24px] lg:text-[28px] font-semibold">₹ {(items?.price-Math.round(items?.price/100*items?.discounts[0]?.discountValue))}</span>
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


              


            </TabsContent>
          ))}
        </Tabs>
        <div className="flex justify-center">
          {showMore && <Button className="bg-[#D8A526] text-white border  hover:bg-white hover:text-[#D8A526] font-semibold py-3 lg:py-6  " style={{ borderColor: '#D8A526' }}>
                <div className="flex items-center gap-1 cursor-pointer" onClick={()=>setLimit(limit+5)}><span className="text-[18px] text-white"  >See More</span> <IoIosArrowRoundForward className=" size-8 sm:size-12  font-bold "  /></div>
              </Button>}
        </div>
      </div>
    </div>
  );
}


