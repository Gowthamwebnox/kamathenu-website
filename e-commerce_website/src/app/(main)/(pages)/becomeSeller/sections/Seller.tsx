"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import "../../../../Style/anite/headerBgImage.css";
import Autoplay from "embla-carousel-autoplay";
import abc from "../../../../../../public/assets/kamathenu Images/BAS/Seller/Vector 2.png";

export default function Seller() {
  const similarProducts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 4 },
    { id: 4 },
  ];
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="relative bg-[url('/assets/kamathenu%20Images/BAS/Seller/seller_bg.jpg')] bg-cover bg-center h-100 md:h-214 opacity-25">
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0  opacity-10"></div>
        </div>

        {/* Content */}
        <div className="absolute top-[12%] flex flex-col gap-3 w-full">
          <div className="text-center">
            <p className="text-[22px] md:text-[32px] text-black  ">
              Testimonials
            </p>
          </div>
          <div className="text-center">
            <p className="text-[26px] md:text-[36px] text-[#EFBB39] font-bold ">
              What Your Sellers Say?
            </p>
          </div>
          <div className="text-center">
            <p className="text-[12px] md:text-[19px] text-[#353333] font-normal ">
              Tap into builders, homeowners, and contractors looking for
              ready-made plans. Tap into builders,
            </p>
          </div>
          <div className="text-center">
            <p className="text-[12px] md:text-[19px] text-[#353333] font-normal ">
              homeowners, and contractors looking for ready-made plans.
            </p>
          </div>
        </div>

        {/* seller information */}
        <div className="absolute top-[42%]  ">
          {similarProducts.length > 0 ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className=" "
            >
              <CarouselContent className="w-[53%] ml-90">
                {similarProducts.map((item) => (
                  <CarouselItem key={item.id} className="ml-12">
                    <div className="border-1 overflow-visible relative">
                      {" "}
                      {/* Added relative here */}
                      <div className="relative">
                        {" "}
                        {/* This is already relative */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-50">
                          {" "}
                          {/* Fixed z-index and added transform */}
                          <img
                            src="/assets/kamathenu Images/BAS/Seller/Vector 2.png"
                            alt=""
                          />
                        </div>
                        <div className="border-1 flex flex-col items-center gap-4 border-gray-100 shadow-2xl p- bg-white">
                          {/* Rest of your content remains the same */}
                          <div className="p-15 flex flex-col gap-4">
                            <div className="text-center text-[23px] font-semibold ">
                              <h1>
                                "A Game Changer for My Architecture Practice!"
                              </h1>
                            </div>
                            <div className="text-[18px] text-[#353333] text-center">
                              <h1>
                                "I used to struggle finding clients for my
                                pre-made house plans. After joining this
                                platform, my designs are now reaching people
                                across the country. It's given me both exposure
                                and steady income every month."
                              </h1>
                            </div>
                            <div className="grid grid-cols-12 items-center">
                              <div className="flex items-center col-span-5">
                                <div className="w-5 h-5 bg-[#EFBB39] rounded-full "></div>
                                <div className="w-full h-[2px] bg-[#BFBFBF]"></div>
                              </div>
                              <div className="col-span-2 flex justify-center">
                                <img
                                  src="/assets/kamathenu Images/BAS/Seller/seller_img1.jpg"
                                  alt="Seller_Image"
                                  className="w-24 h-24 object-center "
                                />
                              </div>
                              <div className="flex items-center col-span-5">
                                <div className="w-full h-[2px] bg-[#BFBFBF]"></div>
                                <div className="w-5 h-5 bg-[#EFBB39] rounded-full flex-shrink-0"></div>
                              </div>
                            </div>
                            <div>
                              <div className="text-center text-[21px] font-semibold">
                                <h1>Divya Prakash</h1>
                              </div>
                              <div className="text-center text-[18px] text-[#353333] font-normal">
                                <h1>Coimbatore</h1>
                              </div>
                            </div>
                          </div>
                          <div className="w-[30%] h-[4px] bg-[#D8A526] width-small-large "></div>
                        </div>
                      </div>
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
        </div>
      </div>
    </>
  );
}
