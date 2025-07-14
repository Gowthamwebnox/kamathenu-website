"use client";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import React, { useEffect, useState } from "react";

import { IoIosStar } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { FaHeart } from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useParams, useSearchParams } from "next/navigation";
import axiosInstance from "@/app/utils/axiosInstance";
import { toast } from "sonner";
import {
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
  DialogDescription,
  Dialog,
  DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";


const ProductDetails = () => {
  
  const { id } = useParams();
  const searchParams = useSearchParams();
  const productName = searchParams.get("name");
  const [showDescription, setShowDescription] = useState(false);
  const [errorValidation, setErrorValidation] = useState(false);
  const payload = {
    id: id,
    categoryName: productName,
    limit: 12,
  };
  const [productDetails, setProductDetails] = useState<any>(null);
  const [getsimilarProducts, setSimilarProducts] = useState<any>([]);
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    const response: any = await axiosInstance.post(
      "product/particularProduct",
      payload
    );
    setProductDetails(response.data.productData.particularProduct);
    setSimilarProducts(response.data.productData.similerProduct);
  };
  const tabs = [
    "Design Information",
    "Designer Details",
    "Package Details",
    "Delivery Details",
    "Reviews",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [orderDescription, setOrderDescription] = useState("");

  const [mainPhoto, setMainPhoto] = useState(
    "/assets/kamathenu Images/Design/design_home_1.jpg"
  );
  const [img1, setImg1] = useState(
    "/assets/kamathenu Images/ParticularProduct/productDetail_1 (1).png"
  );

  const [img2, setImg2] = useState(
    "/assets/kamathenu Images/ParticularProduct/productDetail_1 (2).png"
  );

  const [img3, setImg3] = useState(
    "/assets/kamathenu Images/ParticularProduct/productDetail_1 (3).png"
  );

  const changePhoto = (alt: string) => {
    const getMainPhoto = mainPhoto;
    if (alt === "img1") {
      setMainPhoto(img1);
      setImg1(getMainPhoto);
    }
    if (alt === "img2") {
      setMainPhoto(img2);
      setImg2(getMainPhoto);
    }
    if (alt === "img3") {
      setMainPhoto(img3);
      setImg3(getMainPhoto);
    }
  };
  const handleAddCart = async (productId: string) => {
    const payload = {
      userId: localStorage.getItem("currentUserId"),
      productId: productId,
    };
    const response: any = await axiosInstance.post("cart/addCart", payload);
    console.log(response.data.cartData);
    if (response.status === 200) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.cartData.message);
    }
  };
  const setData = (e: any) => {
    setOrderDescription(e.target.value);
  };

  const validation = () => {
    console.log(orderDescription)
    if (orderDescription == '' || orderDescription == undefined) {
      setErrorValidation(true);
    }
  };
  const handleOrder = () => {
    setShowDescription(true);
  };

  const handleOrderNow = async (
    productId: string,
    amount: number,
    sellerId: string
  ) => {
    const userOrderData: any = [];

    userOrderData.push({
      productId: productId,
      amount: amount,
      sellerId: sellerId,
    });
    const payload = {
      userId: localStorage.getItem("currentUserId"),
      userOrderData: userOrderData,
      totalAmount: amount,
    };
    validation();
    if (!errorValidation) {
      const response: any = await axiosInstance.post(
        "order/createOrder",
        payload
      );
      console.log("🔥🔥🔥🔥🔥🔥response🔥🔥🔥🔥🔥🔥", response)

      setShowDescription(false);
    }
    if (errorValidation) {
      setShowDescription(true);
    }
  };

  return (
    <>
      <Header headerColor={["white", "black"]} />

      {/* ✅ Wrap whole content in overflow-x-hidden to avoid horizontal scroll */}
      <div className="overflow-x-hidden">
        {productDetails !== null && (
          <div className="mt-18  lg:m-20 lg:ml-51 grid grid-cols-6 items-center lg:gap-x-19 p-4 lg:p-10 gap-y-5">
            <div className="col-span-6 md:col-span-1 lg:col-span-1 flex   md:grid  gap-4  p-2   grid-cols-1 grid-rows-3 rounded-lg p-12 px-8 ">
              <div className="col-span-1  rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={
                    productDetails !== null &&
                    productDetails.images[0].imageUrl[1]
                  }
                  alt="img1"
                  className="border rounded-[3px] w-[100%] h-[100%] object-center"
                  onClick={() => {
                    changePhoto("img1");
                  }}
                />
              </div>

              <div className="col-span-1  rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={
                    productDetails !== null &&
                    productDetails.images[0].imageLayerout[0]
                  }
                  alt="img1"
                  className="border rounded-[3px] w-[100%] h-[100%]"
                  onClick={() => {
                    changePhoto("img1");
                  }}
                />
              </div>

              <div className="col-span-1  rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={
                    productDetails !== null &&
                    productDetails.images[0].imageLayerout[1]
                  }
                  alt="img1"
                  className="border rounded-[3px] w-[100%] h-[100%]"
                  onClick={() => {
                    changePhoto("img1");
                  }}
                />
              </div>
            </div>

            <div className="w-full col-span-6 md:col-span-4 lg:col-span-3">
              <img
                src={
                  productDetails !== null &&
                  productDetails.images[0].imageUrl[0]
                }
                alt="design_home_1"
                className="h-[504px] border rounded-[11px] w-[100%] object-cover"
              />
            </div>

            <div className="col-span-6  md:col-span-6 lg:col-span-2 flex flex-col gap-5">
              <h1 className="text-[33px] font-semibold">
                {productDetails !== null && productDetails.name}
              </h1>
              <div className="flex items-center gap-3 px-2">
                <img
                  src={
                    productDetails !== null &&
                    productDetails.seller.profileImage
                  }
                  alt="constructor_person"
                  className="w-[11%] h-[31px] rounded-[50%]"
                />
                <h1 className="text-[19px]">
                  {productDetails !== null && productDetails.seller.sellerName}
                </h1>
                <h2 className="text-[19px] text-gray-400 font-normal">
                  (
                  {productDetails !== null &&
                    productDetails.seller.storeDescription}
                  )
                </h2>
              </div>

              <div className="flex px-2 gap-1 items-center">
                {[
                  ...Array(
                    productDetails !== null && productDetails.reviews[0].rating
                  ),
                ].map((_, i) => (
                  <IoIosStar key={i} className="text-[#EACD3C] size-9" />
                ))}
                <h1 className="ml-1 text-gray-400 text-[15px]">
                  ({productDetails !== null && productDetails.reviews[0].rating}
                  )
                </h1>
              </div>

              <div>
                <div className="text-gray-400 line-through flex items-center text-[27px] font-normal">
                  ₹{" "}
                  {productDetails !== null && productDetails.variants[0].price}
                </div>
                <div className="text-[#D8A526] flex items-center text-[33px] font-semibold">
                  ₹{" "}
                  {productDetails !== null &&
                    productDetails.variants[0].discountPrice}
                </div>
              </div>

              <div className="w-[73%]">
                <p className="text-[19px]">
                  {productDetails !== null && productDetails.description}
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  className="bg-[#D86A26] w-30 text-[19px] p-7 font-normal text-white border hover:bg-white hover:text-[#D8A526] cursor-pointer"
                  style={{ borderColor: "#D8A526" }}
                  onClick={() => {
                    // handleOrderNow(
                    //   productDetails?.id,
                    //   productDetails?.variants[0].discountPrice,
                    //   productDetails?.seller.id
                    // );
                    handleOrder();
                  }}
                >
                  Order Now
                </Button>
                <div>
                  <Dialog
                    open={showDescription}
                    onOpenChange={setShowDescription}
                  >
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>
                          Description <span className="text-red-600">*</span>
                        </DialogTitle>
                        <DialogDescription>
                          Describe what &apos;design&apos; means in your own words.
                        </DialogDescription>
                      </DialogHeader>
                      <Textarea
                        value={orderDescription}
                        name="orderDescription"
                        onChange={(e) => setData(e)}
                      />
                      {errorValidation&&<h1 className="text-red-500 text-[16px]">Please Descripe the your design</h1>}
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button
                          onClick={() => {
                            handleOrderNow(
                              productDetails?.id,
                              productDetails?.variants[0]?.discountPrice,
                              productDetails?.seller?.id
                            );
                          }}
                        >
                          Confirm
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <Button
                  className="bg-[#D8A526] w-40 text-[19px] p-7 text-white border hover:bg-white hover:text-[#D8A526] cursor-pointer"
                  style={{ borderColor: "#D8A526" }}
                  onClick={() => {
                    handleAddCart(productDetails?.id);
                  }}
                >
                  Add to Cart <MdOutlineShoppingCart className="size-6 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow  border-1 border-gray-400 m-5 md:m-19  ">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex flex-wrap justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 border-b border-gray-300 ">
              {tabs.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-sm sm:text-base md:text-lg"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((t: any) => (
              <TabsContent key={t} value={t}>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 px-11 pt-3 pb-11">
                  {/* Left Column */}
                  <div className="ml-15">
                    {t === "Design Information" && (
                      <>
                        <h3 className="text-lg font-semibold mb-4">
                          About this Design:
                        </h3>
                        <ul className="list-disc list-inside w-[90%] text-gray-700 space-y-2">
                          {productDetails !== null &&
                            productDetails?.productDetails?.designInformation?.aboutDesign?.map(
                              (line: any, idx: any) => <li key={idx}>{line}</li>
                            )}
                        </ul>
                      </>
                    )}

                    {t === "Designer Details" && (
                      <>
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src={
                              productDetails !== null &&
                              productDetails.seller.profileImage
                            }
                            alt="Designer"
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <h3 className="text-lg font-semibold">
                              {productDetails !== null &&
                                productDetails.seller.sellerName}
                            </h3>
                            <p className="text-gray-500 text-sm">
                              (
                              {productDetails !== null &&
                                productDetails.seller.storeDescription}
                              )
                            </p>
                          </div>
                        </div>
                        <h4 className="font-semibold text-[21px] mb-2">
                          About this Designer:
                        </h4>
                        <p className=" mb-4 text-[18px] font-normal text-gray-400">
                          {productDetails !== null &&
                            productDetails.description}
                        </p>
                        <h4 className="font-medium mb-2">Tools:</h4>
                        <div className="flex space-x-2">
                          {productDetails !== null &&
                            productDetails?.productDetails[0]?.packageDetails?.toolImage?.map(
                              (ele: any, ind: any) => (
                                <img
                                  src={ele}
                                  alt="tool"
                                  className="w-8 h-10"
                                />
                              )
                            )}
                        </div>
                      </>
                    )}

                    {t === "Package Details" && (
                      <>
                        <h4 className="font-medium mb-4 text-[21px]">
                          Package file Details:
                        </h4>
                        <p className="text-gray-700 mb-2 text-[18px] font-normal">
                          {productDetails !== null &&
                            productDetails.description}
                        </p>
                        <p className="text-gray-700 mb-2 text-[18px] font-normal">
                          {productDetails !== null &&
                            productDetails.description}
                        </p>
                      </>
                    )}

                    {t === "Delivery Details" && (
                      <>
                        <h4 className="font-semibold mb-4 text-[21px]">
                          Package Delivery Details:
                        </h4>
                        <p className="text-gray-700 mb-2 text-[18px] font-normal">
                          {productDetails !== null &&
                            productDetails.productDetails[0].deliveryDetails
                              .deliveryDescription}
                        </p>
                        <p className="text-gray-700 text-[18px] font-normal">
                          {productDetails !== null &&
                            productDetails.productDetails[0].deliveryDetails
                              .deliveryDescription}
                        </p>
                      </>
                    )}

                    {t === "Reviews" && (
                      <>
                        <h1 className=" font-semibold mb-4 text-[21px]">
                          Customer Reviews
                        </h1>
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="flex">
                            {Array(
                              productDetails !== null &&
                                productDetails.reviews[0].rating
                            )
                              .fill(0)
                              .map((_, i) => (
                                <IoIosStar
                                  key={i}
                                  className="text-yellow-500 w-5 h-5"
                                />
                              ))}
                          </div>
                          <span className="text-gray-600">
                            (
                            {productDetails !== null &&
                              productDetails.reviews[0].rating}{" "}
                            out of 5)
                          </span>
                        </div>
                        <p className="text-gray-500 mb-4">
                          {productDetails !== null &&
                            productDetails.reviews.length}{" "}
                          reviews
                        </p>
                        {["5", "4", "3", "2", "1"].map((score) => (
                          <div
                            key={score}
                            className="flex items-center mb-2 text-gray-600"
                          >
                            <span className="w-4">{score}</span>
                            <div className="h-2 flex-1 bg-gray-200 rounded mx-2 overflow-hidden">
                              <div
                                className={`h-full bg-yellow-400`}
                                style={{
                                  width:
                                    score === "5"
                                      ? "100%"
                                      : score === "4"
                                      ? "0%"
                                      : score === "3"
                                      ? "0%"
                                      : score === "2"
                                      ? "0%"
                                      : "0%",
                                }}
                              />
                            </div>
                            <span>
                              {score === "5"
                                ? "100%"
                                : score === "4"
                                ? "0%"
                                : score === "3"
                                ? "0%"
                                : score === "2"
                                ? "0%"
                                : "0%"}
                            </span>
                          </div>
                        ))}
                        <button className="mt-4 px-4 py-2 border border-gray-800 rounded text-gray-800">
                          Add to Your Review
                        </button>
                      </>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="ml-15">
                    {t === "Design Information" && (
                      <>
                        <h3 className="text-lg font-semibold  mb-4">
                          Design Features:
                        </h3>
                        <ul className="list-disc list-inside w-[90%] text-gray-700 space-y-2">
                          {productDetails !== null &&
                            productDetails.productDetails?.designInformation?.designFeature?.map(
                              (line: any, idx: any) => <li key={idx}>{line}</li>
                            )}
                        </ul>
                      </>
                    )}

                    {t === "Designer Details" && (
                      <>
                        <h4 className="font-medium mb-4">Expertise:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          {productDetails !== null &&
                            productDetails.productDetails?.designDeatils?.expertise?.map(
                              (exp: any, i: any) => <li key={i}>{exp}</li>
                            )}
                        </ul>
                      </>
                    )}

                    {t === "Package Details" && (
                      <>
                        <h4 className="font-medium mb-4">What do you Get?</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          {productDetails !== null &&
                            t.productDetails?.packageDetails?.get?.map(
                              (line: any, idx: any) => <li key={idx}>{line}</li>
                            )}
                        </ul>
                      </>
                    )}

                    {t === "Delivery Details" && (
                      <>
                        <h4 className="font-medium mb-4">
                          Delivery Instructions:
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                          {productDetails !== null &&
                            productDetails.productDetails[0].deliveryDetails.deliveryInstructions?.map(
                              (line: any, idx: any) => <li key={idx}>{line}</li>
                            )}
                        </ul>
                      </>
                    )}

                    {t === "Reviews" && (
                      // Placeholder to show 2 review cards side by side — you can expand this
                      <div className="space-y-4">
                        {productDetails !== null &&
                          productDetails.reviews.map((ele: any, ind: any) => (
                            <div
                              key={ind}
                              className="bg-gray-50 p-4 rounded-lg"
                            >
                              <p className="text-gray-700 italic mb-2">
                                {ele.reviewText}
                              </p>
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {Array(ele.rating)
                                    .fill(0)
                                    .map((_, j) => (
                                      <IoIosStar
                                        key={j}
                                        className="text-yellow-500 w-4 h-4"
                                      />
                                    ))}
                                </div>
                                <span className="text-gray-800 font-medium">
                                  {ele.user.name}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/*  SIMILAR PRODUCTS CAROUSEL */}

        <div className="overflow-x-hidden mt-11">
          <h1 className="font-semibold m-4 md:mx-19 text-[#1A1A1A]  text-[17px] md:text-[30px] mb-4">
            You Might be Interested in these Designs
            {getsimilarProducts.length > 0 ? (
              <Carousel
                opts={{
                  align: "start",
                  loop: false,
                }}
                className="w-full "
              >
                <CarouselContent className="ml-4 mt-6 w-[60%] md:w-[70%]">
                  {getsimilarProducts.map((item: any) => (
                    <CarouselItem
                      key={item.id}
                      className="md:basis-1/2 lg:basis-1/4 flex items-stretch"
                    >
                      <div className="flex flex-col  rounded-t-[15px] border border-gray-400 gap-4 relative">
                        <img
                          src={item.images[0].imageUrl[0]}
                          alt="image"
                          className="w-full h-[234px] border rounded-t-[11px]"
                        />
                        <h1 className="text-[21px] px-3 font-semibold">
                          {item.name}
                        </h1>
                        <div className="flex items-center gap-3 px-2">
                          <img
                            src={item.seller.profileImage}
                            alt="constructor_person"
                            className="w-[13%] h-[21px] rounded-full"
                          />
                          <h1 className="text-[14px]">
                            {item.seller.sellerName}
                          </h1>
                          <h2 className="text-[14px] text-gray-400 font-normal">
                            {item.seller.storeDescription}
                          </h2>
                        </div>
                        <div className="flex px-2 gap-1 items-center">
                          {[...Array(item.reviews[0].rating)].map((_, i) => (
                            <IoIosStar
                              key={i}
                              className="text-[#EACD3C] size-4"
                            />
                          ))}
                          <h1 className="ml-1 text-gray-400 text-[15px]">
                            ({item.reviews[0].rating})
                          </h1>
                        </div>
                        <div className="flex p-2 gap-6 items-center">
                          <div>
                            <div className="text-gray-400 line-through text-[21px] font-semibold">
                              ₹ {item.variants[0].price}
                            </div>
                            <div className="text-[#D8A526] text-[28px] font-semibold">
                              ₹ {item.variants[0].discountPrice}
                            </div>
                          </div>
                          <img
                            src="/assets/kamathenu Images/Design/shopNow.png"
                            alt=""
                            className="bg-[#FFFAEF] ml-12 p-2 rounded-full size-12"
                          />
                        </div>
                        <FaHeart className="absolute top-2 right-2 size-6 text-white" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* ✅ Show only the Previous button (no next) */}
              </Carousel>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Loading similar products...</p>
              </div>
            )}
          </h1>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
