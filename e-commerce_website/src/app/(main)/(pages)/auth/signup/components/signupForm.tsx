"use client";
import React from "react";

import { Input } from "@/components/ui/input";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

const SignupForm = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="border-2 border-black p-[5%] w-[40%] bg-gray-100 ">
      <div className="grid w-[100%] items-center gap-3">
        <Input
          type="Name"
          id="Name"
          placeholder="Name"
          className="text-center p-5 border-2 border-black"
        />
      </div>
      <div className="grid mt-5 w-[100%] items-center gap-3 ">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="text-center  p-5 border-2 border-black"
        />
      </div>
        <div className="mt-5  ml-16 flex items-center space-x-4 w-full">
          <InputOTP
            maxLength={6}
            value={value}
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

          <Button className="border-2 border-black">OTP Verification</Button>
        </div>
      

      <div className="mt-9 ml-[38%]">
        <Button variant="outline" className="px-7 py-5 text-[18px] border-2 border-black" >SignUp</Button>
      </div>
    </div>
  );
};

export default SignupForm;
