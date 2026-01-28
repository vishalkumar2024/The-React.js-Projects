import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // WORD REVEAL
      gsap.from(".word", {
        opacity: 0,
        y: 60,
        rotateX: 90,
        stagger: 0.05,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".headline",
          start: "top 80%",
        },
      });

      // IMAGE PARALLAX
      gsap.to(".about-img", {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });

      // FLOATING CARDS
      gsap.from(".stat-card", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".stats",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitWords = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-2">
        {word}
      </span>
    ));

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-gradient-to-br from-[#ecfff7] via-white to-[#d9fff0] pt-[100px] pb-[100px] "
      >
        {/* BACKGROUND BLUR ORB */}
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-emerald-300/30 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-cyan-600 font-semibold  text-3xl tracking-[0.2em] uppercase mb-6">
              About VASTRA
            </p>

            <h2 className="headline text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight perspective-[1000px]">
              {splitWords("Designing Fashion That Moves With You")}
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl">
              VASTRA blends minimalist aesthetics with premium craftsmanship.
              Every collection is thoughtfully designed to elevate everyday
              fashion into something iconic.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-6">
              <button className="group relative px-10 py-4 rounded-full bg-linear-to-t to-cyan-400 from-cyan-600 text-white font-semibold overflow-hidden max-sm:px-7 max-sm:py-3 max-sm:rounded-2xl">
               <Link to='/allproducts'> <span className="relative z-10 cursor-pointer">Explore Collection</span> </Link>
                <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <button className="px-10 py-4 rounded-full border border-cyan-600 text-cyan-600 font-semibold hover:bg-emerald-600 hover:text-white transition max-sm:px-7 max-sm:py-3 max-sm:rounded-2xl">
                Our Story
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative   flex justify-center">
            <div className="about-img  rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
              <img
                src="https://img.freepik.com/free-photo/shop-clothing-clothes-shop-hanger-modern-shop-boutique_1150-8886.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Fashion"
                className="w-[420px] h-[400px] object-cover"
              />
            </div>

            {/* CARDS */}
            <div className="stats  absolute -bottom-10 -left-10 flex gap-6 max-xl:left-0">
              <div className="stat-card backdrop-blur-xl bg-white/60 border border-white/30 rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-2xl font-bold text-emerald-600">30K+</p>
                <p className="text-sm text-gray-500">Customers</p>
              </div>

              <div className="stat-card backdrop-blur-xl bg-white/60 border border-white/30 rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-2xl font-bold text-emerald-600">10+</p>
                <p className="text-sm text-gray-500">Years of<br />Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
