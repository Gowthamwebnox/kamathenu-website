"use client";

import { useState} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

const categories = [
  "Residential Designs",
  "Commercial Plans",
  "Industrial Plan",
  "Institutional Plan",
  "Infrastructure Plan",
];



export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const router = useRouter();
  // const [favs,setFavs]=useState(
  //   {productId:'',
  //     favsStatus:false
  //   }
  // )
  // const [favsProducts, setFavsProducts]=useState([])
  // const handleFavs=()=>{

  // }

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
          <TabsList className="px-60 ml-20 gap-12" >
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="flex flex-row items-center gap-12 mb-8">
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 hover:cursor-pointer " onClick={()=>{router.push(`/product/${1}`)}}>
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart className="relative top-5 size-5 text-[#D8A526]  left-74" />
                  </div>
                </div>
                {/* second */}
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
                {/* third */}
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
                {/* fouth */}
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-12 mb-8">
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
                {/* second */}
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
                {/* third */}
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
                {/* fouth */}
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-12 mb-8">
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
                {/* second */}
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
                {/* third */}
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
                {/* fouth */}
                <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 ">
                  <img
                    src="/assets/kamathenu Images/Design/design_home_1.jpg"
                    alt="design_home_1"
                    className="w-[100%] h-[234px] border rounded-t-[11px]"
                  />
                  <h1 className="text-[21px] px-3 font-semibold ">
                    Modern 3BHK Plan with Open Layout
                  </h1>
                  <div className="flex items-center gap-2 px-2">
                    <img
                      src="/assets/kamathenu Images/Design/constructor_person.png"
                      alt="constructor_person"
                      className="w-[13%] h-[21px]  rounded-[50%]"
                    />
                    <h1 className="text-[14px] ">Dinesh Kumar</h1>
                    <h2 className="text-[14px] text-gray-400 font-normal ">
                      (2 Yrs of Exp)
                    </h2>
                  </div>
                  <div className="flex px-2 gap-1 items-center">
                    <IoIosStar className="text-[#EACD3C] size-4 " />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <IoIosStar className="text-[#EACD3C] size-4" />
                    <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                  </div>
                  <div className="flex p-2 gap-18 items-center">
                    <div>
                      <div className="text-gray-400 line-through flex items-center">
                        <span className="flex items-center text-[21px] font-semibold">₹ 7599.00</span>
                      </div>
                      <div className="text-[#D8A526] flex items-center">
                        
                        <span className="flex items-center text-[28px] font-semibold">₹ 7599.00</span>
                      </div>
                    </div>
                    <div className="">
                        <img src="/assets/kamathenu Images/Design/shopNow.png" alt="" className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12" />
                    </div>
                  </div>
                  <div className="absolute">
                    <FaHeart   className="relative top-5 size-5 text-white left-74"/>
                  </div>
                </div>
              </div>
              <Button className="bg-[#D8A526] text-white border ml-[44%] hover:bg-white hover:text-[#D8A526] font-semibold py-6 " style={{ borderColor: '#D8A526' }}>
                         <div className="flex items-center gap-1 "><span className="text-[19px]" >Show More</span> <IoIosArrowRoundForward   className=" size-12"/></div>
            </Button>
              
              
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
