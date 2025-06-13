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

export default function Footer() {
  return (
    <footer className="w-full mt-[7rem]  ">
      <div className="bg-[#D8A526] p-20 flex">
        {/* first */}
        <div className="">
          <div className="mb-6">
            <Link href="/" className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={"/assets/kamathenu Images/kamathenuLogo_2.png"}
                  width={105}
                  height={76.6216049194336}
                  alt="Make-Easy-logo"
                  className=""
                />
              </Link>
            </Link>
          </div>

          <div className="space-y-3 w-[60%] text-white">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                16 A, Gandhi Street, 3rd Street, Ganapathy, Coimbatore - 641
                006.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">+ 91-422-4364187</p>
            </div>

            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">+ 91-9894646837</p>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="text-white ">
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-sm hover:underline">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
        
        {/* Third */}

        <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/order-tracking"
                    className="text-sm hover:underline"
                  >
                    Order tracking
                  </Link>
                </li>
                <li>
                  <Link href="/wishlist" className="text-sm hover:underline">
                    Wish List
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-sm hover:underline">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="text-sm hover:underline">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm hover:underline">
                    Terms and conditions
                  </Link>
                </li>
              </ul>
            </div>

      </div>
    </footer>
  );
}
