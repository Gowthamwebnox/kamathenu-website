import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

export default function YearsofExperience() {
    const details = [
        {
            id: 1,
            type: "Our Mission",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum",

        },
        {
            id: 2,
            type: "Our Vision",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum",

        }
    ]
    return (
        <>
            {/* Mobile Layout (sm) */}
            <div className="block md:hidden mt-81 md:m-19 px-4 py-8">
                <div className="flex flex-col gap-6">
                    {/* Image Section */}
                    <div className="relative">
                        <img src="/assets/kamathenu Images/About/Exp_img.png" alt="Year of Experience" className='w-full h-64 object-cover rounded-lg' />
                        <div className='absolute top-4 right-4 w-20 bg-[#EFBB39] px-3 py-2 rounded'>
                            <h1 className='text-2xl font-bold text-center text-black'>12</h1>
                            <h1 className='text-white text-xs font-normal text-center mt-1'>Years of Experience</h1>
                        </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[#737373] text-lg font-normal font-serif'>Kamadhenu since 1999</h1>
                            <h1 className='text-[#000000] text-2xl font-bold'>Build Your Dream Home</h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[#000000] text-sm font-normal leading-relaxed'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum</h1>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-[#EFBB39] rounded-full"></div>
                                <div className="w-full h-[2px] bg-[#BFBFBF]"></div>
                                <div className="w-4 h-4 bg-[#EFBB39] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Carousel Section */}
                    <div className="w-full">
                        <div className="bg-[#EFBB39] px-4 py-4 rounded-lg relative">
                            <Carousel className="relative">
                                <CarouselContent>
                                    {details.map((ele, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-2">
                                                <div className="">
                                                    <p className="text-black text-sm leading-relaxed">{ele.description}</p>
                                                    <h3 className="text-black mt-3 font-semibold text-base">{ele.type}</h3>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className='absolute top-[90%] left-[70%] bg-transparent text-black hover:bg-transparent shadow-none w-12 h-12 scale-150' />
                                <CarouselNext className='absolute top-[90%] left-[85%] bg-transparent text-black border-none hover:bg-transparent w-12 h-12 shadow-none scale-150 transition-all' />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout (md and lg) - Same as original */}
            <div className="hidden md:grid grid-cols-12 grid-rows-2 mx-22 mt-22 gap-15">
                <div className="col-span-6 lg:col-span-4 row-span-2 relative">
                    <div className="relative h-full w-full">
                        <img src="/assets/kamathenu Images/About/Exp_img.png" alt="Year of Experience" className='w-[100%] h-[85%]  object-cover' />
                    </div>
                    <div className='absolute top-1/5 left-[73%] -translate-x-1/2 -translate-y-1/2 w-[125px] bg-[#EFBB39] px-6 py-4 '>
                        <h1 className=' text-5xl font-bold text-center text-black'>12</h1>
                        <h1 className='text-white text-[19px] font-normal text-center text-black mt-2'>Years of Experience</h1>
                    </div>
                </div>
                <div className='col-span-8 row-span-1'>
                    <div className='flex flex-col gap-14 w-[80%]'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[#737373] text-[26px] font-normal font-serif'>Kamadhenu since 1999</h1>
                            <h1 className='text-[#000000] text-[50px] font-bold'>Build Your Dream Home</h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[#000000] text-[20px] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum</h1>
                        </div>
                        <div>
                            <div className="flex items-center col-span-5">
                                <div className="w-5 h-5 bg-[#EFBB39] rounded-full "></div>
                                <div className="w-full h-[2px] bg-[#BFBFBF]"></div>
                                <div className="w-5 h-5 bg-[#EFBB39] rounded-full "></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-8 row-span-1'>
                    <div className="w-[80%]">
                        <div className="bg-[#EFBB39] px-8 py-6 rounded-lg relative">
                            <Carousel className="relative">
                                <CarouselContent>
                                    {details.map((ele, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-4 ">
                                                <div className="">
                                                    <p className="text-black text-[18px] leading-relaxed">{ele.description}</p>
                                                    <h3 className="text-black mt-5 font-semibold text-lg ">{ele.type}</h3>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className='absolute top-[86%] left-[80%]  bg-transparent text-black hover:bg-transparent shadow-none w-16 h-16 scale-200 ' />
                                <CarouselNext className='absolute top-[86%] left-[90%] bg-transparent text-black border-none hover:bg-transparent w-16 h-16 shadow-none scale-200 transition-all' />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




