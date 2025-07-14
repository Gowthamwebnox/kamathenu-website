"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import "../../../../Style/anite/headerBgImage.css";
import Autoplay from "embla-carousel-autoplay";

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
      {/* Mobile and Tablet Layout (sm and md) */}
      <div className="block lg:hidden relative overflow-hidden">
        <div className="relative bg-[url('/assets/kamathenu%20Images/BAS/Seller/seller_bg.jpg')] bg-cover bg-center h-64 opacity-25">
          <div className="absolute inset-0 opacity-10"></div>
        </div>

        {/* Content */}
        <div className="absolute top-8 flex flex-col gap-2 w-full px-4">
          <div className="text-center">
            <p className="text-lg text-black">
              Testimonials
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl text-[#EFBB39] font-bold">
              What Your Sellers Say?
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-[#353333] font-normal leading-relaxed">
              Tap into builders, homeowners, and contractors looking for ready-made plans. Tap into builders, homeowners, and contractors looking for ready-made plans.
            </p>
          </div>
        </div>

        {/* seller information */}
        <div className="mt-8 px-4">
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
              className="w-full"
            >
              <CarouselContent className="w-full">
                {similarProducts.map((item) => (
                  <CarouselItem key={item.id} className="basis-full">
                    <div className="border overflow-visible relative">
                      <div className="relative">
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                          <img
                            src="/assets/kamathenu Images/BAS/Seller/Vector 2.png"
                            alt=""
                            className="w-12 h-12"
                          />
                        </div>
                        <div className="border flex flex-col items-center gap-4 border-gray-100 shadow-lg bg-white rounded-lg">
                          <div className="p-6 flex flex-col gap-4">
                            <div className="text-center text-lg font-semibold">
                              <h1>
                                &quot;A Game Changer for My Architecture Practice!&quot;
                              </h1>
                            </div>
                            <div className="text-sm text-[#353333] text-center leading-relaxed">
                              <h1>
                                &quot;I used to struggle finding clients for my pre-made house plans. After joining this platform, my designs are now reaching people across the country. It&apos;s given me both exposure and steady income every month.&quot;
                              </h1>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                              <div className="w-3 h-3 bg-[#EFBB39] rounded-full"></div>
                              <img
                                src="/assets/kamathenu Images/BAS/Seller/seller_img1.jpg"
                                alt="Seller_Image"
                                className="w-16 h-16 object-cover rounded-full"
                              />
                              <div className="w-3 h-3 bg-[#EFBB39] rounded-full"></div>
                            </div>
                            <div>
                              <div className="text-center text-base font-semibold">
                                <h1>Divya Prakash</h1>
                              </div>
                              <div className="text-center text-sm text-[#353333] font-normal">
                                <h1>Coimbatore</h1>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3 h-1 bg-[#D8A526]"></div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading similar products...</p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout (lg) - Same as original */}
      <div className="hidden lg:block relative overflow-hidden">
        <div className="relative bg-[url('/assets/kamathenu%20Images/BAS/Seller/seller_bg.jpg')] bg-cover bg-center h-214 opacity-25">
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 opacity-10"></div>
        </div>

        {/* Content */}
        <div className="absolute top-[12%] flex flex-col gap-3 w-full">
          <div className="text-center">
            <p className="text-[32px] text-black">
              Testimonials
            </p>
          </div>
          <div className="text-center">
            <p className="text-[36px] text-[#EFBB39] font-bold">
              What Your Sellers Say?
            </p>
          </div>
          <div className="text-center">
            <p className="text-[19px] text-[#353333] font-normal">
              Tap into builders, homeowners, and contractors looking for
              ready-made plans. Tap into builders,
            </p>
          </div>
          <div className="text-center">
            <p className="text-[19px] text-[#353333] font-normal">
              homeowners, and contractors looking for ready-made plans.
            </p>
          </div>
        </div>

        {/* seller information */}
        <div className="absolute top-[42%]">
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
              className=""
            >
              <CarouselContent className="w-[53%] ml-90">
                {similarProducts.map((item) => (
                  <CarouselItem key={item.id} className="ml-12">
                    <div className="border-1 overflow-visible relative">
                      <div className="relative">
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-50">
                          <img
                            src="/assets/kamathenu Images/BAS/Seller/Vector 2.png"
                            alt=""
                          />
                        </div>
                        <div className="border-1 flex flex-col items-center gap-4 border-gray-100 shadow-2xl p- bg-white">
                          <div className="p-15 flex flex-col gap-4">
                            <div className="text-center text-[23px] font-semibold">
                              <h1>
                                &quot;A Game Changer for My Architecture Practice!&quot;
                              </h1>
                            </div>
                            <div className="text-[18px] text-[#353333] text-center">
                              <h1>
                                &quot;I used to struggle finding clients for my
                                pre-made house plans. After joining this
                                platform, my designs are now reaching people
                                across the country. It&apos;s given me both exposure
                                and steady income every month.&quot;
                              </h1>
                            </div>
                            <div className="grid grid-cols-12 items-center">
                              <div className="flex items-center col-span-5">
                                <div className="w-5 h-5 bg-[#EFBB39] rounded-full"></div>
                                <div className="w-full h-[2px] bg-[#BFBFBF]"></div>
                              </div>
                              <div className="col-span-2 flex justify-center">
                                <img
                                  src="/assets/kamathenu Images/BAS/Seller/seller_img1.jpg"
                                  alt="Seller_Image"
                                  className="w-24 h-24 object-center"
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
                          <div className="w-[30%] h-[4px] bg-[#D8A526] width-small-large"></div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
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
