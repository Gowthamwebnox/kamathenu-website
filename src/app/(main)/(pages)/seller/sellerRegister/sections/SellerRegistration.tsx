"use client";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import type React from "react";
import { z } from "zod";
import { Fragment, useEffect, useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, X, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  StepperForm,
  Tabs,
  Tab,
  TabContent,
  FormField,
  Actions,
  type StepperFormState,
  useStepperForm,
} from "@/components/ui/stepper-form";
import { CustomInput } from "@/components/ui/stepper-form/form-input";
import { useSellerRegistrationStore, tabSchemas } from "@/app/(main)/(pages)/seller/sections/sellerRegistrationStore";
// import PaymentButton from "@/components/common/Payment/PaymentButton";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import SigninForm from "@/app/(main)/(pages)/auth/signin/components/signinForm";
import AXIOS from "@/app/utils/axiosInstance";
import { validate } from "uuid";
import { SellerStatus } from "./sellerStatus";
import { AddressInput } from "@/components/Address";
// import { S3Storage } from "@/app/utils/s3";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/app/utils/axiosInstance";
import { S3Storage } from "@/lib/s3";
import { TbRotateClockwise2 } from "react-icons/tb";
import userDataStore from "@/app/(main)/StateManagement/userData";

interface UserData {
  id: string;
  name: string;
  email: string;
  isSeller: boolean;
  isSellerApproved: boolean;
  sellerStatus?: string;
  sellerId?: string;
}

// Validation schemas are now defined in the seller registration store
const formSchema = z.object({
  // Combined schema for final validation
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  gstn: z.string().min(15, "GSTN must be 15 characters"),
  fcrn: z.string().optional(),
  storeName: z.string().min(2, "Store name must be at least 2 characters"),
  storeDescription: z.string().optional(),
  address: z.string().min(1, "Please select an address"),
  pincode: z.string().min(6, "Pincode must be 6 characters"),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  documents: z.array(z.string()).optional(),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  accountHolderName: z
    .string()
    .min(2, "Account holder name must be at least 2 characters"),
  accountNumber: z
    .string()
    .min(9, "Account number must be at least 9 characters"),
  bankName: z.string().min(2, "Bank name must be at least 2 characters"),
  ifscCode: z.string().min(11, "IFSC code must be 11 characters"),
  branchName: z.string().optional(),
  accountType: z.string().optional(),
  upiId: z.string().optional(),
});

type FormFieldValue = string | number | boolean | string[] | null;

interface FormFields {
  [key: string]: FormFieldValue;
}

type TabFormState = {
  fields: FormFields;
  errors?: Record<string, string>;
  isValid: boolean;
};

