import React, { useRef } from 'react'
import dataProduct from "./Assets/data"
import Item from './Item'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Popular() {
    gsap.registerPlugin(ScrollTrigger);

    const cardsRef = useRef([]);


    useGSAP(() => {

        gsap.from(".smallScreen", {
          y: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".smallScreen",
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

    return (
        <div id="popular" className='flex flex-col items-center gap-2  mb-4 mt-4 '>
            <h1 id="small-screen" className='smallScreen uppercase text-[#171717]  mt-7 text-[50px] font-bold max-sm:text-[32px] max-lg:text-[30px] '>popular in women</h1>
            <hr className='w-[200px] h-[6px] rounded bg-[#252525] max-lg:w-[130px] max-md:w-[100px] max-md:h-[3px] ' />
            <div id="popular-item" className=' flex mt-7  gap-8 pb-10 max-xl:gap-5 max-lg:gap-2 max-md:grid max-md:grid-cols-2'>
                {dataProduct.map((item, i) => {
                    return <div className=''  ref={(el) => (cardsRef.current[i] = el)}> <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Popular;
