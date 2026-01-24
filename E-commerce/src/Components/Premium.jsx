import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);
function Premium() {

    const cardsRef = useRef([]);

    useGSAP(() => {
        gsap.from("#premiumText", {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#premiumText",
                start: "top 80%",
                scroller: "body",
                end: "top 30%",
                scrub: 3,
            },
        });

        // Product cards animation
        gsap.from(cardsRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            scrollTrigger: {
                trigger: cardsRef.current[0],
                start: "top 80%",
                scroller: "body",
                end: "top 50%",
                scrub: 3,
            },
        });

    }, []);

    return (
        <section className="min-h-screen bg-gray-50">

            {/* HERO */}
            <div id="premiumText" className="text-center px-[10%] pt-20 pb-24 ">
                <h1 className="text-5xl font-bold text-gray-900">
                    Shop <span className='text-cyan-600'>Smart</span> . Live <span className='text-cyan-600'>Better</span> .
                </h1>

                <p className="mt-5 text-lg text-gray-500">
                    Discover premium products at unbeatable prices.
                </p>

                <button className="mt-8 px-7 py-3 rounded-xl bg-gray-900 text-white text-base hover:scale-105 transition-transform">
                    Shop Now
                </button>
            </div>

            {/* PRODUCTS */}
            <div className="px-[8%] pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {["https://plus.unsplash.com/premium_photo-1723568617048-8ba7f42e5fec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByZW1pdW0lMjBjbG90aHMlMjBtZW58ZW58MHx8MHx8fDA%3D",
                    "https://images.unsplash.com/photo-1718351041906-d1086f502f8a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1743446770472-784bdbbcdf80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByZW1pdW0lMjBjbG90aHMlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
                    "https://media.istockphoto.com/id/471635727/photo/fashion-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=NUO_8TfdDfnQDXkSlZbCb7Asuhzg0aQy80WLFatTWdk="].map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className=" p-6 rounded-2xl shadow-lg text-center "

                        >
                            <div
                                className="h-46 bg-gray-200 bg-cover rounded-xl mb-4"
                                style={{ backgroundImage: `url(${item})` }}
                            />

                            <h3 className="text-lg font-semibold text-gray-900">
                                Product {i + 1}
                            </h3>

                            <p className="mt-2 text-gray-500">
                                ${(i + 1) * 199}
                            </p>
                        </div>
                    ))}
            </div>
        </section>
    );
}


export default Premium
