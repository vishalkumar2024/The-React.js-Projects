import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Fashion Blogger",
        image: "https://i.pravatar.cc/150?u=sarah",
        rating: 5,
        text: "I am absolutely in love with the summer collection at VASTRA! The fabric quality is premium and the fit is true to size. It's hard to find trendy clothes  ",
    },
    {
        id: 2,
        name: "Rajesh Mehta",
        role: "Student",
        image: "https://media-ccu2-2.cdn.whatsapp.net/v/t61.24694-24/472735847_944962443885434_514145004336530345_n.jpg?ccb=11-4&oh=01_Q5Aa3gGMiERqfWLgKasnqojZWFu7LNFRtDRDaHEaNNNCM7d5jg&oe=6986E54F&_nc_sid=5e03e0&_nc_cat=104",
        rating: 5,
        text: "VASTRA is my go-to for formal wear. Their shirts have a great finish and the delivery is always on time. The packaging was eco-friendly too, which is a huge plus for me!",
    },
    {
        id: 3,
        name: "John Doe",
        role: "Stylist",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww",
        rating: 5,
        text: "The variety of styles on VASTRA is impressive. Whether I'm looking for street wear or elegant evening dresses, I always find something unique for my clients. Highly recommended!",
    },
    {
        id: 4,
        name: "Kriti Kapoor",
        role: "Daily Shopper",
        image: "https://images.unsplash.com/photo-1622049605334-72e1e4432346?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4,
        text: "Fastest shipping I've experienced for a clothing brand. The denim jacket I ordered from VASTRA fits perfectly. The exchange process for a different size was also very smooth.",
    },
];

const TestimonialSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
            <h2 className="text-4xl font-bold text-gray-800">
                What Our <span className="text-cyan-500">Customers</span> Say
            </h2>


            {/* Custom Navigation Buttons */}
            <div className="flex items-center justify-end mb-8">
                <div className="flex gap-2 mt-4">
                    <button className="prev-btn p-2 cursor-pointer bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-300 transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="next-btn p-2 cursor-pointer bg-gray-100 rounded-lg border border-gray-200 hover:bg-gray-300 transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >

                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <div className="bg-gray-100 p-8 h-[300px] rounded-3xl border border-gray-100   flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-16 h-16 rounded-full border-2 border-orange-400 p-0.5 object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">
                                        {review.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm">{review.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#facc15" color="#facc15" />
                                ))}
                                
                            </div>

                            <p className="text-gray-600 leading-relaxed italic">
                                "{review.text}"
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSection;
