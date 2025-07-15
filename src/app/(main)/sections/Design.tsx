"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import axiosInstance from "@/app/utils/axiosInstance";
import StarRatings from 'react-star-ratings';
import { Button } from "@/components/ui/button";

const categories = [
  "Residential Designes",
  "Commercial Plans",
  "Industrial Plans",
  "Institutional Plans",
  "Infrastructure Plan",
];


export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [designCategoryData, setDesignCategoryData] = useState<any>([]);
  // const [isLoading, setIsLoading] = useState(false);

  // Trigger on component mount
  useEffect(() => {
    handleDesignHome();
  }, []);

  // Trigger when activeCategory changes
  useEffect(() => {
    if (activeCategory) {
      handleDesignHome();
    }
  }, [activeCategory]);


  const handleDesignHome = async (category?: string) => {
    try {
      // setIsLoading(true);
      const selectedCategory = category || activeCategory;
      const payload = {
        categoryName: selectedCategory,
        limit: 1
      };

      const response: any = await axiosInstance.post("category/getDesignAndFeature", payload);
      console.log("🔥🔥🔥🔥🔥🔥activeCategory🔥🔥🔥🔥🔥🔥", selectedCategory);
      console.log("🔥🔥🔥🔥🔥🔥designCategoryData🔥🔥🔥🔥🔥🔥", response.data);
      setDesignCategoryData(response.data)

    } catch (error) {
      console.error("Error fetching design data:", error);
    }
  }

  const router = useRouter();
  // const [favs,setFavs]=useState(
  //   {productId:'',
  //     favsStatus:false
  //   }
  // )
  // const [favsProducts, setFavsProducts]=useState([])
  // const handleFavs=()=>{

  // }
  console.log("🔥🔥🔥🔥🔥🔥designCategoryData🔥🔥🔥🔥🔥🔥", designCategoryData)

  return (
    <div className="bg-white text-black py-8 px-4 md:px-8 my-[2rem] mb-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-[#1A1A1A] text-2xl md:text-4xl font-semibold px-4 py-[2rem]">
            Design for You
          </h2>
        </div>

        <Tabs className=""
          value={activeCategory}
          onValueChange={setActiveCategory}
          defaultValue={categories[0]}
        >
          <TabsList className="flex flex-wrap justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12" >
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm sm:text-base md:text-lg">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8">
                {designCategoryData.map((items: any, index: any) => (
                  <div  key={index + 1} onClick={() => router.push(`/product/${items.id}?name=${encodeURIComponent(items.category.name)}`)} className="flex cursor-pointer flex-col border border-gray-300 rounded-t-[15px] gap-2 sm:gap-3 lg:gap-4 relative">
                    <img
                      src={items.images[0].imageUrl[0]}
                      alt="design_home_1"
                      className="w-full h-[140px] sm:h-[200px] lg:h-[234px] border rounded-t-[11px] object-cover"
                    />
                    <h1 className="text-[16px] sm:text-[18px] lg:text-[21px] px-2 sm:px-3 font-semibold">
                      {items.name}
                    </h1>
                    <div className="flex items-center gap-1 sm:gap-2 px-2">
                      <img
                        src={items.seller.profileImage}
                        alt="constructor_person"
                        className="w-[12px] h-[18px] sm:w-[13%] sm:h-[38px] object-cover object-center rounded-[50%]"
                      />
                      <h1 className="text-[12px] sm:text-[14px]">{items.seller.sellerName}</h1>
                      <h2 className="text-[12px] sm:text-[14px] text-gray-400 font-normal">
                        ({items.seller.storeDescription})
                      </h2>
                    </div>

                    <StarRatings
                      rating={items.reviews[0].rating}
                      starRatedColor='#EACD3C'
                      numberOfStars={5}
                      name='rating'
                      starDimension="35px"
                      starSpacing="1px"
                    />
                    <div className="flex p-2 gap-2 sm:gap-4 lg:gap-18 items-center justify-between">
                      <div>
                        <div className="text-gray-400 line-through flex items-center">
                          <span className="flex items-center text-[16px] sm:text-[18px] lg:text-[21px] font-semibold">₹ {items?.discountPrice}</span>
                        </div>
                        <div className="text-[#D8A526] flex items-center ">
                          <span className="flex items-center text-[20px] sm:text-[24px] lg:text-[28px] font-semibold">₹ {items?.price}</span>
                        </div>
                      </div>
                      <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF] p-1 sm:p-2 rounded-[50%] size-13 sm:size-14 lg:size-12" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <FaHeart className="size-4 sm:size-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>


              <Button className="bg-[#D8A526] text-white border ml-[44%] hover:bg-white hover:text-[#D8A526] font-semibold py-6 " style={{ borderColor: '#D8A526' }}>
                <div className="flex items-center gap-1 "><span className="text-[19px]" >Show More</span> <IoIosArrowRoundForward className=" size-12" /></div>
              </Button>


            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
