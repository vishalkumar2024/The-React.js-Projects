import React from 'react'
import exclusiveImage from "../Components/Assets/exclusive_image.png"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Offers() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        gsap.from("#left", {
            x: -30,
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: "#left",
                scroller: "body",
                start: "top 70%",
                end: "top 30%",
                scrub: 3,
            }
        })
        gsap.from("#right", {
            x: 30,
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: "#right",
                scroller: "body",
                start: "top 70%",
                end: "top 30%",
                scrub: 3,
            }
        })

    })

    return (
        <div id="offers" className='flex w-[80%] m-auto px-0  mb-[100px] bg-linear-to-b from-[#b2f5ea] to-[#e1ffea22] max-md:w-[90%]'>
            {/* Left part */}
            <div id="left" className='flex-1 flex flex-col   justify-center pl-20 max-md:pl-7'>
                <h1 className='text-[#a26969] text-[80px] capitalize font-semibold max-xl:text-[65px] max-lg:text-[50px] max-md:text-[40px]  '>Exclusive</h1>
                <h1 className='text-[#171717] text-[80px] capitalize font-semibold max-xl:text-[65px] max-lg:text-[50px] max-md:text-[40px]  '>Offer for you</h1>
                <p className='text-[#171717] text-[22px] uppercase font-semibold max-xl:text-[18px] max-lg:text-[16px] '>only on best sellers products</p>
                <button className='w-[282px] h-[70] rounded-2xl py-1 bg-red-500 border-none text-white text-[22px] mt-7 cursor-pointer font-semibold max-xl:text-[20px] max-xl:w-[250px] max-lg:w-[200px] max-lg:text-[18px] '>check now</button>
            </div>

            {/* Right Part */}
            <div className=' flex justify-center items-center   '>
                <img id="right" src={exclusiveImage} className='max-xl:h-[450px] max-lg:h-[400px] max-md:h-[300px] ' alt="" />
            </div>
        </div>
    )
}

export default Offers
