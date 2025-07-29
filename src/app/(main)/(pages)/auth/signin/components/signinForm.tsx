'use client'
import axiosInstance from '@/app/utils/axiosInstance';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import loginLogo from '../../../../../../../public/assets/kamathenu Images/login/Group 715.png'
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import userDataStore from '@/app/(main)/StateManagement/userData';

const SigninForm = () => {
  // const userDataStore=userData((state:any)=>state.setUserData)
  // const userIdStore=userData((state:any)=>state.setUserId)
  const { userData, setUserData, clearUserData } = userDataStore();
  const router = useRouter()
  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const userDataString = urlParams.get('user');
      
      if (userDataString) {
        try {
          const userData = JSON.parse(decodeURIComponent(userDataString));
          console.log("Parsed user data:", userData);
          
          setUserData({
            userId: userData.userId,
            userName: userData.userName,
            userEmail: userData.userEmail,
            token: userData.token || '',
            userRole: userData.userRole,
            sellerId: userData.userSellerProfile|| '',
          });
          router.push('/')
          
        } catch (error) {
          console.error("Error parsing user data:", error);
          console.log("Raw userDataString:", userDataString);
        }
      }
    }
  }, []);

  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  })

  const setData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setloginData({ ...loginData, [event.target.name]: event.target.value })
  }


  const handleLogin = async () => {
    console.log(loginData + ">>>>>>>>>>>>>>")
    const payload: { data: any } = {
      data: {
        email: loginData.email,
        password: loginData.password
      }

    }
    const response: any = await axiosInstance.post('auth/login', payload.data);
    console.log(response.data + ">>>>>>>>>>>>token<<<<<<<<<<<<<<<<<");

    if (response.data == "Password is incorrect") {
      alert("Password is incorrect")
    }
    else {
      //   userDataStore(response.data.user.name)
      //   userIdStore(response.data.user.id)
      // localStorage.setItem('jwtToken', response.data.Token);
      setUserData({
        userId:response.data.user.id,
        userName:response.data.user.name,
        userEmail:response.data.user.email,
        token:response.data.Token,
        userRole:response.data.user.roleId,
        sellerId:response.data.user.sellerProfile?.id||'',
      })
        router.push('/')
    }
  }
  const handleGoogleLogin = async () => {
    const url = 'http://localhost:8000/api/auth/google'
    window.location.href = url
    const response: any = await axiosInstance.get('auth/google');
    


  }
  return (


    <div>
      <Header headerColor={["#D8A526", "white"]} />
      <div className=" px-8 my-35 lg:flex lg:pl-58  lg:pt-13 lg:ml-42">
        <div className=" p-8 w-full lg: flex flex-col border-1 border-gray-300  lg:w-[40%] h-[550px] ">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Login to your account
          </h1>



          <div className="flex justify-center mb-6 w-[12rem]  mx-auto ">
            <Button
              variant="outline" className="py-6 aspect-square rounded-full border-gray-300 hover:bg-gray-50 cursor-pointer" onClick={() => { handleGoogleLogin() }}>
              <FcGoogle />
              <span className="hidden ">Login with google</span>
            </Button>


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

          <p className="mt-8 text-center text-sm text-gray-600" onClick={() => {
            router.push('/auth/signup')
          }}>
            Don&apos;t have an account?<span className="ml-2 font-medium text-red-600 hover:text-red-500 cursor-pointer" onClick={() => {
              router.push('/auth/signup')
            }}>
              create an account
            </span>
            {/* <Link
          href="/auth/signup"
          className="font-medium text-red-600 hover:text-red-500">
          create an account
        </Link> */}
          </p>
        </div>
        <div className=" hidden  lg:block flex flex-col w-[500px] h-[550px] border-1 border-gray-300 rounded-lg p-12 bg-gray-100 relative right-2" >
          <img src={loginLogo.src} alt="login-logo" className="w-[400px] h-[400px] object-cover" />
        </div>
      </div>
      <Footer />
    </div>


  )
}

export default SigninForm