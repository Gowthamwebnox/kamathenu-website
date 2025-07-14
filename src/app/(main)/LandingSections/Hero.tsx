// "use client";

// import { IoSearch } from "react-icons/io5";


// import "../../Style/anite/headerBgImage.css";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
// import { useState } from "react";

// export default function Hero() {
//   const [scrollImage, setScrollImage] = useState([
//     {
//       id: 1,
//       image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_1.png",
//       alt: "Scroll Design",
//       className:"absolute top-20 lg:top-22 rotate-[-90deg] w-[270px] md:w-[270px] lg:w-[330px] opacity-95 z-10",
//     },
//     {
//       id: 2,
//       image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_2.png",
//       alt: "Scroll Design",
//       className:
//         "absolute top-20 left-5 lg:left-10  lg:top-26 rotate-[-90deg] w-[250px] md:w-[250px] lg:w-[300px] opacity-95 z-10",
//     },
//     {
//       id: 3,
//       image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_3.png",
//       alt: "Scroll Design",
//       className:
//         "absolute top-23 lg:top-26 rotate-[-90deg] w-[250px] md:w-[220px] lg:w-[290px] opacity-100 z-10",
//     },
//     {
//       id: 4,
//       image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_4.png",
//       alt: "Scroll Design",
//       className: "absolute top-23 lg:top-26 rotate-[-90deg] w-[250px] md:w-[210px] lg:w-[280px] opacity-95 z-10",
//     },
//     {
//       id: 5,
//       image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_5.png",
//       alt: "Scroll Design",
//       className:
//         "absolute top-20 lg:top-26 rotate-[-90deg] w-[250px] md:w-[250px] lg:w-[300px] opacity-95 z-10",
//     },
//   ]);
//   const [currentSlide, setCurrentSlide] = useState(0)
//   return (
//     <>
//       <div className="relative w-full h-auto md:h-[945px]">
//         <div className="absolute inset-0 bg-cover bg-center bg-hero-slider transition-bg duration-1000">
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//         </div>

//         {/* Foreground content */}
//         <div className="relative flex flex-col justify-center items-start pl-5 sm:pl-10 md:pl-20 text-white py-20 md:py-[240px]">
//           <h1 className="text-[32px] sm:text-[45px] md:text-[55px] font-normal">
//             Build Your Dream Home
//           </h1>
//           <h2 className="text-[30px] sm:text-[42px] md:text-[53px] font-bold text-yellow-400 mt-2">
//             Construction Plans
//           </h2>
//           <p className="mt-4 text-[14px] sm:text-[15px] md:text-lg max-w-xl">
//             Browse, Customize, and Download Premium Architectural Plans
//             Instantly — For Any Budget, Style, or Space.
//           </p>

//           {/* Search Filters */}

//           {/* Statistics */}

//           <div className=" w-full flex justify-between items-center ">
//             <div>
//               {/* Tabs */}
//               <div className="mt-8 flex gap-4 w-[25%] bg-white text-black border border-gray-200 rounded-t-[10px] p-2">
//                 <button className="border-b-2 border-gray-400 font-medium">
//                   House
//                 </button>
//                 <button className="text-gray-500">Villa</button>
//                 <button className="text-gray-500">Flat</button>
//               </div>
//               <div className="">
//                 <div className="flex flex-col sm:flex-row flex-wrap gap-4 bg-white text-black border border-gray-200 rounded-b-[10px] p-4">
//                   <Select>
//                     <SelectTrigger className="w-full sm:w-[180px] border-0">
//                       <SelectValue placeholder="Property Type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="light">Light</SelectItem>
//                       <SelectItem value="dark">Dark</SelectItem>
//                       <SelectItem value="system">System</SelectItem>
//                     </SelectContent>
//                   </Select>

//                   <Select>
//                     <SelectTrigger className="w-full sm:w-[180px] border-0">
//                       <SelectValue placeholder="Price Range" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="light">Light</SelectItem>
//                       <SelectItem value="dark">Dark</SelectItem>
//                       <SelectItem value="system">System</SelectItem>
//                     </SelectContent>
//                   </Select>

