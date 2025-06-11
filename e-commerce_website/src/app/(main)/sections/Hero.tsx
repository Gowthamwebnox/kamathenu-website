"use client";

import Landingbgimg_1 from "D:kamathenukamathenu-websitee-commerce_websitepublicassetskamathenu ImagesLand_bg_1.jpg";


import { IoSearch } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
    <div className="md:relative top-0 w-[1905px] h-[945px]  ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/kamathenu Images/Land_bg_1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Foreground content */}
      <div className="relative  flex flex-col justify-center items-start py-[240px] h-[853px] px-20 text-white">
        <h1 className="text-[55px] font-normal">Build Your Dream Home</h1>
        <h2 className="text-[53px] font-bold text-yellow-400 mt-2">
          Construction Plans
        </h2>
        <p className="mt-4 text-lg max-w-xl">
          Browse, Customize, and Download Premium Architectural Plans Instantly
          — For Any Budget, Style, or Space.
        </p>

        {/* Example of tabs + search bar like in image */}
        <div className="mt-8 flex gap-[28px] bg-white  text-black border border-gray-200 rounded-t-[10px] p-2">
          <button className="border-b-2 border-gray-400 font-medium">
            House
          </button>
          <button className="text-gray-500">Villa</button>
          <button className="text-gray-500">Flat</button>
        </div>

        <div className=" flex gap-[28px] bg-white  text-black border border-gray-200 rounded-tr-[10px] rounded-b-[10px] p-4">
          <Select>
            <SelectTrigger className="w-[180px] border-0">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] border-0">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] border-0">
              <SelectValue placeholder="Sq ft Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] ml-2"
            style={{ borderColor: "#D8A526" }}
          >
            Search
            <IoSearch />
          </Button>
        </div>

        <div className=" flex flex-col items-center">
          <div className="flex gap-[220px]">
            <h1 className="text-[61px] mt-15 font-medium">1.2K +</h1>
            <h1 className="text-[61px] mt-15 font-medium">4K +</h1>
          </div>
          <div className="flex gap-[210px]">
            <h1 className="text-[19px] mt-7 font-medium">Happy Customer</h1>
            <h1 className="text-[19px] mt-7 font-medium">Design Ready</h1>
          </div>
        </div>
      </div>
      <div className=" md:absolute top-115 left-275">
        <div className="bg-gray-300 w-[278px] h-[326px] opacity-40 border rounded-2xl" >
          
        </div>
        <img
            src="/assets/kamathenu Images/Landing_page_Scroll/scroll_2.png"
            alt="Scroll Design"
            className="absolute top-14  rotate-[-90deg] w-[700px] h-[263px]  "
          />
      </div>
    </div>
    
    </>
  );
}
