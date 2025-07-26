import React from "react";
import SellerRegistration from "./sections/SellerRegistration";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
function Page() {
  return (
    <>
      <Header headerColor={["black", "white"]} />

      <div className="w-full pt-32 flex justify-center items-center md:mt-0 mt-32">
        <SellerRegistration />
      </div>
      <Footer />
    </>
  );
}

export default Page;
