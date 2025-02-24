import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        data: {
            "id": "product99",
            "name": "Apple iPhone 14 Pro Max",
            "tags": [
                "NewArrival",
                "Bestseller",
                "50%"
            ],
            "brand": "Apple",
            "price": 1499,
            "colors": [
                {
                    "name": "Black",
                    "hexCode": "#000000"
                },
                {
                    "name": "Purple",
                    "hexCode": "#800080"
                },
                {
                    "name": "Gold",
                    "hexCode": "#FFD700"
                },
                {
                    "name": "Silver",
                    "hexCode": "#C0C0C0"
                }
            ],
            "imageUrls": [
                "https://res.cloudinary.com/dxjxqt01d/image/upload/v1736068100/image_57_has86r.png",
                "https://res.cloudinary.com/dxjxqt01d/image/upload/v1736062831/image_61_y5kq8u.png",
                "https://res.cloudinary.com/dxjxqt01d/image/upload/v1736062830/image_62_ufk0j0.png",
                "https://res.cloudinary.com/dxjxqt01d/image/upload/v1736062831/image_63_t0tvde.png"
            ],
            "description": "\u003Cp\u003E\u003Cstrong\u003EDetails\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EJust as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.\u003C/p\u003E\u003Cp\u003E\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EScreen\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EScreen diagonal6.7' The screen resolution2796x1290The screen refresh rate120 HzThe pixel density460 ppiScreen typeOLEDAdditionallyDynamic IslandAlways-On displayHDR displayTrue ToneWide color (P3)\u003C/p\u003E\u003Cp\u003E\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ECPU\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003ECPUA16 BionicNumber of cores6\u003C/p\u003E",
            "availability": {
                "addToCart": true,
                "addToWishlist": true
            },
            "deliveryInfo": {
                "inStock": "Today",
                "guaranteed": "1 year",
                "freeDelivery": "1-2 days"
            },
            "specifications": [
                {
                    "icon": "https://res.cloudinary.com/dkeupjars/image/upload/v1734363308/cyber_store_project/smartphone-rotate-2-svgrepo-com_2_1_ikcqgy.svg",
                    "name": "Screen size",
                    "value": "6.7'"
                },
                {
                    "icon": "https://res.cloudinary.com/dkeupjars/image/upload/v1734363308/cyber_store_project/smartphone-rotate-2-svgrepo-com_2_1_ikcqgy.svg",
                    "name": "CPU",
                    "value": "Apple A16 Bionic"
                },
                {
                    "icon": "https://res.cloudinary.com/dkeupjars/image/upload/v1734363321/cyber_store_project/smartphone-rotate-2-svgrepo-com_2_ljtxls.svg",
                    "name": "Number of Cores",
                    "value": "6"
                },
                {
                    "icon": "https://res.cloudinary.com/dkeupjars/image/upload/v1734363319/cyber_store_project/smartphone-rotate-2-svgrepo-com_2_2_cka9eq.svg",
                    "name": "Main camera",
                    "value": "48-12-12 MP"
                },
                {
                    "icon": "https://res.cloudinary.com/dkeupjars/image/upload/v1734363320/cyber_store_project/smartphone-rotate-2-svgrepo-com_2_3_woxnf4.svg",
                    "name": "Front-camera",
                    "value": "12 MP"
                },
                {
                    "icon": "https://res.cloudinary.com/dkeupjars/image/upload/v1734363320/cyber_store_project/smartphone-rotate-2-svgrepo-com_2_4_blf3kp.svg",
                    "name": "Battery capacity",
                    "value": "4323 mAh"
                }
            ],
            "storageOptions": [
                {
                    "capacity": "128GB",
                    "isSelected": false
                },
                {
                    "capacity": "256GB",
                    "isSelected": true
                },
                {
                    "capacity": "512GB",
                    "isSelected": false
                },
                {
                    "capacity": "1TB",
                    "isSelected": false
                }
            ],
            "discountedPrice": 1399,
            "shortDescription": "Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras."
        }
    }, { status: 200 })
}