export default function SellerRegistration() {
  // //
  // const userDataStore=userData((state:any)=>state.setUserData)
  // const userIdStore=userData((state:any)=>state.setUserId)
  const router = useRouter()

  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  })

  const setData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setloginData({ ...loginData, [event.target.name]: event.target.value })
  }


  const{userData,setUserData,clearUserData}=userDataStore()
  const handleLogin = async () => {
    console.log(loginData + ">>>>>>>>>>>>>>")
    
    const payload: { data: any } = {
      data: {
        email: loginData.email,
        password: loginData.password
      }

    }

    try {
      const response: any = await axiosInstance.post('auth/login', payload.data);
      

      console.log(response.data + ">>>>>>>>>>>>token<<<<<<<<<<<<<<<<<");

      // Check if login was successful (status 200)
      if (response.status === 200 && response.data !== "Password is incorrect") {
        // Store token
        setUserData({
          userId:response.data.user.id,
          userName:response.data.user.name,
          userEmail:response.data.user.email,
          token:response.data.Token,
          userRole:response.data.user.roleId,
          sellerId:response.data.user.sellerProfile?.id||'',
        })
        if(response.data.user.sellerProfile.status==='Approved'){
          console.log("seller")
          router.push('/seller/products')
        }
        else if(response.data.user.sellerProfile.status==='Pending'){
          setShowSellerWaiting(true)
        }
        else{
          onFormChange({
            tabIndex: 0,
            fieldName: "loginStatus",
            value: true,
          });
  
          // Pre-fill user data if available
          if (response.data.user) {
            onFormChange({
              tabIndex: 1,
              fieldName: "fullName",
              value: response.data.user.name || "",
            });
            onFormChange({
              tabIndex: 1,
              fieldName: "email",
              value: response.data.user.email || "",
            });
          }
  
          // Move to Account Information step
          setCurrentTab(1);
  
          console.log("✅ Login successful! Moving to Account Information step");
        }
        
        }
        else if (response.data === "Password is incorrect") {
          alert("Password is incorrect")
        }


        // Update login status in the store
        
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  }
  const handleGoogleLogin = async () => {
    try {
      const url = 'http://localhost:8000/api/auth/google'

      window.location.href = url
      const response: any = await axiosInstance.get('auth/google');
      const urlParams = new URLSearchParams(window.location.search);
      const token: string | null = urlParams.get('token');
      const userId: string | null = urlParams.get('userId');

      console.log(userId + ">>>>>>>>>>>>>>>>>>>>>>>>>USERID<<<<<<<<<<<<<<<<<<<<<<")
      console.log(token + ">>>>>>>>>>>>>>>>>>>>>>>>>TOKEN<<<<<<<<<<<<<<<<<<<<<<")

      if (token && userId) {
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('currentUserId', userId);

        // Update login status in the store
        onFormChange({
          tabIndex: 0,
          fieldName: "loginStatus",
          value: true,
        });

        // Move to Account Information step
        setCurrentTab(1);

        console.log("✅ Google login successful! Moving to Account Information step");
      } else {
        alert("Google login failed. Please try again.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed. Please try again.");
    }
  }
  //
  const {
    formState,
    isSubmitted,
    currentTab,
    errors,
    setFormState,
    onFormChange,
    setIsSubmitted,
    setCurrentTab,
    resetForm,
    clearErrors,
  } = useSellerRegistrationStore();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [shouldCheckAuth, setShouldCheckAuth] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const s3Storage = new S3Storage("seller-documents");
  const [documentPreviews, setDocumentPreviews] = useState<string[]>([]);

  const validateToken = async (Token: any) => {
    try {
      const response = await axiosInstance.post("/me", { Token });

      return response.data; // Adjust based on your API's response structure
    } catch (error) {
      console.error("Token validation failed:", error);
      return null;
    }
  };
  
  const [showSellerWaiting, setShowSellerWaiting] = useState(false)
  const handleSubmit = async (formData: any) => {
    try {
      const localToken = localStorage.getItem("userData-storage")
      const getUserData = JSON.parse(localToken || '{}')
      const token = getUserData.state.userData.token
      // const token = localStorage.getItem("jwtToken");
      if (!token) {
        setLoading(false);
        toast.error("Please authenticate before submitting");
        return;
      }

      const User = await validateToken(token);
      if (!User) {
        toast.error("Invalid token. Please log in again.");
        return;
      }

      if (user?.sellerId) {
        await AXIOS.put(`/seller/updateSeller/${user.sellerId}`, {
          ...formData,
          userId: user?.id,
          address: formData.address,
          pincode: formData.pincode,
          latitude: formData.latitude,
          longitude: formData.longitude,
          documents: formData.documents as string[],
          gstn: formData.gstn,
          fcrn: formData.fcrn,
        });
        toast.success("Seller Profile Updated Successfully");
      } else {
        const userData = localStorage.getItem("userData-storage")
        const getUserData = JSON.parse(userData || '{}')
        const userId = getUserData.state.userData.userId
        await axiosInstance.post("/seller/newSellerRegistration", {
          ...formData,
          userId: userId,
          address: formData.address,
          pincode: formData.pincode,
          latitude: formData.latitude,
          longitude: formData.longitude,
          documents: formData.documents as string[],
          gstn: formData.gstn,
          fcrn: formData.fcrn,
        });
        toast.success("Seller Registration Completed Successfully");
        setShowSellerWaiting(true)
      }
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during registration");
    }
    setIsSubmitted(true);
  };

  const handleUpdateApplication = () => {
    resetForm();
    setCurrentTab(1);
    setIsSubmitted(false);
    setShowForm(true);

    if (user) {
      onFormChange({
        tabIndex: 0,
        fieldName: "loginStatus",
        value: true,
      });
      onFormChange({
        tabIndex: 1,
        fieldName: "fullName",
        value: user.name || "",
      });
      onFormChange({
        tabIndex: 1,
        fieldName: "email",
        value: user.email || "",
      });
    }
  };

  const handleSuccessfulLogin = () => {
    setShouldCheckAuth((prev) => !prev);
  };

  useEffect(() => {
   
    const checkAuthentication = async () => {
      try {
        const localToken = localStorage.getItem("userData-storage");
        const getUserData = JSON.parse(localToken || '{}');
        const token = getUserData.state?.userData?.token;
        const userId = getUserData.state?.userData?.userId;

        console.log("Checking authentication - token:", token);
        console.log("Checking authentication - userId:", userId);

        if (token && userId) {
          const data = await validateToken(token);
          console.log("Token validation data:", data);
          checkSellerWaiting(userId)
          const response: any = await axiosInstance.get(`auth/fetchUser/${userId}`);
          console.log("User fetch response:", response);

          setLoading(false);

          if (response.data) {
            // Set user data
            setUser({
              id: response.data.id,
              name: response.data.name,
              email: response.data.email,
              isSeller: response.data.isSeller || false,
              isSellerApproved: response.data.isSellerApproved || false,
              sellerStatus: response.data.sellerStatus,
              sellerId: response.data.sellerId
            });

            // Update form state
            onFormChange({
              tabIndex: 0,
              fieldName: "loginStatus",
              value: true,
            });
            onFormChange({
              tabIndex: 1,
              fieldName: "fullName",
              value: response.data.name || "",
            });
            onFormChange({
              tabIndex: 1,
              fieldName: "email",
              value: response.data.email || "",
            });

            // Move to Account Information step if currently on Login step
            if (currentTab === 0) {
              setCurrentTab(1);
            }

            console.log("✅ User authenticated! Moving to Account Information step");
          } else {
            resetForm();
          }
        } else {
          // No token found, ensure we're on the login step
          resetForm();
          setCurrentTab(0);
          setLoading(false);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        resetForm();
        setCurrentTab(0);
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [shouldCheckAuth]);
  const checkSellerWaiting=async(userId:string)=>{
    const response: any = await axiosInstance.post('/seller/newSellerRegistration',{
      userId:userId
    });
    if(response.data.seller==="Seller is already registered"){
      toast.success("Seller is already registered")
      setShowSellerWaiting(true)
    }
  }

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const uploadedUrls: string[] = [];
      const newPreviews: string[] = [];
      for (let i = 0; i < files.length; i++) {
        try {
          const fileBuffer = await files[i].arrayBuffer();
          const fileName = `${Date.now()}-${files[i].name.replace(
            /[^a-zA-Z0-9.-]/g,
            ""
          )}`;

          const imageUrl = await s3Storage.uploadFile({
            file: Buffer.from(fileBuffer),
            fileName,
            contentType: files[i].type,
          });

          uploadedUrls.push(imageUrl);
          // Create preview URL for images
          if (files[i].type.startsWith('image/')) {
            newPreviews.push(URL.createObjectURL(files[i]));
          } else {
            newPreviews.push('/assets/images/pdf-icon.png'); // Default preview for PDFs
          }
        } catch (error) {
          console.error('Error uploading file:', error);
          toast.error('Error uploading file');
        }
      }
      setDocumentPreviews(prev => [...prev, ...newPreviews]);
      const currentDocs = (formState[1].fields.documents as unknown as string[]) || [];
      onFormChange({
        tabIndex: 1,
        fieldName: "documents",
        value: [...currentDocs, ...uploadedUrls] as unknown as string,
      });
    }
  };

  const handleRemoveDocument = (idx: number) => {
    setDocumentPreviews(prev => prev.filter((_, i) => i !== idx));
    // Remove the URL from the form state
    const currentDocs = (formState[1].fields.documents as unknown as string[]) || [];
    const updatedDocs = currentDocs.filter((_, i) => i !== idx);
    onFormChange({
      tabIndex: 1,
      fieldName: "documents",
      value: updatedDocs as unknown as string,
    });
    // Revoke the object URL if it's a blob
    if (documentPreviews[idx].startsWith('blob:')) {
      URL.revokeObjectURL(documentPreviews[idx]);
    }
  };

  if (loading) {
    return <div className="w-full max-w-7xl mx-auto p-4">Loading...</div>;
  }
  if (showSellerWaiting) {
    return <div className="w-full max-w-7xl mx-auto p-4">
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <div className="border-2 border-gray-300 p-4 rounded-md w-[50%] h-[50%] flex flex-col items-center justify-center">
{/* 
          <h1 className="text-2xl font-bold text-center">Hello {user?.name}</h1> */}
          <p className="text-2xl text-gray-800 font-semibold  text-center">Your application is under review.</p>
          <p className="text-md text-gray-600 text-center">It will take 2-3 days to get approved.</p>

          <div className="flex items-center justify-center">
            <TbRotateClockwise2 className="w-10 h-10 animate-spin text-yellow-500" />
            <p className="text-sm text-gray-500 text-center">Please wait while we review your application.</p>
          </div>
        </div>
      </div>
    </div>
    // return <div className="w-full max-w-7xl mx-auto p-4">Seller Waiting for Approval</div>;
  }
  return (
    <div className="w-full  max-w-7xl mx-2 overflow-hidden rounded-xl bg-white shadow-[0px_2px_8.9px_0px_rgba(0,0,0,0.25)] mb-[3rem]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative">
          {user?.isSeller && !showForm ? (
            <SellerStatus
              isSeller={user?.isSeller ?? false}
              isSellerApproved={user?.isSellerApproved ?? false}
              sellerStatus={user?.sellerStatus}
              onUpdateApplication={handleUpdateApplication}
            />
          ) : (
            <StepperForm
              formState={formState}
              schema={formSchema}
              tabSchemas={tabSchemas}
              onSubmit={handleSubmit}
              className="relative"
              onFormStateChange={setFormState}
              currentTab={currentTab}
              onTabChange={setCurrentTab}
              errors={errors}
            >
              <div className="sticky top-0 z-10 bg-white">
                <div className="p-2 pb-0">
                  <Tabs className="mb-0">
                    <Tab clickDisabled={!!user} index={0}>
                      Login
                    </Tab>
                    <Tab index={1}>Account Information</Tab>
                    <Tab index={2}>Bank Details</Tab>
                    <Tab index={3}>Review & Submit</Tab>
                  </Tabs>
                </div>
              </div>

              <div className="p-[2rem]">
                <TabContent index={0}>
                  <div className=" p-8 w-full lg: flex flex-col ">
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
                      Don't have an account?<span className="ml-2 font-medium text-red-600 hover:text-red-500 cursor-pointer" onClick={() => {
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
                </TabContent>

                <TabContent index={1}>
                  {({ index }) => (
                    <Fragment>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mb-6"
                      >
                        <CustomInput
                          disabled={true}
                          tabIndex={index}
                          fieldName="fullName"
                          label="Full Name"
                          placeholder="Enter Full name"
                          type="text"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6"
                      >
                        <CustomInput
                          disabled={true}
                          tabIndex={index}
                          fieldName="email"
                          label="Email"
                          placeholder="Enter Mail id"
                          type="email"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="storeName"
                          label="Store Name"
                          placeholder="Enter Store Name"
                          type="text"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="storeDescription"
                          label="Store Description"
                          placeholder="Enter Store Description"
                          type="text"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.45 }}
                        className="mb-6"
                      >
                        <FormField tabIndex={index} fieldName="address">
                          {/* <AddressInput
                            tabIndex={index}
                            fieldName="address"
                            label="Store Address"
                            placeholder="Enter store address"
                            value={String(formState[index].fields.address || "")}
                            onChange={(address, _, lat, lng) => {
                              console.log('Address Details:', {
                                address,
                                latitude: lat,
                                longitude: lng
                              });
                              onFormChange({
                                tabIndex: index,
                                fieldName: "address",
                                value: address,
                              });
                              onFormChange({
                                tabIndex: index,
                                fieldName: "latitude",
                                value: lat,
                              });
                              onFormChange({
                                tabIndex: index,
                                fieldName: "longitude",
                                value: lng,
                              });
                            }}
                          /> */}
                          <CustomInput
                            tabIndex={index}
                            fieldName="address"
                            label="Store Address"
                            placeholder="Enter store address"
                            type="text"
                          />
                        </FormField>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.46 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="pincode"
                          label="Pincode"
                          placeholder="Enter pincode"
                          type="text"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.47 }}
                        className="mb-6"
                      >
                        <div className="space-y-2">
                          {/* <label className="block text-sm font-medium text-gray-700">
                            GSTN or FCRN
                          </label> */}
                          <div className="">
                            <CustomInput
                              tabIndex={index}
                              fieldName="gstn"
                              label="GSTN Number"
                              placeholder="Enter GSTN No"
                              type="text"
                            />
                            {/* <CustomInput
                              tabIndex={index}
                              fieldName="fcrn"
                              label="FCRN Number"
                              placeholder="Enter FCRN No"
                              type="text"
                            /> */}
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.48 }}
                        className="mb-6"
                      >
                        {/* <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Upload Documents
                          </label>
                          <p className="text-sm text-gray-500 mb-2">
                            Upload GST/FCRI certificates and store photos
                          </p>
                          <input
                            type="file"
                            multiple
                            accept="image/*,.pdf"
                            onChange={handleFileUpload}
                            className="block w-full text-sm text-gray-500
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-red-50 file:text-red-700
                              hover:file:bg-red-100"
                          />

                          {/* Document Previews */}
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {((formState[1].fields.documents as unknown as string[]) || []).map((url: string, index: number) => (
                            <div key={index} className="relative group">
                              <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200">
                                <Image
                                  src={url}
                                  alt={`Document preview ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleRemoveDocument(index)}
                                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* </div> */}
                      </motion.div>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-6"
                      >
                        <div className="flex justify-start align-baseline gap-2">
                          <CustomInput
                            tabIndex={index}
                            fieldName="agreeTerms"
                            type="checkbox"
                          />
                          <label
                            htmlFor="agreeTerms"
                            className="text-sm text-gray-700"
                          >
                            By clicking, I agree to make you buy{" "}
                            <Link
                              href="#"
                              className="text-red-600 hover:underline"
                            >
                              terms of use & privacy policy
                            </Link>
                          </label>
                        </div>
                      </motion.div>
                    </Fragment>
                  )}
                </TabContent>

                <TabContent index={2}>
                  {({ index }) => (
                    <Fragment>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="accountHolderName"
                          label="Account Holder Name"
                          placeholder="Enter Account Holder Name"
                          type="text"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="accountNumber"
                          label="Account Number"
                          placeholder="Enter Account Number"
                          type="text"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="bankName"
                          label="Bank Name"
                          placeholder="Enter Bank Name"
                          type="text"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="ifscCode"
                          label="IFSC Code"
                          placeholder="Enter IFSC Code"
                          type="text"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="branchName"
                          label="Branch Name"
                          placeholder="Enter Branch Name"
                          type="text"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="accountType"
                          label="Account Type"
                          placeholder="Enter Account Type (Savings/Current)"
                          type="text"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mb-6"
                      >
                        <CustomInput
                          tabIndex={index}
                          fieldName="upiId"
                          label="UPI ID"
                          placeholder="Enter UPI ID"
                          type="text"
                        />
                      </motion.div>
                    </Fragment>
                  )}
                </TabContent>

                <TabContent index={3}>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">
                        Account Information
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Full Name
                          </span>
                          <span className="font-medium">
                            {formState[1].fields.fullName || "Not provided"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">Email</span>
                          <span className="font-medium">
                            {formState[1].fields.email || "Not provided"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">Pincode</span>
                          <span className="font-medium">
                            {formState[1].fields.pincode || "Not provided"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">GSTN/FCRN</span>
                          <span className="font-medium">
                            {formState[1].fields.gstn || formState[1].fields.fcrn || "Not provided"}
                          </span>
                        </div>
                        {/* <div className="flex flex-col">
                          <span className="text-sm text-gray-500">Uploaded Documents</span>
                          <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {((formState[1].fields.documents as unknown as string[]) || []).map((url: string, index: number) => (
                              <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                                <Image
                                  src={url}
                                  alt={`Document ${index + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div> */}
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">Store Name</span>
                          <span className="font-medium">
                            {formState[1].fields.storeName || "Not provided"}
                          </span>
                        </div>
                      </div>

                      {formState[1].fields.storeDescription && (
                        <div className="mt-3">
                          <span className="text-sm text-gray-500">
                            Store Description
                          </span>
                          <p className="text-sm">
                            {formState[1].fields.storeDescription}
                          </p>
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Address</span>
                        <span className="font-medium">
                          {formState[1].fields.address || "Not provided"}
                        </span>
                      </div>
                      {/* <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Location Coordinates</span>
                        <span className="font-medium">
                          {formState[1].fields.latitude && formState[1].fields.longitude 
                            ? `Lat: ${formState[1].fields.latitude}, Long: ${formState[1].fields.longitude}`
                            : "Not provided"}
                        </span>
                      </div> */}
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                    >
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">
                        Bank Details
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Account Holder
                          </span>
                          <span className="font-medium">
                            {formState[2].fields.accountHolderName ||
                              "Not provided"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Account Number
                          </span>
                          <span className="font-medium">
                            {formState[2].fields.accountNumber ||
                              "Not provided"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Bank Name
                          </span>
                          <span className="font-medium">
                            {formState[2].fields.bankName || "Not provided"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            IFSC Code
                          </span>
                          <span className="font-medium">
                            {formState[2].fields.ifscCode || "Not provided"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Branch Name
                          </span>
                          <span className="font-medium">
                            {formState[2].fields.branchName || "Not provided"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">
                            Account Type
                          </span>
                          <span className="font-medium">
                            {formState[2].fields.accountType || "Not provided"}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-500">UPI ID</span>
                          <span className="font-medium">
                            {formState[2].fields.upiId || "Not provided"}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                    <div className="flex w-full ">
                      <Button type="submit" className="w-full">
                        Register
                      </Button>
                    </div>
                  </div>
                </TabContent>
              </div>

              {currentTab !== 0 && (
                <div className="sticky bottom-0 z-10 border-t py-[1rem]">
                  <Actions
                    showIcons={true}
                    nextLabel="Next"
                    submitLabel="Register"
                    className="rounded-lg px-6 py-0 transition-colors"
                  />
                </div>
              )}
            </StepperForm>
          )}
        </div>

        <div className="hidden bg-gray-100 lg:block lg:w-1/2 rounded-2xl">
          <div className="relative h-full w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-full w-full flex items-center justify-center"
            >
              <Image
                src="/assets/images/become-a-seller/sellerRegstration.png"
                alt="Seller dashboard illustration"
                width={600}
                height={600}
                className="h-auto w-[70%] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
