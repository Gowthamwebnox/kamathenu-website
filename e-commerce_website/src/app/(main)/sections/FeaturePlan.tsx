'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosStar, IoIosArrowRoundForward } from "react-icons/io";

const FeaturePlan = () => {
  const route=useRouter();
  return (
    <div className="bg-white text-black py-8 px-4 md:px-8 my-[2rem] mb-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-[#1A1A1A] text-2xl md:text-4xl font-semibold px-4 py-[2rem]">
            Featured Plans
          </h2>
        </div>

        <div className="flex flex-row items-center gap-12 mb-8" >
          <div className="flex flex-col border border-gray-300 rounded-t-[15px] gap-4 hover:cursor-pointer">
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
                  <span className="flex items-center text-[21px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
                <div className="text-[#D8A526] flex items-center">
                  <span className="flex items-center text-[28px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
              </div>
              <div className="">
                <img
                  src="/assets/kamathenu Images/Design/shopNow.png"
                  alt=""
                  className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12"
                />
              </div>
            </div>
            <div className="absolute">
              <FaHeart className="relative top-5 size-5 text-white left-76" />
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
                  <span className="flex items-center text-[21px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
                <div className="text-[#D8A526] flex items-center">
                  <span className="flex items-center text-[28px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
              </div>
              <div className="">
                <img
                  src="/assets/kamathenu Images/Design/shopNow.png"
                  alt=""
                  className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12"
                />
              </div>
            </div>
            <div className="absolute">
              <FaHeart className="relative top-5 size-5 text-white left-77" />
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
                  <span className="flex items-center text-[21px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
                <div className="text-[#D8A526] flex items-center">
                  <span className="flex items-center text-[28px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
              </div>
              <div className="">
                <img
                  src="/assets/kamathenu Images/Design/shopNow.png"
                  alt=""
                  className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12"
                />
              </div>
            </div>
            <div className="absolute">
              <FaHeart className="relative top-5 size-5 text-white left-77" />
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
                  <span className="flex items-center text-[21px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
                <div className="text-[#D8A526] flex items-center">
                  <span className="flex items-center text-[28px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
              </div>
              <div className="">
                <img
                  src="/assets/kamathenu Images/Design/shopNow.png"
                  alt=""
                  className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12"
                />
              </div>
            </div>
            <div className="absolute">
              <FaHeart className="relative top-5 size-5 text-white left-77" />
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
                  <span className="flex items-center text-[21px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
                <div className="text-[#D8A526] flex items-center">
                  <span className="flex items-center text-[28px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
              </div>
              <div className="">
                <img
                  src="/assets/kamathenu Images/Design/shopNow.png"
                  alt=""
                  className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12"
                />
              </div>
            </div>
            <div className="absolute">
              <FaHeart className="relative top-5 size-5 text-white left-77" />
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
                  <span className="flex items-center text-[21px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
                <div className="text-[#D8A526] flex items-center">
                  <span className="flex items-center text-[28px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
              </div>
              <div className="">
                <img
                  src="/assets/kamathenu Images/Design/shopNow.png"
                  alt=""
                  className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12"
                />
              </div>
            </div>
            <div className="absolute">
              <FaHeart className="relative top-5 size-5 text-white left-77" />
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
                  <span className="flex items-center text-[21px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
                <div className="text-[#D8A526] flex items-center">
                  <span className="flex items-center text-[28px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
              </div>
              <div className="">
                <img
                  src="/assets/kamathenu Images/Design/shopNow.png"
                  alt=""
                  className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12"
                />
              </div>
            </div>
            <div className="absolute">
              <FaHeart className="relative top-5 size-5 text-white left-77" />
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
                  <span className="flex items-center text-[21px] font-semibold">
                    ₹ 7599.00
                  </span>
                </div>
                <div className="text-[#D8A526] flex items-center">
                  <span className="flex items-center text-[28px] font-semibold">
                    ₹ 4599.00
                  </span>
                </div>
              </div>
              <div className="">
                <img
                  src="/assets/kamathenu Images/Design/shopNow.png"
                  alt=""
                  className="bg-[#FFFAEF]   p-2 rounded-[50%] size-12"
                />
              </div>
            </div>
            <div className="absolute">
              <FaHeart className="relative top-5 size-5 text-white left-77" />
            </div>
          </div>
        </div>

        <Button
          className="bg-[#D8A526] text-white border ml-[44%] hover:bg-white hover:text-[#D8A526] font-semibold py-6 "
          style={{ borderColor: "#D8A526" }}
        >
          <div className="flex items-center gap-1 ">
            <span className="text-[19px]">Show More</span>{" "}
            <IoIosArrowRoundForward className=" size-12" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default FeaturePlan;
