"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
// kamathenu start
import kamathenuLogo from '../../../../public/assets/kamathenu Images/kamathenuLogo.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import Landingbgimg_1 from '../../../public/assets/kamathenu Images/Land_bg_1.jpg';
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { color } from "framer-motion";
type HeaderProps = {
  headerColor?: [string, string,string]; // [backgroundColor, textColor]
};


export default function Header({ headerColor = ['none', 'none'] }: HeaderProps) {
  
  return (
   
    <header className="fixed top-0 left-0 w-[99%] z-50 text-white backdrop-blur-md border-1 border-b-gray-300 opacity-90"
    style={{ backgroundColor:`${headerColor[0]}`,color:`${headerColor[1]}`}}>
      <div className="flex items-center justify-between p-4">
        <div>
          <Image
            src={kamathenuLogo}
            alt="kamathenu logo"
            className="w-[73.73px] h-[53px]"
          />
        </div>
        <div className="hidden md:flex gap-[50px]">
          <h2>Home</h2>
          <h2>About Us</h2>
          <h2>Shop Plans</h2>
          <h2>Gallery</h2>
          <h2>FAQs</h2>
          <h2>Contact Us</h2>
          <h2>Become a Seller</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-white text-[#D8A526] border hover:bg-[#D8A526] hover:text-white" style={{ borderColor: '#D8A526' }}>
            Log in
          </Button>
          <Button className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526]" style={{ borderColor: '#D8A526' }}>
            Sign in
          </Button>
          <div className="w-[1px] h-9 bg-white opacity-50 mx-2"></div>
          <MdOutlineShoppingCart className="size-6" />
        </div>
      </div>
    </header>
  )
}

