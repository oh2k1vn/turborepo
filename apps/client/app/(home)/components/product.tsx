"use client";

import { Button } from "@repo/ui/components/button";
import { Card } from "@repo/ui/components/card";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

import { ProductProps } from "../../../types/product";

const Product: React.FC<ProductProps> = ({ id, imgUrl, name, price }) => {
  return (
    <Card
      key={id}
      className="group relative overflow-hidden rounded-xl bg-white hover:shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col items-center p-5"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-all"
      >
        <Heart className="w-5 h-5" />
      </Button>
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={imgUrl}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-300 group-hover:scale-110"
          priority
        />
      </div>
      <div className="flex flex-col items-center text-center space-y-2 flex-1">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-xl font-bold text-red-500">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(price * 1000)}
        </p>
      </div>
      <Button className="w-full mt-4">
        Mua ngay
      </Button>
    </Card>
  );
};

export default Product;