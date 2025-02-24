import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        data: {
            "totalRating": {
                "rating": 4.8,
                "totalReviews": 125,
                "ratings": [
                  { "label": "Excellent", "value": 100, "width": 100 },
                  { "label": "Good", "value": 11, "width": 50 },
                  { "label": "Average", "value": 3, "width": 30 },
                  { "label": "Below Average", "value": 8, "width": 40 },
                  { "label": "Poor", "value": 1, "width": 20 }
                ]
            },
            "detailReview": [
                {
                  "name": "Grace Carey",
                  "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EQWye4av-IwQsIKd30d06GpiSgpmLwDYtw&s",
                  "date": "24 January, 2023",
                  "reviewText": "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!",
                  "starRating": 5,
                  "imageFeedBack": [
                    "https://news.khangz.com/wp-content/uploads/2022/09/tren-tay-iPhone-14-pro-max-7.jpg",
                  ]
                },
                {
                  "name": "Ronald Richards",
                  "avatar": "https://res.cloudinary.com/dxjxqt01d/image/upload/v1718633480/Ellipse_1042_kyzvos.png",
                  "date": "24 January, 2023",
                  "reviewText": "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.",
                  "starRating": 4.5,
                  "imageFeedBack": [
                    "https://news.khangz.com/wp-content/uploads/2022/09/tren-tay-iPhone-14-pro-max-11.jpg",
                  ],
                },
                {
                  "name": "Darcy King",
                  "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJu_GSyfkmYXLGFvwqMKoVkjvHaqhg5dynA&s",
                  "date": "24 January, 2023",
                  "reviewText": "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update; otherwise, love this phone! Came in great condition.",
                  "imageFeedBack": [
                    "https://forums.macrumors.com/attachments/305f5a17-9fe4-4c7c-81f1-8d7e800224fc-jpeg.2064998/",
                    "https://forums.macrumors.com/attachments/a6ac039f-bdc0-4b1a-a8d9-381da463ce8e-jpeg.2064994/"
                  ],
                  "starRating": 3
                }
            ]
            
        }
    }, { status: 200 })
}