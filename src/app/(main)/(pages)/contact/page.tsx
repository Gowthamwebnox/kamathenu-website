"use client"

import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import axiosInstance from "@/app/utils/axiosInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { toast } from "sonner";




export default function Contact() {
    const [getContactInformation, setContactInformation] = useState<{ name: string, email: string, subject: string, message: string }>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [sumitLoading, setSumitLoading] = useState(true)
    const setData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactInformation({ ...getContactInformation, [e.target.name]: e.target.value })
    }
    const handleSendMessage = async () => {
        setSumitLoading(false)
        console.log(getContactInformation)
        const response = await axiosInstance.post('contact/admimContact', getContactInformation)
        if (response.status === 200) {
            toast("Message sent successfully", {
                description: "We'll get back to you as soon as possible.",
                style: {
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    textAlign: "center",
                    border: "1px solid #D8A526",
                    width: "275px",
                },
                // action: {
                //   label: "Undo",
                //   onClick: () => console.log("Undo"),
                // },
            })
            setContactInformation({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
            setSumitLoading(true)
        }
        if(response.status==400){
            toast("Message not sent", {
                description: "Please fill out the form correctly.",
                style: {
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "10px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    textAlign: "center",
                    border: "1px solid #D8A526",
                    width: "275px",
                },
            })
            setSumitLoading(true)
        }
    }
    return (
        <div className="bg-[#ffe066] h-[55vh]">
            <Header headerColor={['#ffe066', 'black']} />


            <div className="pt-28 ">
                <h1 className="text-center text-4xl font-bold">Get in touch with us</h1>
                <p className="text-center mt-7">We're here to help you with any questions or concerns you may have. Please fill out the form below and we'll get back to you as soon as possible.</p>
                <div className="grid grid-cols-12 items-center gap-8  lg:mx-42 my-35 border-1 border-none shadow-lg bg-white px-12 py-12 rounded-[10px] ">
                    <div className="border-1 rounded-[8px]  col-span-12 md:col-span-5  flex flex-col gap-8 px-20 py-20 bg-[#D8A526] text-white ">
                        <h1 className="text-[21px] font-semibold">Contact Information</h1>
                        <p className="text-[14px] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        <div className="flex items-center gap-2">
                            <div ><FaPhoneAlt className="size-6" /></div>
                            <div className="flex flex-col ">
                                <p className=" md:text-[17px] ">+91 9876543210</p>
                                <p className=" md:text-[17px] ">+91 9876543210</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div><HiOutlineMail className="size-6" /></div>
                            <div>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-7 flex flex-col gap-12 ">
                        <div className="flex gap-6 ">
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="name" className="text-[14px] font-serif text-gray-700">Your Name</Label>
                                <Input type="text" id="name" name="name" required value={getContactInformation.name} onChange={(e) => setData(e)} placeholder="" className="border-b-3 border-t-0 border-l-0 border-r-0 border-gray-300 rounded-[0px] " />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="email" className="text-[14px] font-serif text-gray-700">Email</Label>
                                <Input type="email" id="email" name="email" required placeholder="" value={getContactInformation.email} onChange={(e) => setData(e)} className="border-b-3 border-t-0 border-l-0 border-r-0 border-gray-300 rounded-[0px]" />
                            </div>

                        </div>

                        <div className="grid w-full  max-w-sm items-center gap-3">
                            <Label htmlFor="subject" className="text-[14px] font-serif text-gray-700">Your Subject</Label>
                            <Input type="text" id="subject" name="subject" required placeholder="" value={getContactInformation.subject} onChange={(e) => setData(e)} className="w-full sm:w-[151%]  lg:w-[113%] xl:w-[207%] border-b-3 border-t-0 border-l-0 border-r-0 border-gray-300  rounded-[0px] border-r-transparent " />
                        </div>
                        <div className="flex gap-6 ">
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="message" className="text-[14px] font-serif text-gray-700">Your Message</Label>
                                <Input type="textarea" id="message" name="message" required placeholder="" value={getContactInformation.message} onChange={(e) => setData(e)} className="w-full sm:w-[151%] md:w-[113%] lg:w-[113%] xl:w-[207%] border-b-3 border-t-0 border-l-0 border-r-0 border-gray-300 rounded-[0px] border-r-transparent " />
                            </div>

                        </div>
                        <div>
                            {sumitLoading &&<Button
                                className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] p-4"
                                style={{ borderColor: "#D8A526" }}
                                onClick={() => handleSendMessage()}
                            >
                                Send Message
                            </Button>}
                            {!sumitLoading &&<button type="button" className="" disabled>
                                    <svg className="mr-3 size-5 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                                        <circle className="text-[#D8A526]" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </button>}
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

