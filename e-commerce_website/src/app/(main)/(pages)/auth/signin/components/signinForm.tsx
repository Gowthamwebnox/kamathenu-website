'use client'
import ApiService from '@/app/components/apiCall';
import axiosInstance from '@/app/utils/axiosInstance';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Link } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import userData from '@/app/(main)/StateManagement/userData'

const SigninForm = () => {
  const userDataStore=userData((state:any)=>state.setUserData)
    const router=useRouter()
  const[loginData,setloginData]=useState({
    email:'',
    password:''
  })
  const setData=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setloginData({...loginData,[event.target.name]:event.target.value})
  }

  const handleLogin=async()=>{
     console.log(loginData+">>>>>>>>>>>>>>")
     const payload:{data:any}={
        data:{
          email:loginData.email,
          password:loginData.password
        }

     }
     const response:any = await axiosInstance.post('auth/login',payload.data);
     console.log(response.data +">>>>>>>>>>>>token<<<<<<<<<<<<<<<<<");
     
     if(response.data=="Password is incorrect"){
      alert("Password is incorrect")
     }
     else{
      console.log("response.data.UserData 🔥🔥🔥🔥🔥 ", response.data.user.name);
      userDataStore(response.data.user.name)
      localStorage.setItem('jwtToken', response.data.Token);
      router.push('/')
     }
  }
  const handleGoogleLogin=async()=>{
    const url='http://localhost:8000/api/auth/google'
    
    window.location.href=url
    const response:any = await axiosInstance.get('auth/google');
    const urlParams = new URLSearchParams(window.location.search);
    const token:string|null = urlParams.get('token');
    console.log(token+">>>>>>>>>>>>>>>>>>>>>>>>>TOKEN<<<<<<<<<<<<<<<<<<<<<<")
    localStorage.setItem('jwtToken', token||'');
    
    
  }
  return (
    
    <div className="p-8 md:p-12 flex flex-col">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Login to your account
      </h1>

      {/* {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle className="flex justify-between items-center">
            {error ? error : "An error occurred during sign in"}{" "}
            {error == "Please verify your email" && (
              <Button
                className="text-blue-800 cursor-pointer"
                variant={"link"}
                onClick={handleResendVerificationMail}
              >
                Resent Mail
              </Button>
            )}
          </AlertTitle>
        </Alert>
      )} */}

      <div className="grid grid-cols-3 gap-4 mb-6 w-[12rem]  mx-auto ">
        <Button
          variant="outline"
        //   onClick={() => handleSocialSignIn("google")}
        //   disabled={isLoading}
          className="py-6 aspect-square rounded-full border-gray-300 hover:bg-gray-50 cursor-pointer" 
          onClick={()=>{handleGoogleLogin()}}
        >
          {/* <Image
            src={"/assets/icons/google.png"}
            width={20}
            height={20}
            alt="google-icon"
            className="rounded-full"
          />  */}
          
          <img src="/assets/icons/google.png" alt="google-icon" className="rounded-full w-5 h-5" />
          <span className="hidden ">Login with google</span>
        </Button>

        {/* <Button
          variant="outline"
        //   onClick={() => handleSocialSignIn("apple")}
        //   disabled={isLoading}
          className="py-6 aspect-square rounded-full border-gray-300 hover:bg-gray-50"
        >
          <img
            src={""}
            width={20}
            height={20}
            alt="apple-icon"
            className="rounded-full"
          />
          <span className="hidden ">Login with Apple</span>
        </Button> */}
        {/* <Button
          variant="outline"
        //   onClick={() => handleSocialSignIn("linkedin")}
        //   disabled={isLoading}
          className="py-6 aspect-square rounded-full border-gray-300 hover:bg-gray-50"
        >
          <img
            src={"/assets/icons/linkedin.png"}
            width={20}
            height={20}
            alt="linkedin-icon"
            className="rounded-full"
          />
          <span className="hidden ">Login with Linkedin</span>
        </Button> */}
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            or login with Email
          </span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          
          <Input
            id="email"
            type="email"
            name='email'
            placeholder="john.doe@gmail.com"
            value={loginData.email}
            onChange={(e) => setData(e)}
            required
            // disabled={isLoading}
            className="py-6 px-4 rounded-full"
          />
        </div>
        <div className="space-y-2">
          
          <div className="relative">
            <Input
              id="password"
              type="password"
              name='password'
              placeholder="••••••••••••••••••••••"
              value={loginData.password}
              onChange={(e) => setData(e)}
              required
            //   disabled={isLoading}
              className="py-6 px-4 rounded-full"
            />
            <Button
              type="button"
              variant="ghost"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              onClick={() => {
                const passwordInput = document.getElementById(
                  "password"
                ) as HTMLInputElement;
                if (passwordInput) {
                  passwordInput.type =
                    passwordInput.type === "password" ? "text" : "password";
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <button
            type="button"
            // onClick={handleForgotPassword}
            className="text-sm font-medium text-red-600 hover:text-red-500 cursor-pointer"
            disabled={false}  
          >
            {false ? (
              
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Forgot Password?"
            )}
          </button>

        </div>

        <Button
          onClick={() => {
            handleLogin();
          }}
          className="w-full py-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
        //   disabled={isLoading}
        >
          {false ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </div>

      <p className="mt-8 text-center text-sm text-gray-600" onClick={()=>{
        router.push('/auth/signup')
      }}>
        Don't have an account?
        <Link
          href="/auth/signup"
          className="font-medium text-red-600 hover:text-red-500"
          
        >
          create an account
        </Link>
      </p>
    </div>
  )
}

export default SigninForm