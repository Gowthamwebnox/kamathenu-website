"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
// kamathenu start
import kamathenuLogo from '../../../public/assets/kamathenu Images/kamathenuLogo.png'
import { MdOutlineShoppingCart } from "react-icons/md";
import Landingbgimg_1 from '../../../public/assets/kamathenu Images/Land_bg_1.jpg';
import { Button } from "@/components/ui/button"
import Image from "next/image"



export default function Header() {
  
  return (
   
    <header className="text-white backdrop-blur-md bg-black/30" >
      <div className="flex items-center p-2 ">
        <div className="md:ml-[107]">
          <Image src={kamathenuLogo} alt="kamathenulogo" className="w-[73.73px] h-[53]" />
      </div>
        <div className="flex  md:ml-[276.5] gap-[50px]">
          <h2>Home</h2>        
          <h2>About Us</h2>        
          <h2>Shop Plans</h2>        
          <h2>Gallery</h2>        
          <h2>FAQs</h2>        
          <h2>Contacts Us</h2>    
          <h2>Become a Seller</h2>
        </div>
        <div>
        <div className="flex items-center md:ml-[276.5] gap-[10px]">
          <Button
          className="bg-white border text-[#D8A526] hover:bg-[#D8A526] hover:text-white"
          style={{ borderColor: '#D8A526' }}
        >
          Log in
        </Button>
        
        <Button
          className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] ml-2"
          style={{ borderColor: '#D8A526' }}
        >
          Sign in
        </Button>

        <div className="w-[1px] h-9 bg-black opacity-50 mx-2"></div>
        <div><MdOutlineShoppingCart className="md:size-7"/></div>

        </div>
</div>


      </div>
      
    </header>
  )
}

