import * as React from 'react';
import { RatingBar, RatingBarProps } from './ratingBar';
import { ReviewCard } from './reviewCard';
import { Button } from '@ui/components/ui/button';
import { ChevronDown, Heart } from 'lucide-react';
import { StarRating } from './starRating';
import { cn } from '@ui/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { reviewProduct } from '@/types/data';

interface ReviewStats {
    rating: number;
    totalReviews: number;
    ratings: RatingBarProps[];
} 

export const ReviewsComponent: React.FC = () => {
    const [review, setReview] = React.useState<reviewProduct>();

    const getReviewProduct = async () => {
        const data = await fetch("api/review");
        const products = await data.json();
        if (products.data) {
            setReview(products.data);
        } else {
            console.log("🚀 Không tìm thấy products");
        }
    };
    
    React.useEffect(() => {
        getReviewProduct();
    }, []);

    return (
        <div className="bg-white flex flex-col items-center justify-center gap-8 md:gap-10 py-28 px-5 lg:px-40 pt-10">
            <div className="flex flex-col justify-center w-full">
                <div className="flex-1 gap-8 w-full text-xl md:text-2xl font-medium leading-none text-black whitespace-nowrap">
                    Reviews
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-12 w-full">
                    <div className="flex flex-col p-8 font-medium text-center text-black rounded-3xl bg-neutral-50 h-full flex-shrink-0">
                        <div className="text-4xl md:text-6xl leading-none">{review?.totalRating?.rating}</div>
                        <div className="mt-4 text-base leading-none opacity-30">
                            of {review?.totalRating?.totalReviews} reviews
                        </div>
                        <div className='w-full flex gap-2 mt-4'>
                            <StarRating rating={4.5} />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 my-auto ">
                        {review?.totalRating?.ratings.map((rating, index) => (
                            <div key={index} className={`w-full ${index > 0 ? "mt-6" : ""}`}>
                                <RatingBar {...rating} />
                            </div>
                        ))}
                    </div>
                </div>
                <form className="w-full mt-6 md:mt-12">
                    <label htmlFor="comment" className="sr-only">Leave a comment</label>
                    <input
                        type="text"
                        id="comment"
                        className="flex-1 px-4 py-3 md:py-5 w-full text-xs md:text-sm leading-none bg-white rounded-lg border border-solid border-stone-300 text-neutral-400"
                        placeholder="Leave Comment"
                        aria-label="Leave a comment"
                    />
                </form>
            </div>
            <div className='flex flex-col gap-6'>
                {review?.detailReview.map((v,index) => (
                    <ReviewCard key={index} {...v} />
                ))}
            </div>

            <Button variant={"default"} className="md:flex-1 min-w-max px-10 md:px-14 py-3 border border-black text-black bg-white rounded-md hover:!bg-black hover:!text-white">
                View More <ChevronDown className="!size-4 md:!size-5" />
            </Button>

            <div className="flex flex-col justify-center w-full">
                <div className="flex-1 gap-8 w-full text-xl md:text-2xl font-medium leading-none text-black whitespace-nowrap">
                    Related Products
                </div>
                <div className="flex flex-wrap justify-center md:flex-nowrap gap-4 mt-8 mx-auto">
                    {[
                        {
                            "id": "product1",
                            "name": "Apple iPhone 14 Pro Max 128GB Deep Purple",
                            "tags": [
                                "NewArrival",
                                "Bestseller",
                                "50%"
                            ],
                            "brand": "Apple",
                            "price": 900,
                            "imgUrl": "https://res.cloudinary.com/dkeupjars/image/upload/v1734360880/cyber_store_project/Iphone_14_pro_1_vyyak6.png"
                        },
                        {
                            "id": "product2",
                            "name": "AppleBlackmagic Pocket Cinema Camera 6k",
                            "tags": [
                                "NewArrival"
                            ],
                            "brand": "Apple",
                            "price": 2535,
                            "imgUrl": "https://res.cloudinary.com/dkeupjars/image/upload/v1734360879/cyber_store_project/Iphone_14_pro_1_1_turq8w.png"
                        },
                        {
                            "id": "product3",
                            "name": "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
                            "tags": [
                                "NewArrival",
                                "50%"
                            ],
                            "brand": "Apple",
                            "price": 399,
                            "imgUrl": "https://res.cloudinary.com/dkeupjars/image/upload/v1734361174/cyber_store_project/Iphone_14_pro_1_2_wgsyvh.png"
                        },
                        {
                            "id": "product4",
                            "name": "AirPods Max Silver Starlight Aluminium",
                            "tags": [
                                "NewArrival",
                                "FeaturedProducts"
                            ],
                            "brand": "Apple",
                            "price": 549,
                            "imgUrl": "https://res.cloudinary.com/dkeupjars/image/upload/v1734361173/cyber_store_project/Iphone_14_pro_1_3_zmwi9u.png"
                        }
                    ]
                    .map((item) => (
                    <div
                        key={item?.id}
                        className="flex flex-col gap-2 relative items-center bg-[#F6F6F6] rounded-xl px-3 py-6 w-full mx-auto"
                    >
                        <Heart
                        className={cn(
                            "absolute top-2 right-2 text-[#909090C4] cursor-pointer transition-colors duration-300",
                        )}
                        />
                        <Image src={item?.imgUrl} alt={`${item.id}-${item.name}`} width={104} height={104} />
                        <div className="flex-1 flex flex-col gap-4 items-center text-center">
                        <p className="line-clamp-2 font-medium text-base">{item?.name}</p>
                        <p className="font-semibold text-2xl">{item?.price}</p>

                        <div className="bg-primary text-white w-full py-3 rounded-lg">Buy Now</div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};