import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
export default function Service() {
    const serviceDetails = [{
        no: '01.',
        image: '/assets/kamathenu Images/About/service/logo1.png',
        title: 'Wide Range of Designs',
        description: 'We are a team of architects, designers, and construction professionals with a passion for creating functional, stylish, and cost-effective home designs. Our mission is to make high- quality house plans accessible to'
    },
    {
        no: '02.',
        image: '/assets/kamathenu Images/About/service/logo2.png',
        title: 'Wide Range of Designs',
        description: 'We are a team of architects, designers, and construction professionals with a passion for creating functional, stylish, and cost-effective home designs. Our mission is to make high- quality house plans accessible to'
    },
    {
        no: '03.',
        image: '/assets/kamathenu Images/About/service/logo3.png',
        title: 'Wide Range of Designs',
        description: 'We are a team of architects, designers, and construction professionals with a passion for creating functional, stylish, and cost-effective home designs. Our mission is to make high- quality house plans accessible to'
    },
    {
        no: '04.',
        image: '/assets/kamathenu Images/About/service/logo4.png',
        title: 'Wide Range of Designs',
        description: 'We are a team of architects, designers, and construction professionals with a passion for creating functional, stylish, and cost-effective home designs. Our mission is to make high- quality house plans accessible to'
    }

    ]
    return (
        <>
            {/* Mobile Layout (sm) */}
            <div className="block md:hidden px-4 py-8">
                <div className="flex flex-col gap-8">
                    {/* Header Section */}
                    <div className="text-center">
                        <div className='text-base text-[#737373] mb-2'>
                            <h1>WHAT WE OFFER</h1>
                        </div>
                        <div className='text-[#000000] text-2xl font-bold'>
                            <h1>We Provide Excellent Service To Our Customers</h1>
                        </div>
                    </div>

                    {/* Services Carousel */}
                    <div className='w-full'>
                        {serviceDetails.length > 0 ? (
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: false,
                                }}
                                className="w-full"
                            >
                                <CarouselContent className="ml-0">
                                    {serviceDetails.map((item, ind) => (
                                        <CarouselItem
                                            key={ind}
                                            className="basis-full flex items-stretch border-2 mr-4"
                                        >
                                            <div className="flex flex-col rounded-t-[15px]  gap-4 relative p-6">
                                                <h1 className='text-lg'>{item.no}</h1>
                                                <div>
                                                    <div className='w-20 bg-[#EFBB39] rounded-lg'>
                                                        <img src={item.image} alt="image1" className='p-4' />
                                                    </div>
                                                    <h1 className='mt-4 text-lg font-semibold text-[#EFBB39]'>{item.title}</h1>
                                                    <p className='mt-3 text-sm leading-relaxed'>{item.description}</p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-gray-500">Loading similar products...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Desktop Layout (md and lg) - Same as original */}
            <div className='hidden md:flex relative flex-row mt-22'>
                <div className='lg:w-[70%]'>
                    <div className='lg:relative bottom-90 '>
                        <img src="/assets/kamathenu Images/About/Group 927.png" alt="group 927" />
                    </div>
                </div>

                <div >
                    <div className='text-[20px] text-[#737373] '>
                        <h1>WHAT WE OFFER</h1>
                    </div>
                    <div className='text-[#000000] text-[54px] font-bold w-[48%]'>
                        <h1>We Provide Excellent Service To Our Customers</h1>
                    </div>
                    <div className='w-[100%]'>
                        {serviceDetails.length > 0 ? (
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: false,
                                }}
                                className="w-full "
                            >
                                <CarouselContent className="ml-4 mt-6 w-[63%]">
                                    {serviceDetails.map((item, ind) => (
                                        <CarouselItem
                                            key={ind}
                                            className="md:basis-1/2 lg:basis-1/2 flex items-stretch border-2 mr-4"
                                        >
                                            <div className="flex flex-col  rounded-t-[15px] borde-2 border-gray-400 gap-4 relative p-12">
                                                <h1 className='text-[23px]'>{item.no}</h1>
                                                <div>
                                                    <div className='w-[30%] bg-[#EFBB39]'><img src={item.image} alt="image1" className='p-7' />
                                                    
                                                    </div>
                                                    <h1 className='mt-20 text-[24px] font-semibold text-[#EFBB39]'>{item.title}</h1>
                                                    
                                                <p className='mt-5 text-[19px]'>{item.description}</p>
                                                </div>
                                                
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-gray-500">Loading similar products...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}