//                   <Select>
//                     <SelectTrigger className="w-full sm:w-[180px] border-0">
//                       <SelectValue placeholder="Sq ft Range" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="light">Light</SelectItem>
//                       <SelectItem value="dark">Dark</SelectItem>
//                       <SelectItem value="system">System</SelectItem>
//                     </SelectContent>
//                   </Select>

//                   <Button
//                     className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] ml-0 sm:ml-2"
//                     style={{ borderColor: "#D8A526" }}
//                   >
//                     Search
//                     <IoSearch />
//                   </Button>
//                 </div>

//                 <div className="flex flex-col  mt-10">
//                   <div className="flex gap-16 sm:gap-32 md:gap-[220px]">
//                     <h1 className="text-[40px] sm:text-[50px] md:text-[61px] font-medium">
//                       1.2K +
//                     </h1>
//                     <h1 className="text-[40px] sm:text-[50px] md:text-[61px] font-medium">
//                       4K +
//                     </h1>
//                   </div>
//                   <div className="flex gap-16 sm:gap-32 md:gap-[210px]">
//                     <h1 className="text-[16px] sm:text-[18px] md:text-[19px] mt-3 font-medium">
//                       Happy Customer
//                     </h1>
//                     <h1 className="text-[16px] sm:text-[18px] md:text-[19px] mt-3 font-medium">
//                       Design Ready
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <Carousel
//                 opts={{
//                   align: "start",
//                   loop: false,
//                   skipSnaps: true,
//                   dragFree: true,
//                 }}
//                 plugins={[
//                   Autoplay({
//                     delay: 1500, // 3 seconds
//                     stopOnInteraction: false,
//                     stopOnMouseEnter: true,
//                   }),
//                 ]}
//                 className=""
//                 setApi={(api) => {
//                   if (api) {
//                     // Set initial slide
//                     setCurrentSlide(api.selectedScrollSnap())

//                     // Listen for slide changes
//                     api.on("select", () => {
//                       setCurrentSlide(api.selectedScrollSnap())
//                     })
//                   }
//                 }}
//               >
//                 <CarouselContent>
//                   {scrollImage.map((item, index) =>{
//                     const isActive = index === currentSlide
//                     return(
//                     <CarouselItem
//                       key={index}
//                       className={`md:basis-1/2 lg:1/2 ml-8 ${isActive?'scale-125 z-20':'scale-90 opacity-60'}`}
//                     >
//                       <div className="">
//                         {/* Card with semi-transparent background */}
//                         <Card className="bg-black/30 backdrop-blur-sm border-gray-400/20 p-0 ">
//                           <CardContent className="flex aspect-square items-center justify-center p-9 rounded-lg bg-white/10">
//                             {/* Semi-transparent background overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-300/20 rounded-lg"></div>
//                             <img
//                               src={item.image || "/placeholder.svg"}
//                               alt={item.alt}
//                               className={item.className}
//                             />
//                           </CardContent>
//                         </Card>
//                       </div>
//                     </CarouselItem>
//                   )
//                   }

//                    )}
//                 </CarouselContent>
//               </Carousel>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Image */}
//         <div className="hidden md:absolute md:top-[500px] left-[30%] lg:left-[58%]">
//           <div className="bg-gray-300 w-[278px] h-[326px] opacity-40 border rounded-2xl"></div>
//           <img
//             src="/assets/kamathenu Images/Landing_page_Scroll/scroll_2.png"
//             alt="Scroll Design"
//             className="absolute top-14 rotate-[-90deg] w-[250px] md:w-[700px] h-auto"
//           />
//         </div>
//       </div>
//     </>
//   );
// }



"use client";

import { IoSearch } from "react-icons/io5";


import "../../Style/anite/headerBgImage.css";
import Autoplay from "embla-carousel-autoplay";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabHero";

