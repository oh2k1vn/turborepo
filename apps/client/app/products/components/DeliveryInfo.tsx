import { DeliveryInfo as DeliveryInfoType } from '@/types/data';
import * as React from 'react';

interface DeliveryInfoProps {
  deliveryInfo: DeliveryInfoType;
}

const deliveryDetails = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/351137b7d4f313d635d797ca5ac0cdf78431702c2ce22350a508c60e86855f49?placeholderIfAbsent=true&apiKey=51984c1c4719409db8bd5ad06c8527f1",
    title: "Free Delivery",
    valueKey: "freeDelivery" as keyof DeliveryInfoType,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e2ef495e7f39d9540febd3a0c6a01a0088a533d6756c17ea95b35a73977310b?placeholderIfAbsent=true&apiKey=51984c1c4719409db8bd5ad06c8527f1",
    title: "In Stock",
    valueKey: "inStock" as keyof DeliveryInfoType,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d41360270c3d651ed9016f9af623cb9cd7a7b0d90816f8a367cf0285531c3176?placeholderIfAbsent=true&apiKey=51984c1c4719409db8bd5ad06c8527f1",
    title: "Guaranteed",
    valueKey: "guaranteed" as keyof DeliveryInfoType,
  }
];

export function DeliveryInfo({ deliveryInfo }: DeliveryInfoProps) {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      {deliveryDetails.map((detail, index) => (
        <div key={index} className="flex flex-1 gap-4 items-center my-auto rounded-lg min-w-max">
          <div className="flex overflow-hidden flex-col justify-center items-center px-4 my-auto w-14 h-14 rounded-xl bg-neutral-100">
            <img
              loading="lazy"
              src={detail.icon}
              className="object-contain w-6"
            />
          </div>
          <div className="my-auto text-sm font-medium leading-6 text-neutral-500">
            {detail.title}
            <br />
            <span className="text-black">{deliveryInfo[detail.valueKey]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
