"use client";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import axios from 'axios';
import { useRouter } from "next/navigation";
// interface SignupResponse {
//   name: string;
//   email: string;
//   passWord: string;
//   OTP: string; // <-- add this
// }
// interface SignupRequestPayload {
//   method: 'post'; // literal type
//   url: string;
//   headers: {
//     'Content-Type': string;
//   };
//   data: {
//     name: string;
//     email: string;
//     passWord: string;  // (or `password: string` if you want lowercase)
//   };
// }


const SignupForm = () => {
  const routes=useRouter();
  const [signupDetails, setSignupDetails] = useState({
    name: '',
    email: '',
    password: '',
    otp: '',
  });
  // const [userOTP, setUserOTP] = useState<string>('');
  const [verify, setVerify] = useState(false);

  const setData = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSignupDetails({
      ...signupDetails,
      [event.target.name]: event.target.value,
    });
  };

  const otpVerification = () => {
    // console.log("otp verification");
    // console.log("Server OTP:", userOTP);
    // console.log("User OTP:", signupDetails.otp);
    // if (userOTP == signupDetails.otp) {
    //   console.log("verified successfully");
      setVerify(true);
    // } else {
    //   alert("Invalid OTP");
    // }
  };

  const optGenerate = async () => {
    const payload = {
      method: 'post',
      url: 'http://localhost:8000/api/verifyOTP',
      headers: { 'Content-Type': 'application/json' },
      data: {
        name: signupDetails.name,
        email: signupDetails.email,
        passWord: signupDetails.password
      }
    };
    const response = await axios(payload);
    console.log(response.data);
    // setUserOTP(response.data.OTP);
  };

  const handleSignup = async() => {
    console.log(signupDetails);
    const payload={
      method:'post',
      url:'http://localhost:8000/api/newuser',
      data:{signupDetails,isEmailValidation:true}
    }
    const response=await axios(payload)
    if(response.status===200){
      alert(response.data)
      routes.push('/')

    }
  };

  return (
    <div className="border-2 border-black rounded-[12px] ml-[31%] mt-[12%] p-[5%] w-[40%] bg-gray-100 ">
      <div className="grid w-[100%] items-center gap-3">
        <Input
          type="text"
          name="name"
          value={signupDetails.name}
          placeholder="Name"
          className="text-center p-5 border-2 border-black"
          onChange={setData}
        />
      </div>

      <div className="flex mt-5 w-[100%] items-center gap-3">
        <Input
          type="email"
          name="email"
          value={signupDetails.email}
          placeholder="Email"
          className="text-center p-5 border-2 border-black"
          onChange={setData}
        />
        <button
          className="border-2 p-3 border-black text-white bg-black rounded-4xl"
          onClick={optGenerate}
        >
          OTP
        </button>
      </div>

      <div className="grid mt-5 w-[100%] items-center gap-3">
        <Input
          type="password"
          name="password"
          value={signupDetails.password}
          placeholder="Enter Your Password"
          className="text-center p-5 border-2 border-black"
          onChange={setData}
        />
      </div>

      <div className="mt-5 md:flex items-center space-x-4 w-auto">
        <InputOTP
          maxLength={6}
          name="otp"
          value={signupDetails.otp}
          onChange={(value) =>
            setSignupDetails({ ...signupDetails, otp: value })
          }
        >
          <InputOTPGroup className="flex">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <InputOTPSlot
                key={index}
                className="w-12 h-12 border-black"
                index={index}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        <Button onClick={otpVerification} className="sm:block md:border-2 border-black">
          Verify
        </Button>
      </div>

      {verify  && (
        <div className="mt-9 ml-[38%]">
          <Button
            variant="outline"
            className="px-7 py-5 text-[18px] border-2 border-black"
            onClick={handleSignup}
          >
            SignUp
          </Button>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
