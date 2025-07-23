"use client"

import Header from "@/app/components/layout/Header"
import Footer from "@/app/components/layout/Footer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import userProfileLogo from '../../../../../public/assets/kamathenu Images/BAS/Seller/seller_img1.jpg'
import { useEffect, useState } from "react"
import {
    Headphones,
    Home,
    LogOut,
    User,
} from "lucide-react";
import CustomerSupport from "./CustomerSupport"
import { Button } from "@/components/ui/button"
import axiosInstance from "@/app/utils/axiosInstance"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
// import AuthChecker from "@/app/components/layout/Authentication"
import userDataStore from "../../StateManagement/userData"


const userProfile = () => {
    const router=useRouter()
    const{userData,clearUserData}=userDataStore()
    const [activeTab, setActiveTab] = useState("orders");
    const [userDatas, setUserDatas] = useState<any>()
    const [userProfile, setUserProfile] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",


    })
    var getUserData=localStorage.getItem('userData-storage')
    getUserData=JSON.parse(getUserData || '{}')
    console.log(getUserData)
    const[getLocalData,setLocalData]=useState({
       userId:getUserData?.state?.userData?.userId,
       userName:getUserData?.state?.userData?.userName,
       userEmail:getUserData?.state?.userData?.userEmail,
       userRole:getUserData?.state?.userData?.userRole,
       token:getUserData?.state?.userData?.token,

    })
    console.log(getLocalData)
    useEffect(()=>{
        if(typeof window !== 'undefined'){
            
            if(getLocalData.token==null){
                router.push('/auth/signin')
            }
            else{
                getUserProfile()
            }
        }
    },[router])

    const getUserProfile=async()=>{
        if(typeof window !== 'undefined'){
            const userId=getLocalData.userId
            if(userId){
                const response:any= await axiosInstance.get(`auth/fetchUser/${userId}`)
                setUserDatas(response.data)
                setUserProfile({
                    firstName:response.data.firstName,
                    lastName:response.data.lastName,
                    email:response.data.email,
                    phone:response.data.number,
                })
            }
        }
    }
    const setData=(e:any)=>{
        setUserProfile({...userProfile,[e.target.id]:e.target.value})
    }
    
    const handleUpdateProfile=async()=>{
        if(typeof window !== 'undefined'){
            const userId=getLocalData.userId
            if(userId){
                const response:any= await axiosInstance.put(`auth/updateUser/${userId}`,userProfile)
                if(response.status===200){
                    toast.success("Profile updated successfully")
                }
            }
        }
    }
    const handleLogout=async()=>{
        if(typeof window !== 'undefined'){
            // localStorage.removeItem('jwtToken')
            // localStorage.removeItem('currentUserId')
            // localStorage.removeItem('currentUser')
            clearUserData()
            window.location.reload()
        }
      }
    
    return (
        <div>
            <Header headerColor={["#D8A526", "white"]} />

            <div className="mt-32">
                <div className="w-[50%] ml-[25%]">

                    <div className="flex items-center gap-2 border-2 py-5 px-4 rounded-t-lg">
                        <div className="flex items-center ">
                            <img src={userDatas?.image} alt="userProfile" className="w-16 h-16 rounded-full object-center" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h1>{userDatas?.name}</h1>
                            <h1>{userDatas?.email}</h1>
                        </div>
                    </div>
                    <div className="border-2 rounded-b-lg flex">

                        <div className=" border-r-2">
                            <nav>
                                {[
                                    { tab: "orders", icon: Home, label: "Orders" },
                                    { tab: "support", icon: Headphones, label: "Customer Support" },
                                    { tab: "profile", icon: User, label: "Profile" },
                                ].map(({ tab, icon: Icon, label }) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`flex items-center gap-3 p-4 w-full text-left ${activeTab === tab
                                            ? "bg-gray-100 border-l-4 border-blue-500"
                                            : "hover:bg-gray-50"
                                            } transition-colors`}
                                    >
                                        <Icon className="h-5 w-5 text-gray-700" />
                                        <span className="font-medium text-gray-800">{label}</span>
                                    </button>
                                ))}

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-3 p-4 hover:bg-gray-50 border-t w-full transition-colors"
                                >
                                    <LogOut className="text-red-500 h-5 w-5" />
                                    <span className="font-medium text-red-500">Logout</span>
                                </button>
                            </nav>
                        </div>
                        <div className="w-full">
                            {activeTab === "orders" && (
                                <div className="w-full">
                                    <h1>Orders</h1>
                                </div>
                            )}
                            {activeTab === "support" && <CustomerSupport />}
                            {activeTab === "profile" && (
                                <div className="w-full">
                                    <div className='w-full   py-5 px-4 border-b-1 border-gray-200'>
                                        <h1 className="mb-4">Profile</h1>
                                        {/* userProfile Start */}
                                        <div className="flex items-center justify-between w-full">

                                            <div className="flex items-center gap-2 rounded-t-lg">
                                                <div className="flex items-center ">
                                                    <img src={userProfileLogo.src} alt="userProfile" className="w-16 h-16 rounded-full object-center" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <h1>{userDatas?.name}</h1>
                                                    <h1>{userDatas?.email}</h1>
                                                </div>
                                            </div>
                                            <div>
                                                <Button>Edit Profile</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full py-5 px-4 flex flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="grid w-full max-w-sm items-center gap-3">
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input type="text" id="firstName" value={userProfile.firstName} placeholder="Frist Name" onChange={(e)=>setData(e)}/>
                                            </div>
                                            <div className="grid w-full max-w-sm items-center gap-3">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input type="text" id="lastName" value={userProfile.lastName} placeholder="Last Name" onChange={(e)=>setData(e)} />
                                            </div>


                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="grid w-full max-w-sm items-center gap-3">
                                                <Label htmlFor="email">Email</Label>
                                                <Input type="text" id="email" value={userProfile.email} placeholder="Email Address" readOnly={true}  />
                                            </div>
                                            <div className="grid w-full max-w-sm items-center gap-3">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input type="text" id="phone" value={userProfile.phone} placeholder="Phone Number" onChange={(e)=>setData(e)} />
                                            </div>


                                        </div>
                                        <Button onClick={handleUpdateProfile}>Submit</Button>
                                    </div>


                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default userProfile