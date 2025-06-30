import Link from "next/link";
import {
  MapPin,
  Phone,
  Smartphone,
  
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { TbBrandLinkedinFilled } from "react-icons/tb";


export default function Footer() {
  return (
    <footer className="w-full mt-8 sm:mt-12 md:mt-16 lg:mt-[7rem] bg-[#D8A526]">
      <div className="px-4 sm:px-8 md:px-16 lg:px-19">
        <div className="bg-[#D8A526] p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-21">
        {/* first */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="mb-4 sm:mb-6 w-full sm:w-[25%] md:w-full lg:w-[25%]">
            <Link href="/" className="flex items-center">
                <Image
                  src={"/assets/kamathenu Images/kamathenuLogo_2.png"}
                  width={135}
                  height={116.6216049194336}
                  alt="Make-Easy-logo"
                  className="w-auto h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[135px]"
                />
              </Link>
          </div>

          <div className="space-y-2 sm:space-y-3 text-white">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] font-normal leading-relaxed">
                16 A, Gandhi Street, 3rd Street, Ganapathy, Coimbatore - 641006.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] font-normal">+ 91-422-4364187</p>
            </div>

            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] font-normal">+ 91-9894646837</p>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="text-white col-span-12 md:col-span-4 lg:col-span-2">
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[29px] font-bold mb-3 sm:mb-4">Company</h3>
          <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <li>
              <Link href="/about" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[19px] font-semibold hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Third */}
        <div className="text-white col-span-12 md:col-span-4 lg:col-span-2">
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[29px] font-bold mb-3 sm:mb-4">Service</h3>
          <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <li>
              <Link href="/about" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                Order tracking
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                Wish List
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                Terms and conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="text-white col-span-12 md:col-span-4 lg:col-span-2">
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[29px] font-bold mb-3 sm:mb-4">Customer Care</h3>
          <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
            <li>
              <Link href="/about" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                Login
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                Wish List
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                Order Tracking
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] font-normal hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-white col-span-12 md:col-span-4 lg:col-span-3">
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[29px] font-bold mb-3 sm:mb-4">Newsletter</h3>
          <h2 className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-normal w-full lg:w-[90%] xl:w-[90%] mb-4 sm:mb-5">Subscribe to our weekly updates and notifications</h2>
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row h-auto sm:h-[2.5rem] md:h-[2.8rem]  md:gap-0">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-48 md:w-52 lg:w-54 h-[2.5rem] sm:h-[2.5rem] md:h-[2.8rem] rounded-[0px] text-center bg-white text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-[13px] sm:text-[14px] md:text-[15px]"
                  />
                  <Button className="px-3 sm:px-4 md:px-6 rounded-[0px] h-[2.5rem] sm:h-[2.5rem] md:h-[2.8rem] bg-black hover:bg-gray-800 text-white text-[13px] sm:text-[14px] md:text-[15px]">
                    Send
                  </Button>
                </div>
          <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10">
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
                  <Link
                    href="#"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <FaXTwitter className="size-5 sm:size-6 md:size-7 lg:size-8"/>
                  </Link>
                  <Link
                    href="#"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <SlSocialInstagram className="size-5 sm:size-6 md:size-7 lg:size-8"/>
                  </Link>
                  <Link
                    href="#"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <TbBrandYoutubeFilled className="size-6 sm:size-7 md:size-8 lg:size-10" />
                  </Link>
                  <Link
                    href="#"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <TbBrandLinkedinFilled className="size-5 sm:size-6 md:size-7 lg:size-9" />
                  </Link>
                </div>
              </div>
          
        </div>
        
      
        

      </div>
      
      <div className="border-t-2 border-white mx-auto w-full sm:w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%] lg:ml-[5%] h-4"></div>
      <div className="py-3 sm:py-4 text-center lg:text-left">
        <h1 className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] lg:ml-[40%] text-white">© 2025 YourCompany. All Rights Reserved.</h1>
      </div>
      </div>
      
      
    </footer>
  );
}
