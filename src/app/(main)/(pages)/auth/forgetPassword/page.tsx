"use client"
import Header from "@/app/components/layout/Header";
import { Button } from "@/components/ui/button";

import loginLogo from '../../../../../../public/assets/kamathenu Images/login/Group 715.png'
import Footer from "@/app/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance";
import joi from "joi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const ForgetPasswordPage = () => {
    const router=useRouter()
    const [userEmail, setUserEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [showuserPassword, setShowuserPassword] = useState(false)
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmPassword, setUserConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isOtpLoading, setIsOtpLoading] = useState(false)
    const setData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value)
    }
    const handleGetOtp = async () => {
        setIsLoading(true)
        const emailValidation = joi.string().email().required()
        const { error } = emailValidation.validate(userEmail)
        if (!error) {
            const response = await axiosInstance.post('/auth/forgetPassword', { email: userEmail })
            if (response.status === 200) {
                toast.success('OTP sent to your email')
            }
            else {
                toast.error('Failed to send OTP')
                setIsLoading(false)
            }
            console.log(response)
        } else {
            toast.error('Invalid email')
            setIsLoading(false)
            return;
        }
        setIsLoading(false)
    }
    const handleVerifyOtp = async () => {
        if (otp.length !== 6) {
            toast.error('Invalid OTP')
            setIsOtpLoading(false)
            return;
        }
        setIsOtpLoading(true)
        const payload = {
            email: userEmail,
            otp: otp
        }
        const response = await axiosInstance.post('/auth/verifcationForgetUserOTP', payload)
        if (response.status === 200) {
            toast.success('OTP verified')
            setShowuserPassword(true)
            setIsOtpLoading(false)
        }
       
        else if (response.status !== 200) {
            toast.error('Something went wrong')
            setShowuserPassword(true)
            setIsOtpLoading(false)
        }
    }
    const handleResetPassword = async () => {
        var passwordValidation = joi.string().min(8).required()
        var { error } = passwordValidation.validate(userPassword)
        if (!error) {
            if (userPassword === userConfirmPassword) {
                const payload = {
                    email: userEmail,
                    password: userPassword
                }
                const response = await axiosInstance.post('/auth/updatePassword', payload)
                if (response.status === 200) {
                    toast.success('Password reset successfully')
                    router.push('/auth/signin')
                }

            }
            else {
                toast.error('Password and Confirm Password do not match')
            }
        }
        else {
            toast.error('Password must be at least 8 characters long')
        }


    }
    return (

        <div>
            <Header headerColor={["#D8A526", "white"]} />
            <div className=" px-8 my-35 lg:flex lg:pl-58  lg:pt-13 lg:ml-42">
                <div className='w-[40%] px-19 border-1 border-gray-300 rounded-lg flex flex-col justify-center items-center gap-5'>
                    <div className="flex gap-3">
                        <Input placeholder="Enter Your Email" className="w-[300px] h-[40px] rounded-lg border-1 border-gray-300" onChange={(e) => setUserEmail(e.target.value)} />
                        {!isLoading && <Button className="w-[100px] h-[40px] rounded-lg bg-gray-600 text-white cursor-pointer" onClick={handleGetOtp}>Get OTP</Button>
                        }
                        {isLoading && (
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 animate-spin " viewBox="0 0 24 24">
                                    <circle className="opacity-25 " cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75 text-yellow-400" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span className="text-grey-400">Sending...</span>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-3">
                        <InputOTP
                            maxLength={6}
                            value={otp}
                            onChange={(value) => setOtp(value)}
                        //   disabled={!otpSent}
                        >
                            <InputOTPGroup className="gap-2">
                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                    <InputOTPSlot
                                        key={index}
                                        className={`w-11 h-10 text-lg font-semibold `}
                                        index={index}
                                    />
                                ))}
                            </InputOTPGroup>
                        </InputOTP>
                        {!isOtpLoading && <Button className="w-[100px] h-[40px] rounded-lg bg-gray-600 text-white cursor-pointer" disabled={isOtpLoading} onClick={handleVerifyOtp}>Verify OTP</Button>
                        }
                        {isOtpLoading && (
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                                    <circle className="opacity-25 " cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75 text-yellow-400" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span className="text-grey-400">Verifying...</span>
                            </div>
                        )}
                    </div>
                    {showuserPassword && <div className="flex flex-col gap-5 items-center">
                        <Input placeholder="Enter New Password" className="w-[410px] h-[40px] rounded-lg border-1 border-gray-300" onChange={(e) => setUserPassword(e.target.value)} />
                        <Input placeholder="Confirm Password" className="w-[410px] h-[40px] rounded-lg border-1 border-gray-300" onChange={(e) => setUserConfirmPassword(e.target.value)} />
                        <Button className="w-[150px] p-4 h-[40px] rounded-lg bg-gray-600 text-white cursor-pointer" onClick={handleResetPassword}>Reset Password</Button>
                    </div>}
                </div>
                <div className=" hidden  lg:block flex flex-col w-[500px] h-[550px] border-1 border-gray-300 rounded-lg p-12 bg-gray-100 relative right-2" >
                    <img src={loginLogo.src} alt="login-logo" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default ForgetPasswordPage;