import React, { useContext, useRef } from "react";
import { ShopContext } from "../Context/ShopContext";
import Navbar from "../Components/Navbar";
import Item from "../Components/Item";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";


function ShopCategory({ banner, category }) {
  const { allProducts } = useContext(ShopContext);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const filteredProducts = allProducts.filter(
    (item) => item.category === category
  );

  useGSAP(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power4.out",
    });

    gsap.from(cardsRef.current, {
      y: 80,
      opacity: 0,
      scale: 0.9,
      stagger: 0.08,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
      },
    });
  }, []);

  return (
    <>
      <Navbar />

      <section className="pt-24 bg-gradient-to-b from-[#d9fff8] via-white to-white overflow-hidden">
        <div
          ref={heroRef}
          className="relative mx-auto w-[92%] max-w-7xl h-[360px] md:h-[420px] rounded-[32px] overflow-hidden"
        >
          <img
            src={banner}
            className="absolute inset-0 w-full h-full object-cover scale-105"
            alt=""
          />

          {/* gradient + blur layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />

          {/* Hero content */}
          <div
            ref={titleRef}
            className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20"
          >
            <span className="text-sm tracking-[0.3em] text-white/70 mb-3">
              NEW SEASON
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight uppercase">
              {category}'s <br /> COLLECTION
            </h1>

            <p className="mt-4 max-w-md text-white/80">
              Elevated essentials crafted for modern lifestyles.
            </p>

            <button className="mt-6 w-fit px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
              Explore Now
            </button>
          </div>
        </div>

        <div className=" flex w-full m-10 pl-3  gap-6 ">
          <Link to="/men">
            <div className="py-2 px-3 bg-gray-200 text-cyan-700 cursor-pointer rounded">Men</div>
             </Link>
            <Link to='/women'>
            <div className="py-2 px-3 bg-gray-200 text-cyan-700 cursor-pointer rounded">Women</div>
            </Link>
            <Link to='/kid'>
            <div className="py-2 px-3 bg-gray-200 text-cyan-700 cursor-pointer rounded">Kids</div>
            </Link>
        </div>

        {/* ================= STATS BAR ================= */}

        <div id="stats" className="mt-14 mx-auto w-[92%] max-w-7xl grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            ["Premium", "Materials"],
            ["36+", "Products"],
            ["4.9★", "Ratings"],
            ["Fast", "Delivery"],
          ].map(([title, sub], i) => (
            <div
              key={i}
              id="stats-container"
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 text-center shadow-md max-sm:p-4"
            >
              <h3 className="text-2xl font-bold max-sm:text-[24px] ">{title}</h3>
              <p className="text-gray-500 text-sm mt-1 ">{sub}</p>
            </div>
          ))}
        </div>

        {/* ================= PRODUCTS ================= */}
        <div id="ShopCategoryItem" className="mt-16 mx-auto w-[92%] max-w-7xl   grid grid-cols-4 gap-6 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4">
          {filteredProducts.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group"
            >
              <div
                className=" flex justify-center rounded-3xl overflow-hidden  shadow-xl transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] pt-4 group-hover:bg-gradient-to-t  group-hover:from-black/7 group-hover:to-transparent max-xl:px-0 "
              >
                <Item {...item} />

                {/* glow */}
                <div className="flex inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <div className="flex justify-center mt-24">
          <button className="px-14 py-4 rounded-full text-lg font-semibold bg-black text-white hover:scale-110 transition-transform max-sm:px-8 max-sm:py-3 max-sm:text-sm">
            Load More
          </button>
        </div>

        <div className="h-24" />
      </section>
    </>
  );
}

export default ShopCategory;
