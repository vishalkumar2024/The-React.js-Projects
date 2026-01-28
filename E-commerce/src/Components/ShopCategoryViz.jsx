import React, { useRef } from "react";
import './ShopCategoryViz.css'
import { IoWomanSharp } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { FaChild } from "react-icons/fa6";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

useRef
function ShopCategoryViz() {

    gsap.registerPlugin(ScrollTrigger);

    const cardsRef = useRef([]);


    useGSAP(() => {

        gsap.from("#smallScreen", {
            y: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#smallScreen",
                start: "top 80%",
                scroller: "body",
                end: "top 30%",
                scrub: 3,
            },
        })

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
    })

    const data = [
        {
            text: "All",
            path: "",
            icon: <GiClothes />,
        },
        {
            text: "Men",
            path: "men",
            icon: <IoIosMan />,
        },
        {
            text: "Women",
            path: "women",
            icon: <IoWomanSharp />,
        },
        {
            text: "Kids",
            path: "kid",
            icon: <FaChild />,
        },
    ]

    return (
        <div id="ShopCategoryViz" className="py-20 w-full  mb-20 flex flex-col items-center justify-center ">

            <h1 id="smallScreen" className="uppercase text-[#171717] mb-4 text-5xl font-bold  max-sm:text-[32px] max-lg:text-[30px] ">
                Shop by <span className="text-cyan-600">Category</span>
            </h1>
            <hr id="ShopCategoryVizHr" className="w-[200px] h-[6px] mb-15 rounded bg-[#252525] max-lg:w-[140px] max-md:w-[110px] max-md:h-[4px] " />

            <div id="ShopCategoryVizId" className=" w-[50%]   flex justify-center gap-20 max-sm:gap-10 ">

                {
                    data.map((item, i) => {
                        return <div id="ShopCategoryVizItem" className='' ref={(el) => (cardsRef.current[i] = el)}>
                            <Link to={`/${item.path}`}>
                                <div id="innerDiv" className="h-[100px]  cursor-pointer">
                                    <div id="innerDivIcon" className="  size-18 border-2 px-[9px] py-2 border-cyan-500 rounded-full ">
                                        <span id="icon" className="text-[48px]   h-12 w-12 text-cyan-500">{item.icon}</span>
                                    </div>
                                    <h3 id="innerBtn" className="text-center bg-gray-300 rounded-[6px] py-1.5 px-3 mt-5 font-semibold    "> {item.text} </h3>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default ShopCategoryViz;
