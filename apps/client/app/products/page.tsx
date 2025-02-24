"use client";
import React, { useEffect, useState } from "react";
import { DeliveryInfo } from "./components/DeliveryInfo";
import { ProductSpec } from "./components/ProductSpec";
import { BreadcrumbLayout } from "./components/breadcrumb";
import { ChevronDown } from "lucide-react";
import Detail from "./components/detail";
import { ReviewsComponent } from "./components/review/review";
import { DeliveryInfo as DeliveryInfoType, ProductDetail, StorageOption } from "@/types/data";
import { Button } from "@ui/components/ui/button";

export default function ProductsPage() {
  const [product, setProduct] = useState<ProductDetail>();
  const [selectedImage, setSelectedImage] = React.useState<string>("");

  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (option: StorageOption) => {
    setSelectedOption(option.capacity);
  };

  const handleColorSelect = (hexCode: string) => {
    setSelectedColor(hexCode);
  };

  const getProductDetail = async () => {
      const data = await fetch("api/productDetail");
      const products = await data.json();
      if (products.data) {
        setProduct(products.data);
      } else {
        console.log("🚀 Không tìm thấy products");
      }
  };

  useEffect(() => {
      getProductDetail();
  }, []);

  useEffect(() => {
      if (product?.imageUrls?.length) {
        setSelectedImage(product.imageUrls[0] || "");
      }

      setSelectedOption(product?.storageOptions?.find(v => v.isSelected)?.capacity || null);
      
    }, [product]);

  if(product == undefined) return 


  return (
      <>
          <section className="relative text-[#909090] h-fit pt-[28px] overflow-hidden">
              <div className="pl-10 px-10 lg:px-40">
                  <BreadcrumbLayout />
              </div>
              <div className="bg-white flex flex-wrap md:flex-nowrap items-center justify-center gap-10 py-20 px-5 lg:px-40 max-md:py-16 pt-[48px]">
                  <div className="flex flex-wrap md:flex-nowrap gap-10 items-center justify-center h-full w-full md:flex-row-reverse ">
                      <div className="md:w-3/4 h-80 md:h-auto w-full object-contain">
                      {selectedImage ? (
                          <img
                          loading="lazy"
                          src={selectedImage}
                          alt="iPhone main view"
                          className="mx-auto w-full h-full object-contain max-h-[30rem]"
                          />
                      ) : (
                          <p className="text-center text-gray-500">Image not available</p>
                      )}

                      </div>
                      <div className="flex md:flex-col flex-row items-start gap-6 my-auto md:w-1/4 w-full">
                          {product?.imageUrls.map((v, index) => (
                              <img
                                  key={index}
                                  src={v}
                                  className={`object-contain w-full h-20 cursor-pointer ${
                                      selectedImage === v ? "" : "opacity-40"
                                  }`}
                                  onClick={() => setSelectedImage(v)}
                              />
                          ))}
                      </div>
                  </div>

                  <div className="flex flex-col my-auto w-full text-center">
                      <div className="flex flex-col w-full max-md:max-w-full">
                          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none text-black">
                              {product?.name}
                          </h1>
                          <div className="flex flex-wrap gap-4 items-center mt-6 w-full whitespace-nowrap">
                              <div className="text-2xl md:text-3xl font-medium text-black">
                                  ${product?.price}
                              </div>
                              <div className="text-xl md:text-2xl text-neutral-400 line-through">
                                  ${product?.discountedPrice}
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-col mt-4 w-full">
                          <div className="flex flex-wrap gap-6 w-full">
                              <div className="text-base leading-relaxed text-neutral-950">Select color:</div>
                              <div className="flex flex-1 gap-2 items-center">
                                  {product?.colors.map((option, index) => (
                                      <div
                                          key={index}
                                          className={`flex shrink-0 w-8 h-8 rounded-full cursor-pointer transition-all ${
                                              selectedColor === option.hexCode
                                                  ? 'ring-2 ring-offset-2 ring-black'
                                                  : ''
                                              }`
                                          }
                                          style={{
                                              backgroundColor: option.hexCode
                                          }}
                                          role="button"
                                          onClick={() => handleColorSelect(option.hexCode)} 
                                      />
                                  ))}
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-wrap gap-4 items-center mt-6 w-full">
                          {product?.storageOptions?.map((option, index) => (
                              <button
                                  key={index}
                                  className={`flex-1 flex-shrink-0 px-4 md:px-6 py-2 md:py-4 text-center rounded-lg border ${
                                      selectedOption === option.capacity
                                      ? "border-black text-black"
                                      : "border-neutral-300 text-neutral-300"
                                  }`}
                                  onClick={() => handleSelectOption(option)}
                              >
                                  {option.capacity}
                              </button>
                          ))}
                      </div>

                      <div className="flex flex-wrap gap-4 items-start mt-6 w-full text-sm font-medium leading-4 text-neutral-600 max-md:max-w-full">
                          {product?.specifications?.map((spec, index) => (
                              <ProductSpec key={index} spec={spec} />
                          ))}
                      </div>

                      <div className="mt-6 text-sm text-neutral-500">
                          <span>
                              {product?.shortDescription}
                          </span>
                      </div>

                      <div className="flex flex-wrap gap-4 mt-8 w-full">
                          {product?.availability?.addToWishlist && (
                              <Button variant={"secondary"} size={"lg"} className="flex-1 min-w-max px-6 py-3 text-black bg-white border border-black rounded-md">
                                  Add to Wishlist
                              </Button>
                          )}
                          {product?.availability?.addToCart && (
                              <Button variant={"default"} size={"lg"} className="flex-1 min-w-max px-6 py-3 text-white bg-black rounded-md">
                                  Add to Cart
                              </Button>
                          )}
                      </div>

                      <div className="flex flex-wrap gap-8 items-center mt-8 w-full">
                          <DeliveryInfo deliveryInfo={product?.deliveryInfo as DeliveryInfoType} />
                      </div>
                  </div>
              </div>

              <Detail specifications={product.specifications} />

              <ReviewsComponent />


          </section>
      </>
  )
}