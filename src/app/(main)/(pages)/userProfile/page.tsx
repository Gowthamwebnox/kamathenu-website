"use client"

import Header from "@/app/components/layout/Header"
import Footer from "@/app/components/layout/Footer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import {
    Download,
    Headphones,
    Home,
    LogOut,
    User,
    Menu,
    X,
} from "lucide-react";
import CustomerSupport from "./CustomerSupport"
import { Button } from "@/components/ui/button"
import axiosInstance from "@/app/utils/axiosInstance"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { BsDownload } from "react-icons/bs";
// import AuthChecker from "@/app/components/layout/Authentication"
import userDataStore from "../../StateManagement/userData"
import { Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from "@/components/ui/table"


const userProfile = () => {
    const router = useRouter()
    const { userData, clearUserData } = userDataStore()
    const [activeTab, setActiveTab] = useState("orders");
    const [userDatas, setUserDatas] = useState<any>()
    const [orders, setOrders] = useState<any>()
    const [downloadOrder, setDownloadOrder] = useState<any>()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",


    })
    const [getLocalData, setLocalData] = useState({
        userId: '',
        userName: '',
        userEmail: '',
        userRole: '',
        token: '',
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const getUserData = localStorage.getItem('userData-storage')
            const parsedData = JSON.parse(getUserData || '{}')
            if (getUserData) {
                try {

                    setLocalData({
                        userId: parsedData?.state?.userData?.userId || '',
                        userName: parsedData?.state?.userData?.userName || '',
                        userEmail: parsedData?.state?.userData?.userEmail || '',
                        userRole: parsedData?.state?.userData?.userRole || '',
                        token: parsedData?.state?.userData?.token || '',
                    })
                    getUserProfile()
                    getDownloadOrder()
                    getOrders()
                } catch (error) {
                    console.error('Error parsing user data:', error)
                }
            }
            if (!parsedData?.state?.userData?.token) {
                router.push('/auth/signin')
            }
        }
    }, [])
    console.log(getLocalData)
    // useEffect(()=>{
    //     if(typeof window !== 'undefined'){


    //         else{
    //             getUserProfile()
    //         }
    //     }
    // },[router])
    const getDownloadOrder = async () => {
        if (typeof window !== 'undefined') {
            const localData = localStorage.getItem('userData-storage')
            const parsedData = JSON.parse(localData || '{}')
            const userId = parsedData.state.userData.userId
            const response: any = await axiosInstance.get(`auth/downloadOrder/${userId}`)
            if (response.status === 200) {
                setDownloadOrder(response.data)
            }
            else {
                setDownloadOrder([])
            }
        }
    }
    const getOrders=async()=>{
        if(typeof window !== 'undefined'){
            const localData=localStorage.getItem('userData-storage')
            const parsedData=JSON.parse(localData||'{}')
            const userId=parsedData.state.userData.userId
            const response:any=await axiosInstance.get(`auth/fetchUserOrder/${userId}`)
            if(response.status===200){
                setOrders(response.data)
            }
            else{
                setOrders([])
            }
        }
    }   
    const getUserProfile = async () => {
        if (typeof window !== 'undefined') {
            const localData = localStorage.getItem('userData-storage')
            const parsedData = JSON.parse(localData || '{}')
            if (parsedData.state.userData.userId) {
                const response: any = await axiosInstance.get(`auth/fetchUser/${parsedData.state.userData.userId}`)
                console.log("🔥🔥🔥🔥🔥🔥response🔥🔥🔥🔥🔥🔥", response)
                setUserDatas(response.data)
                setUserProfile({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email,
                    phone: response.data.number,
                })
            }
        }
    }
    const setData = (e: any) => {
        setUserProfile({ ...userProfile, [e.target.id]: e.target.value })
    }

    const handleUpdateProfile = async () => {
        if (typeof window !== 'undefined') {
            const userId = getLocalData.userId
            if (userId) {
                const response: any = await axiosInstance.put(`auth/updateUser/${userId}`, userProfile)
                if (response.status === 200) {
                    toast.success("Profile updated successfully")
                }
            }
        }
    }
    const handleLogout = async () => {
        if (typeof window !== 'undefined') {
            // localStorage.removeItem('jwtToken')
            // localStorage.removeItem('currentUserId')
            // localStorage.removeItem('currentUser')
            clearUserData()
            window.location.reload()
        }
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <Header headerColor={["#D8A526", "white"]} />

            <div className="mt-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden mb-4">
                        <button
                            onClick={toggleMobileMenu}
                            className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg w-full justify-between"
                        >
                            <span className="font-medium">Menu</span>
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Sidebar */}
                        <div className={`lg:w-80 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
                            <div className="bg-white border-2 rounded-lg overflow-hidden">
                                {/* User Info Header */}
                                <div className="flex items-center gap-3 p-4 border-b">
                                    <Avatar className="h-12 w-12 sm:h-14 sm:w-14">
                                        {userDatas?.data?.profile && <AvatarImage src={userDatas?.data?.profile} />}
                                        <AvatarFallback className="text-sm sm:text-base">
                                            {userProfile.firstName[0] + "" + userProfile.firstName[1]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col gap-1 min-w-0 flex-1">
                                        <h1 className="font-medium text-sm sm:text-base truncate">{getLocalData?.userName}</h1>
                                        <h1 className="text-gray-600 text-xs sm:text-sm truncate">{getLocalData?.userEmail}</h1>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <nav className="p-2">
                                    {[
                                        { tab: "orders", icon: Home, label: "Orders" },
                                        { tab: "support", icon: Headphones, label: "Customer Support" },
                                        { tab: "profile", icon: User, label: "Profile" },
                                        { tab: "DownloadOrder", icon: Download, label: "Download Order" },
                                    ].map(({ tab, icon: Icon, label }) => (
                                        <button
                                            key={tab}
                                            onClick={() => handleTabClick(tab)}
                                            className={`flex items-center gap-3 p-3 w-full text-left rounded-lg mb-1 transition-colors ${
                                                activeTab === tab
                                                    ? "bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700"
                                                    : "hover:bg-gray-50 text-gray-700"
                                            }`}
                                        >
                                            <Icon className="h-5 w-5 flex-shrink-0" />
                                            <span className="font-medium text-sm sm:text-base">{label}</span>
                                        </button>
                                    ))}

                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-3 p-3 w-full text-left rounded-lg hover:bg-red-50 transition-colors mt-2"
                                    >
                                        <LogOut className="text-red-500 h-5 w-5 flex-shrink-0" />
                                        <span className="font-medium text-red-500 text-sm sm:text-base">Logout</span>
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 bg-white border-2 rounded-lg min-h-[500px]">
                            {activeTab === "orders" && (
                                <div className="p-4 sm:p-6">
                                    <h1 className="text-xl sm:text-2xl font-semibold mb-4">Orders</h1>
                                    {orders?.length > 0 ? (
                                        <div className="space-y-4">
                                            {orders.map((order: any, orderIndex: number) => (
                                                <div key={order.id} className="border rounded-lg p-4 sm:p-6 bg-gray-50">
                                                    {/* Order Header */}
                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-4 border-b">
                                                        <div className="flex flex-col gap-1">
                                                            <h3 className="font-semibold text-lg">Order #{order.id.slice(-8)}</h3>
                                                            <p className="text-sm text-gray-600">
                                                                Placed on {new Date(order.createdAt).toLocaleDateString()}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col sm:items-end gap-2">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm font-medium">Total:</span>
                                                                <span className="font-semibold text-lg">₹{order.totalAmount}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                                    order.orderStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                                    order.orderStatus === 'completed' ? 'bg-green-100 text-green-800' :
                                                                    order.orderStatus === 'cancelled' ? 'bg-red-100 text-red-800' :
                                                                    'bg-gray-100 text-gray-800'
                                                                }`}>
                                                                    {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                                                                </span>
                                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                                    order.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                                    order.paymentStatus === 'completed' ? 'bg-green-100 text-green-800' :
                                                                    order.paymentStatus === 'failed' ? 'bg-red-100 text-red-800' :
                                                                    'bg-gray-100 text-gray-800'
                                                                }`}>
                                                                    Payment: {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Order Items */}
                                                    <div className="space-y-3">
                                                        <h4 className="font-medium text-gray-700">Items:</h4>
                                                        {order.items.map((item: any, itemIndex: number) => (
                                                            <div key={item.id} className="bg-white rounded-lg p-4 border">
                                                                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                                                                    {/* Product Image */}
                                                                    <div className="flex-shrink-0">
                                                                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                                                                            
                                                                                <img 
                                                                                    src={item.product.images[0].imageUrl.find((image:any)=>image.isPrimary===true)?.imageUrl} 
                                                                                    alt={item.product.name}
                                                                                    className="w-full h-full object-cover rounded-lg"
                                                                                />
                                                                          
                                                                               
                                                                          
                                                                        </div>
                                                                    </div>

                                                                    {/* Product Details */}
                                                                    <div className="flex-1 min-w-0">
                                                                        <h5 className="font-medium text-gray-900 mb-2 line-clamp-2">
                                                                            {item.product.name}
                                                                        </h5>
                                                                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                                                            {item.product.description}
                                                                        </p>
                                                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                                                            <div className="flex items-center gap-2">
                                                                                <span className="text-sm text-gray-600">Price:</span>
                                                                                <span className="font-medium">₹{item.priceAtPurchase}</span>
                                                                            </div>
                                                                            <div className="flex items-center gap-2">
                                                                                <span className="text-sm text-gray-600">Status:</span>
                                                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                                                    item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                                                    item.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                                                                    item.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                                                                    'bg-gray-100 text-gray-800'
                                                                                }`}>
                                                                                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Actions */}
                                                                    {/* <div className="flex flex-col gap-2">
                                                                        {item.designDocument && (
                                                                            <a 
                                                                                href={item.designDocument} 
                                                                                download={item.designDocument}
                                                                                className="inline-flex items-center gap-2 px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm"
                                                                            >
                                                                                <BsDownload size={16} />
                                                                                Download
                                                                            </a>
                                                                        )}
                                                                        <button className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                                                            View Details
                                                                        </button>
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-12">
                                            <div className="text-gray-500 mb-4">No orders found</div>
                                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                                                Start Shopping
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            )}
                            
                            {activeTab === "support" && (
                                <div className="p-4 sm:p-6">
                                    <CustomerSupport />
                                </div>
                            )}
                            
                            {activeTab === "profile" && (
                                <div className="p-4 sm:p-6">
                                    <div className="mb-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
                                                    {userDatas?.data?.profile && <AvatarImage src={userDatas?.data?.profile} />}
                                                    <AvatarFallback className="text-sm sm:text-lg">
                                                        {userProfile.firstName[0] + "" + userProfile.firstName[1]}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col gap-1">
                                                    <h1 className="font-semibold text-sm sm:text-lg">{userDatas?.name}</h1>
                                                    <h1 className="text-gray-600 text-xs sm:text-base">{userDatas?.email}</h1>
                                                </div>
                                            </div>
                                            <Button className="w-full sm:w-auto">Edit Profile</Button>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                                                <Input 
                                                    type="text" 
                                                    id="firstName" 
                                                    value={userProfile.firstName} 
                                                    placeholder="First Name" 
                                                    onChange={(e) => setData(e)}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                                                <Input 
                                                    type="text" 
                                                    id="lastName" 
                                                    value={userProfile.lastName} 
                                                    placeholder="Last Name" 
                                                    onChange={(e) => setData(e)}
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                                                <Input 
                                                    type="text" 
                                                    id="email" 
                                                    value={userProfile.email} 
                                                    placeholder="Email Address" 
                                                    readOnly={true}
                                                    className="w-full bg-gray-50"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                                                <Input 
                                                    type="text" 
                                                    id="phone" 
                                                    value={userProfile.phone} 
                                                    placeholder="Phone Number" 
                                                    onChange={(e) => setData(e)}
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>
                                        
                                        <Button onClick={handleUpdateProfile} className="w-full sm:w-auto">
                                            Update Profile
                                        </Button>
                                    </div>
                                </div>
                            )}
                            
                            {activeTab === "DownloadOrder" && (
                                <div className="p-4 sm:p-6">
                                    <h1 className="text-xl sm:text-2xl font-semibold mb-4">Download Orders</h1>
                                    {downloadOrder?.length > 0 ? (
                                        <div className="space-y-2">
                                            {downloadOrder?.map((item: any, index: number) => (
                                                <div key={index} className="border rounded-lg p-4">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="font-medium text-sm sm:text-base truncate">
                                                                {item?.orderItem?.product?.name}
                                                            </h3>
                                                        </div>
                                                        <a 
                                                            href={item?.document} 
                                                            download={item?.document}
                                                            className="ml-4 p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex-shrink-0"
                                                        >
                                                            <BsDownload size={20} />
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-8">
                                            <div className="text-gray-500 mb-4">No download orders available</div>
                                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                                                Choose Your Vills
                                            </Button>
                                        </div>
                                    )}
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