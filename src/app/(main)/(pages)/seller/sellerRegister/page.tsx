// "use client";

// import type React from "react";
// import { email, z } from "zod";
// import { Fragment, useEffect, useState, type ChangeEvent } from "react";
// import { motion } from "framer-motion";
// import { Check, ArrowRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   StepperForm,
//   Tabs,
//   Tab,
//   TabContent,
//   FormField,
//   Actions,
//   type StepperFormState,
//   useStepperForm,
// } from "@/components/ui/stepper-form";
// import { CustomInput } from "@/components/ui/stepper-form/form-input";
// import { useSellerRegistrationStore } from "../sections/sellerRegistrationStore";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import Header from "@/app/components/layout/Header";
// import Footer from "@/app/components/layout/Footer";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox";

// const accountInfoSchema = z.object({
//   fullName: z.string().min(2, "Full name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email address"),
//   gstNumber: z.string().min(15, "GST number must be 15 characters"),
//   storeName: z.string().min(2, "Store name must be at least 2 characters"),
//   storeDescription: z.string().optional(),
//   address: z.string().min(1, "Address is required"),
//   city: z.string().min(1, "City is required"),
//   state: z.string().min(1, "State is required"),
//   pincode: z.string().min(6, "Pincode must be 6 digits"),
//   country: z.string().default("India"),
//   mobileNumber: z.string().min(10, "Mobile number must be 10 digits"),
//   alternateMobileNumber: z.string().min(10, "Alternate mobile must be 10 digits").optional(),
//   agreeTerms: z.boolean().refine((val) => val === true, {
//     message: "You must agree to the terms and conditions",
//   }),
// });

// const bankDetailsSchema = z.object({
//   accountHolderName: z
//     .string()
//     .min(2, "Account holder name must be at least 2 characters"),
//   accountNumber: z
//     .string()
//     .min(9, "Account number must be at least 9 characters"),
//   bankName: z.string().min(2, "Bank name must be at least 2 characters"),
//   ifscCode: z.string().min(11, "IFSC code must be 11 characters"),
//   branchName: z.string().optional(),
//   accountType: z.string().optional(),
//   upiId: z.string().optional(),
// });

// const formSchema = z.object({
//   ...accountInfoSchema.shape,
//   ...bankDetailsSchema.shape,
// });

// const tabSchemas = [accountInfoSchema, bankDetailsSchema];

// export default function SellerRegistration() {
//   // const {
//   //   formState,
//   //   isSubmitted,
//   //   currentTab,
//   //   setFormState,
//   //   onFormChange,
//   //   setIsSubmitted,
//   //   setCurrentTab,
//   //   resetForm,
//   // } = useSellerRegistrationStore
//   //     ();

//   const [accountInfo, setAccountInfo] = useState({
//     fullName: "",
//     email: "",
//     gstn: "",
//     storeName: "",
//     storeDescription: "",
//     agreeTerms: false,
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     mobileNumber: "",
//     termsAndConditions: false,
//   })
//   const [bankDetails, setBankDetails] = useState({
//     accountHolderName: "",
//     accountNumber: "",
//     bankName: "",
//     ifscCode: "",
//     branchName: "",
//     accountType: "",
//     upiId: "",
//   })
//   const setDataAccountInfo=(e:any)=>{
//     setAccountInfo({...accountInfo, [e.target.name]: e.target.value})
//   }
//   const setDataBankDetails=(e:any)=>{
//     setBankDetails({...bankDetails, [e.target.name]: e.target.value})
//   }
//   // const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

//   const handleSubmit = async (formData: any) => {
//     try {
      
//     } catch (error) {
//       console.log(error);
//       toast.error("Registration failed");
//     }
    
//   };

//   // const validateCurrentTab = () => {
//   //   try {
//   //     const currentTabFields = formState[currentTab].fields;
//   //     const validationSchema = tabSchemas[currentTab];
//   //     validationSchema.parse(currentTabFields);
//   //     setFieldErrors({});
//   //     return true;
//   //   } catch (error) {
//   //     if (error instanceof z.ZodError) {
//   //       const errors: Record<string, string> = {};
//   //       error.errors.forEach((err) => {
//   //         const fieldName = err.path[0] as string;
//   //         errors[fieldName] = err.message;
//   //       });
//   //       setFieldErrors(errors);

//   //       // Show first error in toast
//   //       const firstError = Object.values(errors)[0];
//   //       if (firstError) {
//   //         toast.error(firstError);
//   //       }
//   //     }
//   //     return false;
//   //   }
//   // };

//   // const handleNext = () => {
    
