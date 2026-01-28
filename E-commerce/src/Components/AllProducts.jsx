import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import all_product from '../Components/Assets/all_product'
import { ShopContext } from "../Context/ShopContext";
import Item from "./Item";


gsap.registerPlugin(ScrollTrigger);

const AllProducts = () => {
    const { allProducts } = useContext(ShopContext);
    const sectionRef = useRef(null);

    //   useEffect(() => {
    //     const ctx = gsap.context(() => {
    //       gsap.from(".product-card", {
    //         opacity: 0,
    //         y: 50,
    //         scale: 0.95,
    //         duration: 0.9,
    //         stagger: 0.12,
    //         ease: "power3.out",
    //         scrollTrigger: {
    //           trigger: sectionRef.current,
    //           start: "top 80%",
    //         },
    //       });
    //     }, sectionRef);

    //     return () => ctx.revert();
    //   }, []);

    return (
        <section
            //   ref={sectionRef}
            className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-20 px-6"
        >
            {/* Decorative Blur */}
            <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-emerald-300/30 blur-[140px]" />
            <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-emerald-400/20 blur-[140px]" />

            {/* Heading */}
            <div className="relative text-center mb-16 mt-5">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan bg-clip-text text-transparent ">
                    Explore All Products
                </h1>
            </div>

            {/* Product Grid */}
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {allProducts.map((item) => (
                    <div key={item.id} className="group">
                        <div
                            className=" flex justify-center rounded-3xl overflow-hidden  shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] pt-4 group-hover:bg-gradient-to-t  group-hover:from-black/7 group-hover:to-transparent max-xl:px-0 ">
                            <Item {...item} />

                            {/* glow */}
                            <div className="flex inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/10 to-transparent" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllProducts;
