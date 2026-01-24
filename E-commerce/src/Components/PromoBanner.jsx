import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const PromoBanner = () => {

     gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.to("#promoContainer",{
            translateX:0,
            duration:2,
            scrollTrigger:{
                 trigger: "#promoContainer",
                start: "top 80%",
                scroller: "body",
                end: "top 30%",
                scrub: 3,
                // pin:true,
            }
        })
    })


  return (
        <section className="w-full bg-gray-50 pl-12 py-15 mb-20 overflow-hidden ">
        <div id="promoContainer" className="max-w-7xl translate-x-[90%]  mx-auto px-6">
            <div className="relative flex flex-col lg:flex-row items-center justify-between bg-white rounded-2xl shadow-sm overflow-hidden">

            {/* Left Discount Vertical */}
            <div className="hidden lg:flex items-center justify-center px-6">
                <span className="text-cyan-500 text-7xl font-extrabold rotate-[-90deg]">
                30%
                </span>
            </div>

            {/* Text Content */}
            <div className="flex-1 py-12 px-6 lg:px-0">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                First Order <br /> Fashion Sale!
                </h1>

                <p className="mt-4 text-gray-600 max-w-lg">
                Upgrade your wardrobe with our latest collection. Enjoy premium
                fabrics, trendy designs, and unbeatable comfort — perfect for
                every season.
                </p>

                <button className="mt-6 inline-flex items-center justify-center rounded-full bg-linear-to-t to-emerald-400 from-emerald-500 cursor-pointer  px-8 py-3 text-white font-semibold shadow-md hover:bg-emerald-600 transition">
                Shop Now
                </button>
            </div>

            {/* Right Image */}
            <div className="relative w-full lg:w-[420px] h-[280px] lg:h-[320px] flex items-center justify-center">
                <img
                src="https://images.unsplash.com/photo-1521334884684-d80222895322"
                alt="Fashion Collection"
                className="object-cover w-full h-full"
                />
            </div>
            </div>
        </div>
        </section>
  );
};

export default PromoBanner;