//   //     // setCurrentTab(currentTab + 1);
    
//   // };

//   // const handleBack = () => {
//   //   setFieldErrors({});
//   //   setCurrentTab(currentTab - 1);
//   // };

//   return (

//     <div className="bg-white" >
//       <Header headerColor={["white", "black"]} />
//       <div className="flex flex-col items-center justify-center">
//         <div className="w-full max-w-7xl mx-2 overflow-hidden  rounded-xl bg-white shadow-[0px_2px_8.9px_0px_rgba(0,0,0,0.25)]  mt-[8rem]">
//           <div className="flex flex-col lg:flex-row">
//             <div className="w-full lg:w-1/2 relative">
              
//             <div className="sticky top-0 z-10 bg-white">
//                   {/* <div className="p-2 pb-0">
//                     <Tabs className="mb-0">
//                       <Tab index={0}>Account Information</Tab>
//                       <Tab index={1}>Bank Details</Tab>
//                       <Tab index={2}>Review & Submit</Tab>
//                     </Tabs>
//                   </div> */}
                  
//                 </div>

//                 {/* <div className="max-h-[calc(100vh-20rem)] min-h-[calc(100vh-30rem)] overflow-y-auto p-[2rem]">
//                   <TabContent index={0}>
//                     {({ index }) => (
//                       <div className="flex flex-col gap-6 w-full">
//                         <div className="flex flex-col gap-2">
//                           <Label htmlFor="FullName" className="text-gray-800 text-[16px]">Full Name</Label>
//                           <Input type="text" id="fullName" name="fullName" placeholder="FullName" className="w-full px-3 py-7 text-[32px]" value={accountInfo.fullName}  />
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <Label htmlFor="email" className="text-gray-800 text-[16px]">Email</Label>
//                           <Input type="email" id="email" name="email" placeholder="Email" className="w-full px-3 py-7 text-[32px]" value={accountInfo.email}  />
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <Label htmlFor="storeName" className="text-gray-800 text-[16px]">Store Name</Label>
//                           <Input type="text" id="storeName" name="storeName" placeholder="storeName" className="w-full px-3 py-7 text-[32px]" value={accountInfo.storeName} onChange={(e)=>setDataAccountInfo(e)}  />
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <Label htmlFor="storeDescription" className="text-gray-800 text-[16px]">Store Description</Label>
//                           <Input type="text" id="storeDescription" name="storeDescription" placeholder="storeDescription" className="w-full px-3 py-7 text-[32px]" value={accountInfo.storeDescription} onChange={(e)=>setDataAccountInfo(e)}  />
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <Label htmlFor="GSTNumber" className="text-gray-800 text-[16px]">GST Number</Label>
//                           <Input type="text" id="GSTNumber" name="gstn" placeholder="GST Number" className="w-full px-3 py-7 text-[32px]" value={accountInfo.gstn} onChange={(e)=>setDataAccountInfo(e)}  />
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <Label htmlFor="address" className="text-gray-800 text-[16px]">Full Address</Label>
//                           <Input type="text" id="address" name="address" placeholder="address" className="w-full px-3 py-7 text-[32px]" value={accountInfo.address} onChange={(e)=>setDataAccountInfo(e)}  />
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <div className="flex flex-col gap-2">
//                             <Label htmlFor="city" className="text-gray-800 text-[16px]">City</Label>
//                             <Input type="text" id="city" name="city" placeholder="city" className="w-full px-3 py-7 text-[32px]" value={accountInfo.city} onChange={(e)=>setDataAccountInfo(e)}  />
//                           </div>

//                           <div className="flex flex-col gap-2">
//                             <Label htmlFor="state" className="text-gray-800 text-[16px]">State</Label>
//                             <Input type="text" id="state" name="state" placeholder="state" className="w-full px-3 py-7 text-[32px]" value={accountInfo.state} onChange={(e)=>setDataAccountInfo(e)}  />
//                           </div>
//                           <Label htmlFor="pincode" className="text-gray-800 text-[16px]">Pincode</Label>
//                           <Input type="text" id="pincode" name="pincode" placeholder="pincode" className="w-full px-3 py-7 text-[32px]" value={accountInfo.pincode} onChange={(e)=>setDataAccountInfo(e)}  />
//                         </div>
//                         <div className="flex flex-col gap-2">
//                           <Label htmlFor="mobileNumber" className="text-gray-800 text-[16px]">Mobile Number</Label>
//                           <Input type="text" id="mobileNumber" name="mobileNumber" placeholder="Mobile Number" className="w-full px-3 py-7 text-[32px]" value={accountInfo.mobileNumber} onChange={(e)=>setDataAccountInfo(e)}  />
//                         </div>
//                         <div className="flex gap-2 items-center">
//                           <Checkbox id="agreeTerms" name="termsAndConditions" checked={accountInfo.termsAndConditions} onChange={(e)=>setDataAccountInfo(e)}  />
//                           <Label htmlFor="agreeTerms" className="text-gray-800 text-[16px]">By clicking, I agree to make you buy <span className="text-blue-500 hover:underline">terms of use & privacy policy</span></Label>
//                         </div>
//                         <div>
//                           <Button onClick={handleNext}>Next</Button>
//                         </div>

