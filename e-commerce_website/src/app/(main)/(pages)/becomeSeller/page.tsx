import React from 'react'
import BecomeSellerHero from './sections/Hero'
import DesignUploading from './sections/designUploading'
import SellWithUs from './sections/sellWithUs'
import Header from '@/app/components/layout/Header'
import Works from './sections/workingPrincple'

const BecomeSeller = () => {
  return (
    <div>
        <Header headerColor={["black", "white"]} />
        <BecomeSellerHero/>
            {/* why we sell three div */}
        <SellWithUs/>

        {/* upload your design start */}

        <DesignUploading/>
        <Works/>
    </div>
  )
}

export default BecomeSeller