export default function Hero() {

  

  
  const [userType, setUserType] = useState(['House', 'Villa', 'Flat'])
  const [activeUserType, setActiveUserType] = useState(userType[0])
  const scrollImage = [
    {
      id: 1,
      image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_1.png",
      alt: "Scroll Design",
      className: "absolute top-17  rotate-[-90deg] w-[270px] md:w-[270px] lg:w-[330px]  opacity-95 z-10",
    },
    {
      id: 2,
      image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_2.png",
      alt: "Scroll Design",
      className:
        "absolute top-20 left-5  rotate-[-90deg] w-[250px] md:w-[250px] lg:w-[300px] opacity-95 z-10",
    },
    {
      id: 3,
      image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_3.png",
      alt: "Scroll Design",
      className:
        "absolute top-23 lg:top-26 rotate-[-90deg] w-[250px] md:w-[220px] lg:w-[290px] opacity-100 z-10",
    },
    {
      id: 4,
      image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_4.png",
      alt: "Scroll Design",
      className: "absolute top-23 lg:top-26 rotate-[-90deg] w-[250px] md:w-[210px] lg:w-[280px] opacity-95 z-10",
    },
    {
      id: 5,
      image: "/assets/kamathenu Images/Landing_page_Scroll/scroll_5.png",
      alt: "Scroll Design",
      className:
        "absolute top-20 lg:top-26 rotate-[-90deg] w-[250px] md:w-[250px] lg:w-[300px] opacity-95 z-10",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <>
      <div className="relative w-full h-auto md:h-[945px]">
        <div className="absolute inset-0 bg-cover bg-center bg-hero-slider transition-bg duration-1000">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Foreground content */}
        <div className="relative flex flex-col justify-center items-start px-5 sm:px-10 md:px-20 text-white py-20 md:py-[240px]">
          <h1 className="text-[32px] sm:text-[45px] md:text-[55px] font-normal">
            Build Your Dream Home
          </h1>
          <h2 className="text-[30px] sm:text-[42px] md:text-[53px] font-bold text-yellow-400 mt-2">
            Construction Plans
          </h2>
          <p className="mt-4 text-[14px] sm:text-[15px] md:text-lg max-w-xl">
            Browse, Customize, and Download Premium Architectural Plans Instantly
            — For Any Budget, Style, or Space.
          </p>

          
          <div className="mt-12 w-full flex justify-between items-center ">
            <div className="">
              <Tabs className=""
                value={activeUserType}
                onValueChange={setActiveUserType}
                defaultValue={userType[0]}
              >
                <TabsList className="flex flex-wrap justify-center  bg-white text-black border border-gray-200 rounded-t-[10px] mb-0 " >
                  {userType.map((category) => (
                    <TabsTrigger key={category} value={category} className="text-sm sm:text-base md:text-lg ">
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {userType.map((category) => (
                  <TabsContent key={category} value={category}>
                    {category ==='House'  && (
                      
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 bg-white text-black border border-gray-200 rounded-b-[10px] p-4">
                    <Select>
                      <SelectTrigger className="w-full sm:w-[180px] border-0">
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="w-full sm:w-[180px] border-0">
                        <SelectValue placeholder="Price Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="w-full sm:w-[180px] border-0">
                        <SelectValue placeholder="Sq ft Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button
                      className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] ml-0 sm:ml-2"
                      style={{ borderColor: "#D8A526" }}
                    >
                      Search
                      <IoSearch />
                    </Button>
                  </div>
                    )}
                    {category ==='Villa'  && (
                      
                      <div className="flex flex-col sm:flex-row flex-wrap gap-4 bg-white text-black border border-gray-200 rounded-b-[10px] p-4">
                      <Select>
                        <SelectTrigger className="w-full sm:w-[180px] border-0">
                          <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
  
                      <Select>
                        <SelectTrigger className="w-full sm:w-[180px] border-0">
                          <SelectValue placeholder="Price Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
  
                      <Select>
                        <SelectTrigger className="w-full sm:w-[180px] border-0">
                          <SelectValue placeholder="Sq ft Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
  
                      <Button
                        className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] ml-0 sm:ml-2"
                        style={{ borderColor: "#D8A526" }}
                      >
                        Search
                        <IoSearch />
                      </Button>
                    </div>
                    )}
                    {category ==='Flat'  && (
                      
                      <div className="flex flex-col sm:flex-row flex-wrap gap-4 bg-white text-black border border-gray-200 rounded-b-[10px] p-4">
                      <Select>
                        <SelectTrigger className="w-full sm:w-[180px] border-0">
                          <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
  
                      <Select>
                        <SelectTrigger className="w-full sm:w-[180px] border-0">
                          <SelectValue placeholder="Price Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
  
                      <Select>
                        <SelectTrigger className="w-full sm:w-[180px] border-0">
                          <SelectValue placeholder="Sq ft Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
  
                      <Button
                        className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] ml-0 sm:ml-2"
                        style={{ borderColor: "#D8A526" }}
                      >
                        Search
                        <IoSearch />
                      </Button>
                    </div>
                      )}





                  </TabsContent>
                ))}
              </Tabs>

              {/* <div className="flex flex-col sm:flex-row flex-wrap gap-4 bg-white text-black border border-gray-200 rounded-b-[10px] p-4">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px] border-0">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full sm:w-[180px] border-0">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full sm:w-[180px] border-0">
                    <SelectValue placeholder="Sq ft Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] ml-0 sm:ml-2" style={{ borderColor: "#D8A526" }}>
                  Search
                  <IoSearch />
                </Button>
              </div> */}

              <div className="flex flex-col  mt-10">
                <div className="flex gap-16 sm:gap-32 md:gap-[220px]">
                  <h1 className="text-[40px] sm:text-[50px] md:text-[61px] font-medium">
                    1.2K +
                  </h1>
                  <h1 className="text-[40px] sm:text-[50px] md:text-[61px] font-medium">
                    4K +
                  </h1>
                </div>
                <div className="flex gap-16 sm:gap-32 md:gap-[210px]">
                  <h1 className="text-[16px] sm:text-[18px] md:text-[19px] mt-3 font-medium">
                    Happy Customer
                  </h1>
                  <h1 className="text-[16px] sm:text-[18px] md:text-[19px] mt-3 font-medium">
                    Design Ready
                  </h1>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                  skipSnaps: true,
                  dragFree: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 1500, // 3 seconds
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                  }),
                ]}
                className=""
                setApi={(api) => {
                  if (api) {
                    // Set initial slide
                    setCurrentSlide(api.selectedScrollSnap())

                    // Listen for slide changes
                    api.on("select", () => {
                      setCurrentSlide(api.selectedScrollSnap())
                    })
                  }
                }}
              >
                <CarouselContent>
                  {scrollImage.map((item, index) => {
                    const isActive = index === currentSlide
                    return (
                      <CarouselItem
                        key={index}
                        className={`md:basis-1/2 lg:1/2 ml-8 ${isActive ? 'scale-110 z-20' : 'scale-90 opacity-60'}`}
                      >
                        <div className="">
                          {/* Card with semi-transparent background */}
                          <Card className="bg-black/30 backdrop-blur-sm border-gray-400/20 p-0 ">
                            <CardContent className="flex aspect-square items-center justify-center p-9 rounded-lg bg-white/10">
                              {/* Semi-transparent background overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-300/20 rounded-lg"></div>
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.alt}
                                className={item.className}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    )
                  }

                  )}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

        </div>

        {/* Scroll Image */}
        <div className="hidden md:absolute md:top-[500px] left-[30%] lg:left-[58%]">
          <div className="bg-gray-300 w-[278px] h-[326px] opacity-40 border rounded-2xl"></div>
          <img
            src="/assets/kamathenu Images/Landing_page_Scroll/scroll_2.png"
            alt="Scroll Design"
            className="absolute top-14 rotate-[-90deg] w-[250px] md:w-[700px] h-auto"
          />
        </div>


      </div>
    </>
  );
}