//                       </div>
//                     )}

//                   </TabContent>

//                   <TabContent index={2}>
//                     {({ index }) => (
//                       <div className="flex flex-col gap-6 w-full">
//                       <div className="flex flex-col gap-2">
//                         <Label htmlFor="accountHolderName" className="text-gray-800 text-[16px]">Account Holder Name</Label>
//                         <Input type="text" id="accountHolderName" name="accountHolderName" placeholder="Account Holder Name" className="w-full px-3 py-7 text-[32px]" value={bankDetails.accountHolderName} onChange={(e)=>setDataBankDetails(e)}  />
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <Label htmlFor="accountNumber" className="text-gray-800 text-[16px]">Account Number</Label>
//                         <Input type="text" id="accountNumber" name="accountNumber" placeholder="Account Number" className="w-full px-3 py-7 text-[32px]" value={bankDetails.accountNumber} onChange={(e)=>setDataBankDetails(e)}  />
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <Label htmlFor="bankName" className="text-gray-800 text-[16px]">Bank Name</Label>
//                         <Input type="text" id="bankName" name="bankName" placeholder="Bank Name" className="w-full px-3 py-7 text-[32px]" value={bankDetails.bankName} onChange={(e)=>setDataBankDetails(e)}  />
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <Label htmlFor="ifscCode" className="text-gray-800 text-[16px]">IFSC Code</Label>
//                         <Input type="text" id="ifscCode" name="ifscCode" placeholder="IFSC Code" className="w-full px-3 py-7 text-[32px]" value={bankDetails.ifscCode} onChange={(e)=>setDataBankDetails(e)}  />
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <Label htmlFor="branchName" className="text-gray-800 text-[16px]">Branch Name</Label>
//                         <Input type="text" id="branchName" name="branchName" placeholder="Branch Name" className="w-full px-3 py-7 text-[32px]" value={bankDetails.branchName} onChange={(e)=>setDataBankDetails(e)}  />
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <Label htmlFor="accountType" className="text-gray-800 text-[16px]">Account Type</Label>
//                         <Input type="text" id="accountType" name="accountType" placeholder="Account Type" className="w-full px-3 py-7 text-[32px]" value={bankDetails.accountType} onChange={(e)=>setDataBankDetails(e)} />
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <div className="flex flex-col gap-2">
//                           <Label htmlFor="upiId" className="text-gray-800 text-[16px]">UPI ID</Label>
//                           <Input type="text" id="upiId" name="upiId" placeholder="UPI ID" className="w-full px-3 py-7 text-[32px]" value={bankDetails.upiId} onChange={(e)=>setDataBankDetails(e)}  />
//                         </div>
//                       </div>
//                       <div>
//                         <Button onClick={handleNext}>Next</Button>
//                       </div>

//                     </div>
//                     )}
//                   </TabContent>



//                   <TabContent index={3}>
//                     <div className="space-y-6">
//                       <motion.div
//                         initial={{ y: 20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.1 }}
//                         className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
//                       >
//                         <h3 className="text-lg font-semibold mb-3 text-gray-800">
//                           Account Information
//                         </h3>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">
//                               Full Name
//                             </span>
//                             <span className="font-medium">
//                               {accountInfo?.fullName || "Not provided"}
//                             </span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">Email</span>
//                             <span className="font-medium">
//                               {accountInfo?.email || "Not provided"}
//                             </span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">GSTN</span>
//                             <span className="font-medium">
//                               {accountInfo?.gstn || "Not provided"}
//                             </span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">
//                               Store Name
//                             </span>
//                             <span className="font-medium">
//                               {accountInfo?.storeName || "Not provided"}
//                             </span>
//                           </div>
//                         </div>
//                         {accountInfo?.storeDescription && (
//                           <div className="mt-3">
//                             <span className="text-sm text-gray-500">
//                               Store Description
//                             </span>
//                             <p className="text-sm">
//                               {accountInfo?.storeDescription}
//                             </p>
//                           </div>
//                         )}
//                       </motion.div>

