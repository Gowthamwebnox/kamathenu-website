import Image from "next/image";
import Hero from "./(main)/sections/Hero";
import Header from "./components/layout/Header";
import ShopwithConfidence from "./(main)/sections/ShopwithConfidence";

export default function Home() {
  return (
    <> 
    <Header />
    <Hero />
    <ShopwithConfidence/>
    </>
  );
}
