import React from 'react'
import './Button.css'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';


function Main() {
    const container = useRef(null);
    const title = useRef(null);
    const subtitle = useRef(null);
    const cta = useRef(null);
    const cards = useRef([]);


    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(container.current, {
            opacity: 0,
            duration: 1,
        })
            .from(title.current, {
                y: 80,
                opacity: 0,
                duration: 1,
            })
            .from(subtitle.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
            }, "-=0.6")
            .from(cta.current, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
            }, "-=0.4")
            .from(cards.current, {
                y: 120,
                opacity: 0,
                scale: 0.8,
                stagger: 0.15,
                duration: 1,
            }, "-=0.8");


        cards.current.forEach((card, i) => {
            gsap.to(card, {
                x: i % 2 === 0 ? -15 : 15,
                y: i % 2 === 0 ? 0 : 5,
                duration: 3 + i,
                repeat: -1,
                yoyo: true,
                // ease: "sine.inOut",
            });
        });

    }, []);

    return (
        <section ref={container} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-emerald-200">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-200/40 rounded-full blur-[120px]" />

            <div className="relative z-10  grid grid-cols-1 lg:grid-cols-2 items-center px-[8%] pt-32 pb-24 gap-20 max-sm:pt-20">

                {/* TEXT */}
                <div className=''>
                    <h1 ref={title} className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight max-sm:text-5xl">
                        Redefining <br />
                        <span className="text-emerald-600">Everyday Fashion</span>
                    </h1>

                    <p ref={subtitle} className="mt-6 text-xl text-gray-600 max-w-xl">
                        Premium styles crafted for Men, Women & Kids — minimal, modern,
                        and made to stand out.
                    </p>
                    <Link to='/allproducts'>
                        <button
                            ref={cta}
                            id="MainBtn"
                            className="mt-10 px-8 py-3 rounded-2xl bg-emerald-500  text-white text-[18px] font-medium shadow-2xl "
                        >
                            Explore Collection
                        </button>
                    </Link>
                </div>

                {/* VISUAL SYSTEM */}
                <div className="relative h-[400px]  flex items-centr justify-center max-sm:h-[250px] ">
                    {[
                        "https://images.unsplash.com/photo-1521334884684-d80222895322",
                        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
                        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
                    ].map((img, i) => (
                        <img
                            key={i}
                            ref={(el) => (cards.current[i] = el)}
                            src={img}
                            alt="Product"
                            className={`absolute w-64 rounded-3xl shadow-2xl max-sm:w-[200px]
                ${i === 0 && "rotate-[-8deg] -left-6 z-10"}
                ${i === 1 && "z-20"}
                ${i === 2 && "rotate-[10deg] -right-6 z-10"}
              `}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Main