//                       <motion.div
//                         initial={{ y: 20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
//                       >
//                         <h3 className="text-lg font-semibold mb-3 text-gray-800">
//                           Bank Details
//                         </h3>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">
//                               Account Holder
//                             </span>
//                             <span className="font-medium">
//                               {bankDetails?.accountHolderName ||
//                                 "Not provided"}
//                             </span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">
//                               Account Number
//                             </span>
//                             <span className="font-medium">
//                               {bankDetails?.accountNumber ||
//                                 "Not provided"}
//                             </span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">
//                               Bank Name
//                             </span>
//                             <span className="font-medium">
//                               {bankDetails?.bankName || "Not provided"}
//                             </span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">
//                               IFSC Code
//                             </span>
//                             <span className="font-medium">
//                               {bankDetails?.ifscCode || "Not provided"}
//                             </span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">
//                               Branch Name
//                             </span>
//                             <span className="font-medium">
//                               {bankDetails?.branchName || "Not provided"}
//                             </span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">
//                               Account Type
//                             </span>
//                             <span className="font-medium">
//                               {bankDetails?.accountType || "Not provided"}
//                             </span>
//                           </div>
//                           <div className="flex flex-col">
//                             <span className="text-sm text-gray-500">UPI ID</span>
//                             <span className="font-medium">
//                               {bankDetails?.upiId || "Not provided"}
//                             </span>
//                           </div>
//                         </div>
//                       </motion.div>

//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="flex flex-col">
//                           <span className="text-sm text-gray-500">Address</span>
//                           <span className="font-medium">
//                             {accountInfo?.address || "Not provided"}
//                           </span>
//                         </div>
//                         <div className="flex flex-col">
//                           <span className="text-sm text-gray-500">City</span>
//                           <span className="font-medium">
//                             {accountInfo?.city || "Not provided"}
//                           </span>
//                         </div>
//                         <div className="flex flex-col">
//                           <span className="text-sm text-gray-500">State</span>
//                           <span className="font-medium">
//                             {accountInfo?.state || "Not provided"}
//                           </span>
//                         </div>
//                         <div className="flex flex-col">
//                           <span className="text-sm text-gray-500">Pincode</span>
//                           <span className="font-medium">
//                             {accountInfo?.pincode || "Not provided"}
//                           </span>
//                         </div>
//                         <div className="flex flex-col">
//                           <span className="text-sm text-gray-500">Mobile Number</span>
//                           <span className="font-medium">
//                             {accountInfo?.mobileNumber || "Not provided"}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="flex w-full ">
//                         <Button type="submit" className="w-full">
//                           Register
//                         </Button>
//                       </div>
//                     </div>
//                   </TabContent>
//                 </div>

//                 {0 !== 0 && (
//                   <div className="sticky bottom-0 z-10 border-t py-[1rem]">
//                     <Actions
//                       showIcons={true}
//                       nextLabel="Next"
//                       submitLabel="Register"
//                       className="rounded-lg px-6 py-0 transition-colors"
//                     />
//                   </div>
//                   )} */}
//             </div>

//             <div className="hidden bg-gray-100 lg:block lg:w-1/2 rounded-2xl">
//               <div className="relative h-full w-full">
//                 <motion.div
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3, duration: 0.5 }}
//                   className="h-full w-full flex items-center justify-center"
//                 >
//                   <Image
//                     src="/assets/images/become-a-seller/sellerRegstration.png"
//                     alt="Seller dashboard illustration"
//                     width={600}
//                     height={600}
//                     className="h-auto w-[70%] object-cover"
//                   />
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       <Footer />
//     </div>
//   );
// }


// // import { AppWindowIcon, CodeIcon } from "lucide-react"

// // import { Button } from "@/components/ui/button"
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import {
// //   Tabs,
// //   TabsContent,
// //   TabsList,
// //   TabsTrigger,
// // } from "@/components/ui/tabs"

// // export function TabsDemo() {
// //   return (
//     // <div className="flex w-full max-w-sm flex-col gap-6">
//       {/* <Tabs defaultValue="account">
//         <TabsList>
//           <TabsTrigger value="account">Account</TabsTrigger>
//           <TabsTrigger value="password">Password</TabsTrigger>
//         </TabsList>
//         <TabsContent value="account">
         
//         </TabsContent>
//         <TabsContent value="password">
          
//         </TabsContent>
//       </Tabs> */}
//     // </div>
// //   )
// // }
