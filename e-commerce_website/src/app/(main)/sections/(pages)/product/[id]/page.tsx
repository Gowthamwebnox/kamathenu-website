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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const headerColor: [string, string] = ["white", "black"];

const ProductDetails = () => {
  const tabs = [
    "Design Information",
    "Designer Details",
    "Package Details",
    "Delivery Details",
    "Reviews",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
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
      <Header headerColor={["white","black"]} />

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

          {/* Product Details */}
        <div className="bg-white rounded-lg shadow  border-1 border-gray-400 m-12">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="border-b border-gray-300 mb-6">
          {tabs.map((t) => (
            <TabsTrigger
              key={t}
              value={t}
              className={`text-gray-500 px-4 py-2 font-medium ${
                activeTab === t ? "text-yellow-600 border-b-2 border-yellow-600 " : ""
              }`}
            >
              {t}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((t) => (
          <TabsContent key={t} value={t}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-11 pt-3 pb-11">
              {/* Left Column */}
              <div className="ml-15">
                {t === "Design Information" && (
                  <>
                    <h3 className="text-lg font-semibold mb-4">About this Design:</h3>
                    <ul className="list-disc list-inside w-[90%] text-gray-700 space-y-2">
                      {Array(4)
                        .fill(
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
                        )
                        .map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                    </ul>
                  </>
                )}

                {t === "Designer Details" && (
                  <>
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src="/assets/kamathenu Images/Design/constructor_person.png"
                        alt="Designer"
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Dinesh Kumar</h3>
                        <p className="text-gray-500 text-sm">(2 Yrs of Exp)</p>
                      </div>
                    </div>
                    <h4 className="font-semibold text-[21px] mb-2">About this Designer:</h4>
                    <p className=" mb-4 text-[18px] font-normal text-gray-400">
                      John Smith is an award‑winning architect specializing in minimalistic home designs blending nature and space.
                    </p>
                    <h4 className="font-medium mb-2">Tools:</h4>
                    <div className="flex space-x-2">
                      <img src="/assets/acad-icon.png" alt="AutoCAD" className="w-8 h-8" />
                      <img src="/assets/revit-icon.png" alt="Revit" className="w-8 h-8" />
                      <img src="/assets/sketchup-icon.png" alt="SketchUp" className="w-8 h-8" />
                    </div>
                  </>
                )}

                {t === "Package Details" && (
                  <>
                    <h4 className="font-medium mb-4 text-[21px]">Package file Details:</h4>
                    <p className="text-gray-700 mb-2 text-[18px] font-normal">
                      John Smith is an award‑winning architect specializing in minimalistic home designs blending nature and space. when an unknown printer took a galley of type and scrambled it to make.
                    </p>
                    <p className="text-gray-700 mb-2 text-[18px] font-normal">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.
                    </p>
                  </>
                )}

                {t === "Delivery Details" && (
                  <>
                    <h4 className="font-semibold mb-4 text-[21px]">Package Delivery Details:</h4>
                    <p className="text-gray-700 mb-2 text-[18px] font-normal">
                      John Smith is an award‑winning architect specializing in minimalistic home designs blending nature and space. when an unknown printer took a galley of type and scrambled it to make.
                    </p>
                    <p className="text-gray-700 text-[18px] font-normal">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.
                    </p>
                  </>
                )}

                {t === "Reviews" && (
                  <>
                  <h1 className=" font-semibold mb-4 text-[21px]">Customer Reviews</h1>
                    <div className="flex items-center space-x-2 mb-4">
                      
                       
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <IoIosStar key={i} className="text-yellow-500 w-5 h-5" />
                          ))}
                      </div>
                      <span className="text-gray-600">(4.8 out of 5)</span>
                    </div>
                    <p className="text-gray-500 mb-4">4579 reviews</p>
                    {["5", "4", "3", "2", "1"].map((score) => (
                      <div key={score} className="flex items-center mb-2 text-gray-600">
                        <span className="w-4">{score}</span>
                        <div className="h-2 flex-1 bg-gray-200 rounded mx-2 overflow-hidden">
                          <div
                            className={`h-full bg-yellow-400`}
                            style={{ width: score === "5" ? "78%" : score === "4" ? "46%" : score === "3" ? "35%" : score === "2" ? "20%" : "10%" }}
                          />
                        </div>
                        <span>{score === "5" ? "78%" : score === "4" ? "46%" : score === "3" ? "35%" : score === "2" ? "20%" : "10%"}</span>
                      </div>
                    ))}
                    <button className="mt-4 px-4 py-2 border border-gray-800 rounded text-gray-800">Add to Your Review</button>
                  </>
                )}
              </div>

              {/* Right Column */}
              <div className="ml-15">
                {t === "Design Information" && (
                  <>
                    <h3 className="text-lg font-semibold  mb-4">Design Features:</h3>
                    <ul className="list-disc list-inside w-[90%] text-gray-700 space-y-2">
                      {Array(4)
                        .fill(
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
                        )
                        .map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                    </ul>
                  </>
                )}

                {t === "Designer Details" && (
                  <>
                    <h4 className="font-medium mb-4">Expertise:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {[
                        "Expert in Modern Minimalist Villas",
                        "Specializes in Luxury Traditional Homes",
                        "Expertise in Sustainable and Green Building Design",
                        "Specialist in Smart Home Architectural Designs",
                        "Expert in Scandinavian and Contemporary Home Interiors",
                      ].map((exp, i) => (
                        <li key={i}>{exp}</li>
                      ))}
                    </ul>
                  </>
                )}

                {t === "Package Details" && (
                  <>
                    <h4 className="font-medium mb-4">What do you Get?</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {Array(4)
                        .fill(
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
                        )
                        .map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                    </ul>
                  </>
                )}

                {t === "Delivery Details" && (
                  <>
                    <h4 className="font-medium mb-4">Delivery Instructions:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {Array(4)
                        .fill(
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been."
                        )
                        .map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                    </ul>
                  </>
                )}

                {t === "Reviews" && (
                  // Placeholder to show 2 review cards side by side — you can expand this
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 italic mb-2">
                          “John Smith is an award‑winning architect specializing in minimalistic home designs blending nature and space….”
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, j) => (
                                <IoIosStar key={j} className="text-yellow-500 w-4 h-4" />
                              ))}
                          </div>
                          <span className="text-gray-800 font-medium">Ajay Kumar</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
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
