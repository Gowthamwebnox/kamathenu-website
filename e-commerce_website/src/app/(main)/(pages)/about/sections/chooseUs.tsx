
import { Button } from '@/components/ui/button'
export default function ChooseUs() {
    return (
        <div className='mt-22 p-19 relative'>
            <div className='absolute top-0 left-1/2 z-10'>
                <img src="/assets/kamathenu Images/About/OrderNow/img1.png" alt=" img_logo" className='w-[100%] h-[300px]' />
            </div>
            <div className="bg-[#FFCE53] mt-12 p-12 px-15 relative ">
                <h1 className='text-[21px] text-white font-normal mt-12'>WE WORK WITH</h1>
                <h1 className='text-[34px] font-bold mt-3'>WHY CHOOSE US</h1>
                <p className='text-[18px] mt-2 w-[40%] text-[#1A1A1ABF]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem IpsumLorem</p>
                <div className='flex gap-5 mt-21 '>
                    <div>
                        <img src="/assets/kamathenu Images/About/OrderNow/aff_logo.png" alt="" />
                        <h1 className='text-[24px] font-semibold mt-4'>Affordable Pricing</h1>
                        <p className='text-[18px] mt-4 w-[85%]   text-[#1A1A1ABF]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply</p>
                    </div>

                    <div>
                        <img src="/assets/kamathenu Images/About/OrderNow/pro_logo.png" alt="" />
                        <h1 className='text-[24px] font-semibold mt-4'>Affordable Pricing</h1>
                        <p className='text-[18px] mt-4 w-[85%]   text-[#1A1A1ABF]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply</p>
                    </div>

                    <div>
                        <img src="/assets/kamathenu Images/About/OrderNow/Quick.png" alt="" />
                        <h1 className='text-[24px] font-semibold mt-4'>Affordable Pricing</h1>
                        <p className='text-[18px] mt-4 w-[85%]   text-[#1A1A1ABF]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply</p>
                    </div>

                    <div>
                        <img src="/assets/kamathenu Images/About/OrderNow/settingLogo.png" alt="" />
                        <h1 className='text-[24px] font-semibold mt-4'>Affordable Pricing</h1>
                        <p className='text-[18px] mt-4 w-[85%]   text-[#1A1A1ABF]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply</p>
                    </div>
                </div>

                <div className="flex items-center mt-25 ">
                    <div className="w-3 h-3 bg-[#050505] rounded-full "></div>
                    <div className="w-full h-[2px] bg-[#FFFFFF]"></div>

                    <div className="w-3 h-3 bg-[#050505] rounded-full "></div>

                </div>
                <div className='flex justify-between mt-25'>
                    <h1 className='text-[44px] font-semibold'>Let’s Build Something Great</h1>
                    <Button className='bg-white text-black text-[20px] px-10 py-7 rounded-[8px]'>Order Now</Button>
                </div>

            </div>
        </div>
    )
}