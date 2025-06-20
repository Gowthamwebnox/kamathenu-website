import Header from "@/app/components/layout/Header";
import ShopHero from "./sections/shopHero";
import DesignShopPlan from "./sections/DesignShopPlan";
import Footer from "@/app/components/layout/Footer";

const ShopPlan = () => {
    return (
        <div>
            <Header headerColor={["black", "white"]} />
            <ShopHero/>
            <DesignShopPlan/>
            <Footer/>
        </div>
    )
}

export default ShopPlan;