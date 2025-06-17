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

const SignupForm = () => {
  const [values, setValue] = React.useState("");
  const [signupDetails, setSignupDetails]=useState({
    name:'',
    email:'',
    password:'',
    otp:'',
  })
  const setData=(event:any)=>{
    if(event.target.name==='otp'){
        console.log(values)
        setSignupDetails({...signupDetails,[event.target.name]:values})
    }
    else{
    setSignupDetails({...signupDetails,[event.target.name]:event.target.value})

    }
  }

  const newUser=()=>{
    console.log(values)
    console.log(signupDetails)
  }
  const optGenerate=async()=>{
    const payload={
        method:'post',
        url:'http://localhost:8000/email/verification',
        data:{name:signupDetails.name,
            email:signupDetails.email}
    }
    const response = await axios(payload)

  }

  return (
    <div className="border-2 border-black rounded-[12px] ml-[31%] mt-[12%] p-[5%] w-[40%] bg-gray-100 ">
      <div className="grid w-[100%] items-center gap-3">
        <Input
          type="Name"
          id="Name"
          placeholder="Name"
          name="name"
          value={signupDetails.name}
          className="text-center p-5 border-2 border-black"
          onChange={(e)=>setData(e)}
        />
      </div>
      
      <div className="grid mt-5 w-[100%] items-center gap-3 ">
        <Input
          type="email"
          id="email"
          
          name="email"
          value={signupDetails.email}
          placeholder="Email"
          className="text-center  p-5 border-2 border-black"
          onChange={(e)=>setData(e)}
        />
      </div>
      <div className="grid mt-5 w-[100%] items-center gap-3 ">
        <Input
          type="Password"
          id="Password"
          
          name="password"
          value={signupDetails.password}
          placeholder="Enter Your Password"
          className="text-center  p-5 border-2 border-black"
          onChange={(e)=>setData(e)}
        />
      </div>
        <div className="mt-5  ml-16 md:flex items-center space-x-4 w-auto">
          <InputOTP
            maxLength={6}
            name="otp"
            value={values}
            onChange={(value) => setValue(value)}
          >
            <InputOTPGroup className="flex">
              <InputOTPSlot className="w-12 h-12  border-black " index={0} />
              <InputOTPSlot className="w-12 h-12 border-black " index={1} />
              <InputOTPSlot className="w-12 h-12 border-black" index={2} />
              <InputOTPSlot className="w-12 h-12 border-black" index={3} />
              <InputOTPSlot className="w-12 h-12 border-black" index={4} />
              <InputOTPSlot className="w-12 h-12 border-black" index={5} />
            </InputOTPGroup>
          </InputOTP>

          <Button name="otp" onClick={(e)=>{setData(e); optGenerate()}} className="border-2 border-black">Click To Get OTP</Button>
        </div>
      

      <div className="mt-9 ml-[38%]">
        <Button variant="outline" className="px-7 py-5 text-[18px] border-2 border-black"  onClick={newUser}>SignUp</Button>
      </div>
    </div>
  );
};

export default SignupForm;
