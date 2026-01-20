import React from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Demo() {

    const heroRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        gsap.from(heroRef.current.children, {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
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
            },
        });
    }, []);

    return (
        <section className="min-h-screen bg-gray-50">

            {/* HERO */}
            <div ref={heroRef} className="text-center px-[10%] pt-20 pb-24 ">
                <h1 className="text-5xl font-bold text-gray-900">
                    Shop Smart. Live Better.
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
                {[1, 2, 3, 4].map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardsRef.current[i] = el)}
                        className="bg-white p-6 rounded-2xl shadow-lg text-center"
                    >
                        <div className="h-36 bg-gray-200 rounded-xl mb-4" />

                        <h3 className="text-lg font-semibold text-gray-900">
                            Product {i + 1}
                        </h3>

                        <p className="mt-2 text-gray-500">
                            ₹{(i + 1) * 999}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Demo
