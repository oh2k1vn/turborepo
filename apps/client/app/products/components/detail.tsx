
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { Specification } from '@/types/data';
import { Button } from '@ui/components/ui/button';

interface DetailProps {
    specifications: Specification[]
}

const Detail: React.FC<DetailProps> = ({specifications}) => {
    return (
        <div className="bg-[#FAFAFA] flex flex-col items-center justify-center gap-10 py-16 md:py-24 px-5 lg:px-40 pt-10">
            <div className="w-full flex flex-col items-start gap-7">
                <p className="text-xl md:text-2xl font-medium text-black">Details</p>
                <p className="text-[#9D9D9D] text-lg md:text-xl">Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
            </div>

            <div className="w-full flex flex-col items-start gap-4 mt-5 text-black">
                <p className="text-lg md:text-xl font-medium">Screen</p>
                {specifications?.map((v,index) => {
                    if(v.name === "CPU") return null

                    return (
                        <div key={index} className="text-lg flex justify-between border-b border-[#CDCDCD] w-full py-2">
                            <p>{v.name}</p>
                            <p>{v.value}</p>
                        </div>
                    )
                })}
            </div>

            <div className="w-full flex flex-col items-start gap-4 mt-5 text-black">
                <p className="text-lg md:text-xl font-medium">Screen</p>
                {specifications?.map((v,index) => {
                    if(v.name != "CPU") return null

                    return (
                        <div key={index} className="text-lg flex justify-between border-b border-[#CDCDCD] w-full py-2">
                            <p>{v.name}</p>
                            <p>{v.value}</p>
                        </div>
                    )
                })}
                <div className="text-black text-lg flex justify-between w-full py-2">
                    <p>Number of cores</p>
                    <p>6</p>
                </div>
            </div>

            <Button variant={"default"} className="md:flex-1 min-w-max px-10 md:px-14 py-3 border border-black text-black bg-white rounded-md hover:!bg-black hover:!text-white">
                View More <ChevronDown className="!size-4 md:!size-5" />
            </Button>
        </div>
    );
};

export default Detail;