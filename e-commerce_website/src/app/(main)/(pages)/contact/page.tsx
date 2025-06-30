import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; 
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
    return (
        <div>
            <Header headerColor={['white', 'black']} />

            <div className="mt-38 ">
                <h1 className="text-center text-4xl font-bold">Get in touch with us</h1>
                <p className="text-center mt-7">We're here to help you with any questions or concerns you may have. Please fill out the form below and we'll get back to you as soon as possible.</p>
                <div className="flex items-center justify-center">
                    <div className="border-1 border m-20 px-20 py-10 ">
                        <h1>Contact Information</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                        <div className="flex items-center gap-2">
                            <div><FaPhoneAlt /></div>
                            <div>
                                <p>+91 9876543210</p>
                                <p>+91 9876543210</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div><HiOutlineMail /></div>
                            <div>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-6 ">
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="Name">Your Name</Label>
                                <Input type="text" id="Name" placeholder=""  className="border-b-2 border-t-0 border-l-0 border-r-0 border-gray-300 transparent-null"/>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" placeholder="Email" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

