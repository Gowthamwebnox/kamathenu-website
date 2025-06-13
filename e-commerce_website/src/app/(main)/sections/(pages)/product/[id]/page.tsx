"use client";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import React, { useState } from "react";

import { IoIosStar } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FaHeart } from "react-icons/fa";

const headerColor: [string, string] = ["white", "black"];

const ProductDetails = () => {
  const [similarProducts, setSimilarProducts] = useState([
    {
      id: 1,
      img: "/assets/kamathenu Images/Design/design_home_1.jpg",
      alterName: "design_home_1",
      title: "Contemporary Duplex with Stylish Interiors",
      constructorImage: "/assets/kamathenu Images/Design/constructor_person.png",
      constructorName: "Dinesh Kumar",
      constructorExperience: "(2 Yrs of Exp)",
      rating: "IoIosStar",
      price: "₹ 7599.00",
      discountPrice: "₹ 4599.00",
      buySymbol: "/assets/kamathenu Images/Design/shopNow.png",
    },
    {
      id: 1,
      img: "/assets/kamathenu Images/Design/design_home_1.jpg",
      alterName: "design_home_1",
      title: "Contemporary Duplex with Stylish Interiors",
      constructorImage: "/assets/kamathenu Images/Design/constructor_person.png",
      constructorName: "Dinesh Kumar",
      constructorExperience: "(2 Yrs of Exp)",
      rating: "IoIosStar",
      price: "₹ 7599.00",
      discountPrice: "₹ 4599.00",
      buySymbol: "/assets/kamathenu Images/Design/shopNow.png",
    },
    {
      id: 1,
      img: "/assets/kamathenu Images/Design/design_home_1.jpg",
      alterName: "design_home_1",
      title: "Contemporary Duplex with Stylish Interiors",
      constructorImage: "/assets/kamathenu Images/Design/constructor_person.png",
      constructorName: "Dinesh Kumar",
      constructorExperience: "(2 Yrs of Exp)",
      rating: "IoIosStar",
      price: "₹ 7599.00",
      discountPrice: "₹ 4599.00",
      buySymbol: "/assets/kamathenu Images/Design/shopNow.png",
    },
    {
      id: 1,
      img: "/assets/kamathenu Images/Design/design_home_1.jpg",
      alterName: "design_home_1",
      title: "Contemporary Duplex with Stylish Interiors",
      constructorImage: "/assets/kamathenu Images/Design/constructor_person.png",
      constructorName: "Dinesh Kumar",
      constructorExperience: "(2 Yrs of Exp)",
      rating: "IoIosStar",
      price: "₹ 7599.00",
      discountPrice: "₹ 4599.00",
      buySymbol: "/assets/kamathenu Images/Design/shopNow.png",
    },
    {
      id: 1,
      img: "/assets/kamathenu Images/Design/design_home_1.jpg",
      alterName: "design_home_1",
      title: "Contemporary Duplex with Stylish Interiors",
      constructorImage: "/assets/kamathenu Images/Design/constructor_person.png",
      constructorName: "Dinesh Kumar",
      constructorExperience: "(2 Yrs of Exp)",
      rating: "IoIosStar",
      price: "₹ 7599.00",
      discountPrice: "₹ 4599.00",
      buySymbol: "/assets/kamathenu Images/Design/shopNow.png",
    },
    {
      id: 1,
      img: "/assets/kamathenu Images/Design/design_home_1.jpg",
      alterName: "design_home_1",
      title: "Contemporary Duplex with Stylish Interiors",
      constructorImage: "/assets/kamathenu Images/Design/constructor_person.png",
      constructorName: "Dinesh Kumar",
      constructorExperience: "(2 Yrs of Exp)",
      rating: "IoIosStar",
      price: "₹ 7599.00",
      discountPrice: "₹ 4599.00",
      buySymbol: "/assets/kamathenu Images/Design/shopNow.png",
    },
  ]);

  return (
    <>
      <Header headerColor={headerColor} />

      {/* ✅ Wrap whole content in overflow-x-hidden to avoid horizontal scroll */}
      <div className="overflow-x-hidden">
        <div className="m-20 ml-51 grid grid-cols-5 items-center gap-x-19 p-10">
          <div className="w-fit col-span-1 flex flex-col gap-5">
            <div className="w-[35%] border rounded-[3px]">
              <img
                src="/assets/kamathenu Images/ParticularProduct/productDetail_1 (1).png"
                alt=""
                className="border rounded-[3px]"
              />
            </div>
            <div className="w-[35%] border rounded-[3px]">
              <img
                src="/assets/kamathenu Images/ParticularProduct/productDetail_1 (3).png"
                alt=""
                className="border rounded-[3px]"
              />
            </div>
            <div className="w-[35%] border rounded-[3px]">
              <img
                src="/assets/kamathenu Images/ParticularProduct/productDetail_1 (2).png"
                alt=""
                className="border rounded-[3px]"
              />
            </div>
          </div>

          <div className="w-full col-span-2 relative right-[29%]">
            <img
              src="/assets/kamathenu Images/Design/design_home_1.jpg"
              alt="design_home_1"
              className="h-[504px] border rounded-[11px]"
            />
          </div>

          <div className="col-span-2 relative right-42 flex flex-col gap-5">
            <h1 className="text-[33px] font-semibold">
              Modern 3BHK Plan with Open Layout
            </h1>
            <div className="flex items-center gap-3 px-2">
              <img
                src="/assets/kamathenu Images/Design/constructor_person.png"
                alt="constructor_person"
                className="w-[11%] h-[31px] rounded-[50%]"
              />
              <h1 className="text-[19px]">Dinesh Kumar</h1>
              <h2 className="text-[19px] text-gray-400 font-normal">
                (2 Yrs of Exp)
              </h2>
            </div>

            <div className="flex px-2 gap-1 items-center">
              {[...Array(3)].map((_, i) => (
                <IoIosStar key={i} className="text-[#EACD3C] size-9" />
              ))}
              <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
            </div>

            <div>
              <div className="text-gray-400 line-through flex items-center text-[27px] font-normal">
                ₹ 7599.00
              </div>
              <div className="text-[#D8A526] flex items-center text-[33px] font-semibold">
                ₹ 4599.00
              </div>
            </div>

            <div className="w-[73%]">
              <p className="text-[19px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-[#D86A26] w-30 text-[19px] p-7 font-normal text-white border hover:bg-white hover:text-[#D8A526]"
                style={{ borderColor: "#D8A526" }}
              >
                Order Now
              </Button>
              <Button
                className="bg-[#D8A526] w-40 text-[19px] p-7 text-white border hover:bg-white hover:text-[#D8A526]"
                style={{ borderColor: "#D8A526" }}
              >
                Add to Cart <MdOutlineShoppingCart className="size-6 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* ✅ SIMILAR PRODUCTS CAROUSEL */}

        <div className="overflow-x-hidden">
            <h1 className="font-semibold ml-29 text-[#1A1A1A] text-[30px] mb-4">
          You Might be Interested in these Designs
          {similarProducts.length > 0 ? (
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full "
          >
            <CarouselContent className="ml-4 mt-6 w-[70%]">
              {similarProducts.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/4 flex items-stretch"
                >
                  <div className="flex flex-col rounded-t-[15px] border border-gray-400 gap-4 relative">
                    <img
                      src={item.img}
                      alt={item.alterName}
                      className="w-full h-[234px] border rounded-t-[11px]"
                    />
                    <h1 className="text-[21px] px-3 font-semibold">
                      {item.title}
                    </h1>
                    <div className="flex items-center gap-3 px-2">
                      <img
                        src={item.constructorImage}
                        alt="constructor_person"
                        className="w-[13%] h-[21px] rounded-full"
                      />
                      <h1 className="text-[14px]">{item.constructorName}</h1>
                      <h2 className="text-[14px] text-gray-400 font-normal">
                        {item.constructorExperience}
                      </h2>
                    </div>
                    <div className="flex px-2 gap-1 items-center">
                      {[...Array(4)].map((_, i) => (
                        <IoIosStar key={i} className="text-[#EACD3C] size-4" />
                      ))}
                      <h1 className="ml-1 text-gray-400 text-[15px]">(4.8)</h1>
                    </div>
                    <div className="flex p-2 gap-6 items-center">
                      <div>
                        <div className="text-gray-400 line-through text-[21px] font-semibold">
                          ₹ 7599.00
                        </div>
                        <div className="text-[#D8A526] text-[28px] font-semibold">
                          ₹ 4599.00
                        </div>
                      </div>
                      <img
                        src={item.buySymbol}
                        alt=""
                        className="bg-[#FFFAEF] ml-12 p-2 rounded-full size-12"
                      />
                    </div>
                    <FaHeart className="absolute top-2 right-2 size-6 text-white" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* ✅ Show only the Previous button (no next) */}
            
          </Carousel>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading similar products...</p>
          </div>
        )}
        </h1>

        </div>
        

        
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
