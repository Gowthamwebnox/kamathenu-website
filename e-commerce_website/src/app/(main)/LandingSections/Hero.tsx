"use client";

import "../../Style/anite/headerBgImage.css";
import { IoSearch } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useState } from "react";

export default function Hero() {
  const [scrollImage, setScrollImage] = useState([{
    id: 1,
    image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_1.png",
    alt: "Scroll Design",
    className: "absolute top-14 rotate-[-90deg] w-[250px] md:w-[200px] h-auto",
  },
  {
    id: 2,      
    image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_2.png",
    alt: "Scroll Design",
    className: "absolute top-14 rotate-[-90deg] w-[250px] md:w-[200px] h-auto  z-1",
  },
  {
    id: 3,    
    image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_3.png",
    alt: "Scroll Design",
    className: "absolute top-14 rotate-[-90deg] w-[250px] md:w-[200px] h-auto",
  },
  {
    id: 4,          
    image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_4.png",
    alt: "Scroll Design",
    className: "",
  },
  {
    id: 5,          
    image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_5.png",
    alt: "Scroll Design",
    className: "absolute top-14 rotate-[-90deg] w-[250px] md:w-[200px] h-auto",
  },]);
  return (
    <>
      <div className="relative w-full h-auto md:h-[945px]">
        <div className="absolute inset-0 bg-cover bg-center bg-hero-slider transition-bg duration-1000">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Foreground content */}
        <div className="relative flex flex-col justify-center items-start px-5 sm:px-10 md:px-20 text-white py-20 md:py-[240px]">
          <h1 className="text-[32px] sm:text-[45px] md:text-[55px] font-normal">
            Build Your Dream Home
          </h1>
          <h2 className="text-[30px] sm:text-[42px] md:text-[53px] font-bold text-yellow-400 mt-2">
            Construction Plans
          </h2>
          <p className="mt-4 text-[14px] sm:text-[15px] md:text-lg max-w-xl">
            Browse, Customize, and Download Premium Architectural Plans Instantly
            — For Any Budget, Style, or Space.
          </p>

          {/* Tabs */}
          <div className="mt-8 flex gap-4 bg-white text-black border border-gray-200 rounded-t-[10px] p-2">
            <button className="border-b-2 border-gray-400 font-medium">
              House
            </button>
            <button className="text-gray-500">Villa</button>
            <button className="text-gray-500">Flat</button>
          </div>

          {/* Search Filters */}


          {/* Statistics */}
          <div className=" w-full flex justify-between items-center ">
            <div className="">
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 bg-white text-black border border-gray-200 rounded-b-[10px] p-4">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px] border-0">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full sm:w-[180px] border-0">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full sm:w-[180px] border-0">
                    <SelectValue placeholder="Sq ft Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] ml-0 sm:ml-2" style={{ borderColor: "#D8A526" }}>
                  Search
                  <IoSearch />
                </Button>
              </div>

              <div className="flex flex-col  mt-10">
                <div className="flex gap-16 sm:gap-32 md:gap-[220px]">
                  <h1 className="text-[40px] sm:text-[50px] md:text-[61px] font-medium">
                    1.2K +
                  </h1>
                  <h1 className="text-[40px] sm:text-[50px] md:text-[61px] font-medium">
                    4K +
                  </h1>
                </div>
                <div className="flex gap-16 sm:gap-32 md:gap-[210px]">
                  <h1 className="text-[16px] sm:text-[18px] md:text-[19px] mt-3 font-medium">
                    Happy Customer
                  </h1>
                  <h1 className="text-[16px] sm:text-[18px] md:text-[19px] mt-3 font-medium">
                    Design Ready
                  </h1>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Carousel
                opts={{
                  align: "start",
                }}
                className=""
              >
                <CarouselContent>
                  {scrollImage.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ml-8 opacity-30">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6  z-50  ">
                            
                            <img src={item.image} alt={item.alt} className="absolute top-14 rotate-[-90deg] w-[250px] md:w-[200px] h-auto brightness-150 contrast-110" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

            </div>
          </div>

        </div>

        {/* Scroll Image */}
        <div className="hidden md:absolute md:top-[500px] left-[30%] lg:left-[58%]">
          <div className="bg-gray-300 w-[278px] h-[326px] opacity-40 border rounded-2xl"></div>
          <img
            src="/assets/kamathenu Images/Landing_page_Scroll/scroll_2.png"
            alt="Scroll Design"
            className="absolute top-14 rotate-[-90deg] w-[250px] md:w-[700px] h-auto"
          />
        </div>


      </div>
    </>
  );
}


