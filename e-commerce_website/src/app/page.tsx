
import Hero from "./(main)/sections/Hero";
import ShopwithConfidence from "./(main)/sections/ShopwithConfidence";
import Header from "./components/layout/Header";

export default function Home() {
  return (
    <> 
    <div className="relative">
    <Header  />
    <Hero />
    <ShopwithConfidence/>
    </div>
    </>
  );
}
