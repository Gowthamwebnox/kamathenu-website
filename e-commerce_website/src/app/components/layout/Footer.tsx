import Link from "next/link";
import {
  MapPin,
  Phone,
  Smartphone,
  Truck,
  Award,
  RotateCcw,
  Headphones,
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
    <footer className="w-full mt-[7rem] bg-[#D8A526]   ">
      <div className="ml-19">
        <div className="bg-[#D8A526] p-20 flex gap-34 ">
        {/* first */}
        <div className="w-[15%]">
          <div className="mb-6 w-[25%]">
            <Link href="/" className="flex items-center">
                <Image
                  src={"/assets/kamathenu Images/kamathenuLogo_2.png"}
                  width={135}
                  height={116.6216049194336}
                  alt="Make-Easy-logo"
                />
              </Link>
          </div>

          <div className="space-y-3  text-white">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="text-[17px] font-normal">
                16 A, Gandhi Street, 3rd Street, Ganapathy, Coimbatore - 641006.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <p className="text-[17px] font-normal">+ 91-422-4364187</p>
            </div>

            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 flex-shrink-0" />
              <p className="text-[17px] font-normal">+ 91-9894646837</p>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="text-white">
          <h3 className="text-[29px] font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-4 ">
            {" "}
            {/* Or use flex-row gap-x-4 if you want horizontal layout */}
            <li>
              <Link href="/about" className="text-sm hover:underline text-[17px] font-normal">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm hover:underline text-[17px] font-normal">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm hover:underline text-[17px] font-normal">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm hover:underline text-[19px] font-semibold">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Third */}

        <div className="text-white">
          <h3 className="text-[29px] font-bold mb-4">Service</h3>
          <ul className="flex flex-col gap-4 ">
            {" "}
            {/* Or use flex-row gap-x-4 if you want horizontal layout */}
            <li>
              <Link href="/about" className="text-sm hover:underline text-[17px] font-normal">
                Order tracking
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm hover:underline text-[17px] font-normal">
                Wish List
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm hover:underline text-[17px] font-normal">
                Login
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm hover:underline text-[17px] font-normal">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm hover:underline text-[17px] font-normal">
                Terms and conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div className="text-white w-[15%]">
          <h3 className="text-[29px] font-bold mb-4">Customer Care</h3>
          <ul className="flex flex-col gap-4 ">
            {" "}
            {/* Or use flex-row gap-x-4 if you want horizontal layout */}
            <li>
              <Link href="/about" className="text-sm hover:underline text-[17px] font-normal">
                Login
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm hover:underline text-[17px] font-normal">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm hover:underline text-[17px] font-normal">
                Wish List
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm hover:underline text-[17px] font-normal">
                Order Tracking
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-sm hover:underline text-[17px] font-normal">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-white">
          <h3 className="text-[29px] font-bold mb-4">Newsletter</h3>
          <h2 className="text-[18px] font-normal w-[90%]">Subscribe to our weekly updates and notofications</h2>
          <div className="flex h-[2.8rem] mt-5">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-54 h-full rounded-[0px] text-center bg-white text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button className="px-6 rounded-[0px]  h-full bg-black hover:bg-gray-800">
                    Send
                  </Button>
                </div>
          <div className="mt-10">
                <div className="flex items-center gap-7">
                  <Link
                    href="#"
                    className=""
                  >
                    <FaXTwitter className="size-8"/>
                  </Link>
                  <Link
                    href="#"
                    className=""
                  >
                    <SlSocialInstagram className="size-8"/>
                  </Link>
                  <Link
                    href="#"
                    className=""
                  >
                    <TbBrandYoutubeFilled className="size-10" />
                  </Link>
                  <Link
                    href="#"
                    className=""
                  >
                    <TbBrandLinkedinFilled className="size-9" />
                  </Link>
                </div>
              </div>
          
        </div>
        
      
        

      </div>
      
      <div className="border-t-2 border-white ml-[5%] w-[80%] h-4 "></div>
      <div className="py-4 ">
        <h1 className="text-[20px] ml-[40%] text-white">© 2025 YourCompany. All Rights Reserved.</h1>
      </div>
      </div>
      
      
    </footer>
  );
}
