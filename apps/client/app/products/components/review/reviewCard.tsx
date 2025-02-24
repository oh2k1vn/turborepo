import * as React from "react";
import { StarRating } from "./starRating";


export interface ReviewProps {
    name: string;
    avatar: string;
    date: string;
    reviewText: string;
    imageFeedBack?: string[];
    starRating: number
}

export function ReviewCard({ name, avatar, date, reviewText, imageFeedBack, starRating }: ReviewProps) {
  return (
    <div className="flex flex-wrap gap-5 items-start py-6 md:pr-7 md:pl-2 w-full rounded-xl bg-neutral-50">
      <img src={avatar} className="object-cover size-8 md:size-14 rounded-full" />

      <div className="flex flex-col flex-1 gap-3 w-full text-black">
            <div className="flex flex-wrap gap-x-10 gap-y-1 justify-between items-center w-full">
                <div className="text-base md:text-lg font-bold leading-none">{name}</div>
                <div className="text-xs md:text-sm font-medium leading-none text-right opacity-20">
                    {date}
                </div>
            </div>
            <div className='w-full flex gap-2'>
                <StarRating rating={starRating} />
            </div>        
            <div className="text-sm md:text-base font-medium leading-6 text-zinc-500">
                {reviewText}
            </div>

            {imageFeedBack ? <div className="flex flex-wrap w-full gap-2">
                {imageFeedBack?.map((v,index) => (
                    <img key={index} src={v} alt="" className="rounded-lg w-28 h-16 md:w-36 md:h-20 object-cover" />
                ))}
            </div>: <></> }
      </div>
    </div>
  );
}