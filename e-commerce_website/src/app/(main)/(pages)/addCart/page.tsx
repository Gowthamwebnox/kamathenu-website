"use client"

import Header from "@/app/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TiDelete } from "react-icons/ti";
import userData from "../../StateManagement/userData";
import axiosInstance from "@/app/utils/axiosInstance";
import { useEffect, useState } from "react";

export default function AddCart() {
    const currentUser = localStorage.getItem('currentUserId')
    const [cartData, setCartData] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [platformFee, setPlatformFee] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    if (currentUser !== null) {
        useEffect(() => {
            getCartData()
        }, [])
    }

    const getCartData = async () => {
        try {
            const payload: any = {
                userId: currentUser as string
            }
            const response: any = await axiosInstance.post(`/cart/cartPage`, payload)
            console.log("Full response:", response.data)
            console.log("Cart data:", response.data.cart)
            setCartData(response.data.cart || [])
            setSubTotal(response.data.cart.reduce((acc: any, item: any) => acc + parseInt(item.product.variants[0].price), 0))
            setDiscount(response.data.cart.reduce((acc: any, item: any) => acc + parseInt(item.product.variants[0].price), 0) - response.data.cart.reduce((acc: any, item: any) => acc + parseInt(item.product.variants[0].discountPrice), 0))
            setPlatformFee(response.data.cart.reduce((acc: any, item: any) => acc +2, 0))
            setTotalAmount(response.data.cart.reduce((acc: any, item: any) => acc + parseInt(item.product.variants[0].discountPrice), 0) + response.data.cart.reduce((acc: any, item: any) => acc +2, 0))
        } catch (error) {
            console.error("Error fetching cart data:", error)
            setCartData([])
        }
    }

    const handleRemove = async (id: string) => {
        try {
            const payload: any = {
                cartId: id
            }
            const response: any = await axiosInstance.post(`/cart/removeUserCart`, payload)
            console.log(response.data)
            getCartData()
        } catch (error) {
            console.error("Error removing item from cart:", error)
        }
    }
    console.log(currentUser)
    return (
        <div>
            <Header headerColor={["#D8A526", "white"]} />
            <div className="mt-32">
                <h1 className="text-[35px] font-bold ml-12 mb-7">Shopping Cart</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 md:px-8 lg:px-12">
                    <div className="lg:col-span-3">
                        <Table className="w-full border-1 border-gray-300 rounded-[10px]  ">
                            <TableHeader className="border-1 border-gray-300">
                                <TableHead className="text-sm md:text-lg lg:text-[21px] text-gray-500 pt-4 md:pt-6 lg:pt-9 pb-2 md:pb-3 pl-4 md:pl-8 lg:pl-12 font-semibold">
                                    {cartData.length} items in your cart
                                </TableHead>
                                <TableHead className="text-sm md:text-lg lg:text-[21px] text-gray-500 font-semibold hidden md:table-cell">Product Details</TableHead>
                                <TableHead className="text-sm md:text-lg lg:text-[21px] text-gray-500 font-semibold">Price</TableHead>
                                <TableHead className="text-sm md:text-lg lg:text-[21px] text-gray-500 font-semibold">Remove</TableHead>
                            </TableHeader>
                            <TableBody>
                                {cartData && cartData.length > 0 ? (
                                    cartData.map((items: any, ind: number) => (
                                                                                <TableRow key={ind}>
                                            <TableCell className="p-2 md:p-4">
                                                <img
                                                    src={items?.product?.images[0]?.imageUrl[0]}
                                                    alt="Product"
                                                    className="w-16 h-12 ml-6 md:w-24 md:h-20 lg:w-32 lg:h-26 object-cover rounded"
                                                />
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                <div>
                                                    <div>
                                                        <h1 className="text-sm md:text-lg lg:text-[21px] text-gray-500 font-semibold">
                                                            {items?.product?.name}
                                                        </h1>
                                                    </div>
                                                    <div className="flex gap-2 items-center mt-1">
                                                        <div>
                                                            <span className="text-xs md:text-sm text-white font-semibold border-1 border-gray-300 bg-[#D8A526] rounded-md px-2 md:px-4 py-1">
                                                                {items?.product?.reviews[0]?.rating || 'N/A'}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="text-xs md:text-sm text-gray-500 font-semibold">
                                                                {items?.product?.reviews?.length || 0} Reviews
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-sm md:text-lg lg:text-[21px] text-gray-500 font-semibold">
                                                ₹ {items?.product?.variants[0]?.discountPrice}
                                            </TableCell>
                                            <TableCell className="cursor-pointer p-2 md:p-4" onClick={() => handleRemove(items?.id)}>
                                                <TiDelete className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center py-8">
                                            <p className="text-gray-500">No items in cart</p>
                                        </TableCell>
                                    </TableRow>
                                )}


                            </TableBody>
                        </Table>
                        
                    </div>  
                    <div className="lg:col-span-1 border-1 border-gray-300 rounded-[10px] h-fit">
                        <h1 className="text-[20px] font-bold p-3">Order Summary</h1>
                        <div className="border-1 w-full h-[1px] bg-gray-300"></div>
                        <div className="flex mt-2 flex-col gap-3 md:gap-4 p-2">
                            <div className="flex justify-between px-2 text-sm md:text-[16px] font-semibold">
                                <div><span className="text-gray-500">Sub Total</span></div>
                                <div><span className="text-gray-500">₹{subTotal}</span></div>
                            </div>
                            <div className="flex justify-between px-2 text-sm md:text-[16px] font-semibold">
                                <div><span className="text-gray-500">Discount</span></div>
                                <div><span className="text-gray-500">₹{discount}</span></div>
                            </div>
                            <div className="flex justify-between mb-3 px-2 text-sm md:text-[16px] font-semibold">
                                <div><span className="text-gray-500">Platform Fee</span></div>
                                <div><span className="text-gray-500">₹{platformFee}</span></div>
                            </div>
                        </div>
                        <div className="border-1 w-full h-[1px] bg-gray-300"></div>
                        <div className="flex justify-between gap-2 px-3 py-3 md:py-4 text-sm md:text-[16px] font-semibold">
                            <div>
                                <span>Total Amount</span>
                            </div>
                            <div>
                                <span>₹{totalAmount}</span>
                            </div>
                        </div>

                        <div className="border-1 w-full h-[1px] bg-gray-300"></div>
                        <div className="flex justify-center items-center p-3">
                            <Button
                                className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] text-sm md:text-base font-semibold px-4 py-2 md:px-6 md:py-3 w-full"
                                style={{ borderColor: "#D8A526" }}>
                                Proceed to Checkout
                            </Button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}