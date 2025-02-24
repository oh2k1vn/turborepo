"use client";
import React from "react";
import Head from "next/head";
import ListProduct from "./components/listProducts";
import { cn } from "@repo/ui/lib/utils";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {

  const [loveProducts, setLoveProducts] = useState<string[]>([]);
  const [filterTag, setFilterTag] = useState<string | null>(null);
  const [category, setCategory] = useState<
    {
      id: string;
      name: string;
      iconUrl: string;
    }[]
  >([]);
  const [product, setProduct] = useState<
    {
      id: string;
      name: string;
      tags: string[];
      brand: string;
      price: number;
      imgUrl: string;
    }[]
  >([]);

  const getCategories = async () => {
    const data = await fetch("api/categories");
    const categories = await data.json();
    setCategory(categories.data ? categories.data : []);
  };

  const getProducts = async () => {
    const data = await fetch("api/products");
    const products = await data.json();
    setProduct(products.data ? products.data : []);
  };

  const handleFilterProducts = (tag: string) => {
    setFilterTag((prev) => (filterTag === tag ? null : tag));
  };

  const handleLikeProduct = (id: string) => {
    const checkIdProduct = loveProducts.includes(id);
    setLoveProducts((prev) =>
      checkIdProduct ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    Promise.all([getCategories(), getProducts()]);
  }, []);

  return (
    <>
      <Head>
        <title>Cyber Store - Mua sắm sản phẩm công nghệ</title>
        <meta
          name="description"
          content="Cyber Store cung cấp các sản phẩm công nghệ mới nhất với giá tốt nhất."
        />
        <meta
          name="keywords"
          content="mua sắm, công nghệ, điện thoại, laptop, phụ kiện"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Cyber Store - Mua sắm sản phẩm công nghệ"
        />
        <meta
          property="og:description"
          content="Cyber Store cung cấp các sản phẩm công nghệ mới nhất với giá tốt nhất."
        />
        <meta property="og:image" content="/images/cyber-store-banner.jpg" />
        <meta property="og:url" content="https://cyberstore.com" />
      </Head>
      {/* <div className="container py-10">
        <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
        <p className="mt-2">Discover amazing products at great prices.</p>
        <ListProduct />
      </div> */}
      <section className="relative bg-[#211C24] text-[#909090] flex flex-col items-center h-fit text-center pt-[88px] overflow-hidden px-4">
        <p className="font-semibold text-[25px]">Pro.Beyond.</p>
        <p className="text-[72px] font-thin text-white py-4">
          IPhone 14 <span className="font-semibold">Pro</span>
        </p>
        <p className="font-medium text-[19px]">
          Được tạo ra để thay đổi mọi thứ tốt hơn. Dành cho mọi người
        </p>
        <div className="rounded py-4 px-14 border border-white mt-8 font-medium text-base">
          Mua ngay
        </div>
        <Image
          src={"/images/Iphone_Banner.webp"}
          alt="Iphone Banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3">
        <div className="py-10 px-4 flex flex-col items-center text-center bg-[#EDEDED]">
          <Image
            src="/images/apple_ariPods_max.png"
            alt="apple ariPods max"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <p className="text-[34px] pt-6 pb-2">
            Apple AirPods <span className="font-medium">Max</span>
          </p>
          <p className="text-[#909090] font-medium text-base">
            Âm thanh tính toán. Nghe này, nó rất mạnh mẽ
          </p>
        </div>
        <div className="py-10 px-4 flex flex-col items-center text-center bg-[#353535]">
          <Image
            src="/images/app_vision_pro.png"
            alt="apple ariPods max"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <p className="text-[34px] pt-6 pb-2 text-white">
            Apple Vision <span className="font-medium">Pro</span>
          </p>
          <p className="text-[#909090] font-medium text-base">
            Một cách sống động để trải nghiệm giải trí
          </p>
        </div>
        <div className="py-10 px-4 flex flex-col items-center text-center bg-white">
          <Image
            src="/images/play_station.png"
            alt="apple ariPods max"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <p className="text-[34px] pt-6 pb-2">
            Playstation <span className="font-medium">5</span>
          </p>
          <p className="text-[#909090] font-medium text-base">
            CPU, GPU và ổ SSD cực kỳ mạnh mẽ với I/O tích hợp sẽ định nghĩa lại
            trải nghiệm PlayStation của bạn.
          </p>
        </div>
        <div className="py-10 px-4 flex flex-col items-center text-center bg-[#EDEDED] lg:col-span-4">
          <Image
            src="/images/MacBook Pro 14.png"
            alt="apple ariPods max"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
          <div>
            <p className="text-[34px] pt-6 pb-2">
              Macbook <span className="font-medium">Air</span>
            </p>
            <p className="text-[#909090] font-medium text-base">
              MacBook Air 15 inch mới mang đến nhiều không gian hơn cho những gì
              bạn yêu thích với màn hình Liquid Retina rộng rãi.
            </p>

            <div className="rounded py-4 px-14 border border-black w-full mt-4 font-medium text-base">
              Mua ngay
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-[#FAFAFA] flex flex-col items-center w-full">
        <div className="flex items-center justify-between lg:max-w-screen-xl w-full">
          <p className="font-medium text-2xl">Danh mục</p>
          <div className="flex items-center">
            <ChevronLeft />
            <ChevronRight />
          </div>
        </div>
        <div className="grid-cols-2 grid gap-4 mt-12 lg:grid-cols-6 lg:max-w-screen-xl w-full">
          {category.map((item) => (
            <div
              key={item?.id}
              className="flex flex-col gap-2 font-medium text-base items-center bg-[#EDEDED] rounded-2xl py-6"
            >
              <Image
                src={item?.iconUrl}
                alt={`icon_${item.id}`}
                width={48}
                height={48}
              />
              {item?.name}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 lg:max-w-screen-xl lg:w-full lg:mx-auto">
        <div className="text-base font-medium flex gap-x-8 overflow-x-auto whitespace-nowrap text-[#8B8B8B] scrollbar-hide">
          <div
            className={cn(
              "border-b-2 border-transparent transition-colors duration-300 cursor-pointer hover:text-black",
              filterTag == "NewArrival" && "text-black border-black"
            )}
            onClick={() => handleFilterProducts("NewArrival")}
          >
            Mới nhất
          </div>
          <div
            className={cn(
              "border-b-2 border-transparent transition-colors duration-300 cursor-pointer hover:text-black",
              filterTag == "Bestseller" && "text-black border-black"
            )}
            onClick={() => handleFilterProducts("Bestseller")}
          >
            Bán chạy nhất
          </div>
          <div
            className={cn(
              "border-b-2 border-transparent transition-colors duration-300 cursor-pointer hover:text-black",
              filterTag == "FeaturedProducts" && "text-black border-black"
            )}
            onClick={() => handleFilterProducts("FeaturedProducts")}
          >
            Sản phẩm nổi bật
          </div>
        </div>

        <div className="grid-cols-2 grid gap-4 mt-8 lg:grid-cols-4">
          {product
            ?.filter((item) =>
              filterTag ? item?.tags.includes(filterTag) : item
            )
            .map((item) => (
              <div
                key={item?.id}
                className="flex flex-col gap-2 relative items-center bg-[#F6F6F6] rounded-xl px-3 py-6"
              >
                <Heart
                  className={cn(
                    "absolute top-2 right-2 text-[#909090C4] cursor-pointer transition-colors duration-300",
                    loveProducts.includes(item.id) &&
                      "fill-red-500 text-red-500"
                  )}
                  onClick={() => handleLikeProduct(item?.id)}
                />
                <Image
                  src={item?.imgUrl}
                  alt={`${item.id}-${item.name}`}
                  width={104}
                  height={104}
                />
                <div className="flex-1 flex flex-col gap-4 items-center text-center justify-between w-full">
                  <p className="line-clamp-2 font-medium text-base">
                    {item?.name}
                  </p>
                  <p className="font-semibold text-2xl">{item?.price}</p>

                  <Link
                    href={"/products"}
                    className="bg-primary text-white w-full py-3 rounded-lg"
                  >
                    Mua ngay
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="px-4 py-14 lg:max-w-screen-xl lg:w-full lg:mx-auto">
        <p className="font-medium text-2xl">Giảm giá tới -50%</p>

        <div className="grid-cols-2 grid gap-4 mt-8 lg:grid-cols-4">
          {product
            ?.filter((item) => item?.tags.includes("50%"))
            .map((item) => (
              <div
                key={item?.id}
                className="flex flex-col gap-2 relative items-center bg-[#F6F6F6] rounded-xl px-3 py-6"
              >
                <Heart
                  className={cn(
                    "absolute top-2 right-2 text-[#909090C4] cursor-pointer transition-colors duration-300",
                    loveProducts.includes(item.id) &&
                      "fill-red-500 text-red-500"
                  )}
                  onClick={() => handleLikeProduct(item?.id)}
                />
                <Image
                  src={item?.imgUrl}
                  alt={`${item.id}-${item.name}`}
                  width={104}
                  height={104}
                />
                <div className="flex-1 flex flex-col gap-4 items-center text-center justify-between w-full">
                  <p className="line-clamp-2 font-medium text-base">
                    {item?.name}
                  </p>
                  <p className="font-semibold text-2xl">{item?.price}</p>

                  <div className="bg-primary text-white w-full py-3 rounded-lg">
                    Mua ngay
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
