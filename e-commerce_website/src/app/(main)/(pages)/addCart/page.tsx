"use client"    

import Header from "@/app/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TiDelete } from "react-icons/ti";
import userData from "../../StateManagement/userData";
import axiosInstance from "@/app/utils/axiosInstance";
import { useEffect } from "react";

export default function AddCart() {
    const currentUser=localStorage.getItem('currentUserId')
    if(currentUser!==null){
        useEffect(()=>{
            getCartData()
        },[])
    }

    const getCartData=async()=>{
        const payload:any={
            userId:currentUser as string
        }
        const response:any=await axiosInstance.get(`/cart/cartPage`,payload)
        console.log(response.data)
    }

    console.log(currentUser)
    return (
        <div>
            <Header headerColor={["#D8A526", "white"]} />
            <div className="mt-32">
                <h1 className="text-[35px] font-bold ml-12 mb-7">Shopping Cart</h1>
                <div className="flex gap-10 m-10">
                    <div className="w-[75%] ml-12 ">
                        <Table className="w-full border-1 border-gray-300 rounded-[10px]  ">
                            <TableHeader className="border-1 border-gray-300  ">
                                <TableHead className="text-[21px] text-gray-500 pt-9 pb-3 pl-12 font-semibold">items in you cart</TableHead>
                                <TableHead className="text-[21px] text-gray-500 font-semibold">Product Details</TableHead>
                                <TableHead className="text-[21px] text-gray-500 font-semibold">Price</TableHead>
                                <TableHead className="text-[21px] text-gray-500 font-semibold">Remove</TableHead>
                            </TableHeader>
                            <TableBody>
                                <TableRow >
                                    <TableCell className="text-[21px] text-gray-500 font-semibold">1</TableCell>
                                    <TableCell><div>
                                        <div><h1 className="text-[21px] text-gray-500 font-semibold">product name</h1></div>
                                        <div className="flex gap-2">
                                            <div><h1 className="text-[21px] text-gray-500 font-semibold">product name</h1></div>
                                            <div><h1 className="text-[21px] text-gray-500 font-semibold">reviews</h1></div>
                                        </div>
                                        </div></TableCell>
                                    <TableCell className="text-[21px] text-gray-500 font-semibold">₹ 1000</TableCell>
                                    <TableCell className=" "><TiDelete className="ml-6" size={30} /></TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                        {/* <Table className="w-full border-1 border-gray-300 rounded-[10px] ">
                            <thead>
                                <td>items in you cart</td>
                                <td>Product Details</td>
                                <td>Price</td>
                                <td>Remove</td>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Product 1</td>
                                    <td>₹ 1000</td>
                                    <td>Remove</td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                    <div className="w-[20%] border-1 border-gray-300 rounded-[10px] ">
                        <h1 className="text-[20px] font-bold p-3">Order Summary</h1>
                        <div className="border-1 w-full h-[1px] bg-gray-300"></div>
                        <div className="flex mt-2 flex-col gap-4 p-2">
                            <div className="flex justify-between px-2 text-[16px] font-semibold">
                                <div><h1 className="text-gray-500">Sub Total</h1></div>
                                <div><h1 className="text-gray-500">₹ 1000</h1></div>
                            </div>
                            <div className="flex justify-between px-2 text-[16px] font-semibold">
                                <div><h1 className="text-gray-500">Discount</h1></div>
                                <div><h1 className="text-gray-500">₹ 1000</h1></div>
                            </div>
                            <div className="flex justify-between mb-3 px-2 text-[16px] font-semibold">
                                <div><h1 className="text-gray-500">Platform Fee</h1></div>
                                <div><h1 className="text-gray-500">₹ 1000</h1></div>
                            </div>
                        </div>
                        <div className="border-1 w-full h-[1px] bg-gray-300"></div>
                        <div className="flex justify-between gap-2 px-3 py-4 text-[16px] font-semibold">
                            <div>
                                <h1>Total Amount</h1>
                            </div>
                            <div>
                                <h1>₹ 1000</h1>
                            </div>
                        </div>

                        <div className="border-1 w-full h-[1px] bg-gray-300 "></div>
                        <div className="px-15 py-4">
                            <Button
                                className="bg-[#D8A526] text-white border hover:bg-white hover:text-[#D8A526] text-[19px] font-semibold px-10 py-5"
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