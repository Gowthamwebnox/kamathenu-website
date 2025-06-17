import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import React from 'react'
import { TiArrowRight } from 'react-icons/ti'

const DesignUploading = () => {
  return (
    <div className=''>
        <div className="relative mt-[13%] flex items-center   ">
          <div className="flex justify-center items-center ">
            {/* Background Image */}
            <img
              src="/assets/kamathenu Images/BAS/img_2.jpg"
              alt="background"
              className="w-[49%] h-auto   "
            />

            {/* Foreground Overlapping Image */}
            <div className="absolute left-[6%] top-[-10%] ">
              <img
                src="/assets/kamathenu Images/BAS/img_1.jpg"
                alt="foreground"
                className="w-[100%] h-[550px] border-[8px]  border-white shadow-2xl rounded-sm"
              />
            </div>
          </div>
          <div className="relative top-[-88]  w-[100%] flex flex-col items-start gap-17">
            <div>
              <p className="text-[30px] font-light ">
                Frequently asked question
              </p>
            </div>
            <div>
              <h1 className="text-[#D8A526] text-[30px] font-semibold w-[90%]  border-b-2 pb-3 ">
                We Have Become The Best In What We Do
              </h1>
            </div>
            <div>
              <Accordion
                type="single"
                collapsible
                className="w-full mt-2 ml-3"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1 ">
                  <AccordionTrigger>
                    <div className="flex items-start">
                      <TiArrowRight color="#D8A526" size={45} />
                      <span className="text-[26px] text-[#505050] ">
                        What kind of files can I upload?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 border-b-2 border-gray-400 pb-5 w-[85%] ">
                    <p className="text-[26px] text-gray-400 ml-10 w-[100%]  ">
                      PDF, CAD (.dwg), images, 3D renders-according to our plan
                      upload guide.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2 ">
                  <AccordionTrigger>
                    <div className="flex items-start mt-8">
                      <TiArrowRight color="#D8A526" size={38} />
                      <span className="text-[26px] text-[#505050] ">
                        Do I retain ownership of my designs?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 border-b-2 border-gray-400 pb-5 ">
                    <p className="text-[26px] text-gray-400 ml-10 w-[80%]  ">
                      Yes, You retain full ownership and license them for sale.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-start mt-8">
                      <TiArrowRight color="#D8A526" size={38} />
                      <span className="text-[26px] text-[#505050] ">
                        How to payouts work?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 border-b-2 border-gray-400 pb-5 w-[85%] ">
                    <p className="text-[26px] text-gray-400 ml-10 w-[100%]  ">
                      You &apos; ll be paid directly to your bank account or UPI every
                      week/month.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div>
              <Button
                className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] text-[23px] font-normal py-7"
                style={{ borderColor: "#D8A526" }}
              >
                Upload your design
              </Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DesignUploading