import React, { useRef } from 'react'
import newCollections from "../Components/Assets/new_collections"
import Item from '../Components/Item'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


function NewCollections() {
    gsap.registerPlugin(ScrollTrigger);

    const cardsRef = useRef([]);


    useGSAP(() => {

        gsap.from(".newCotionsH1", {
            y: -30,
            opacity: 0.5,
            duration: 2,
            scrollTrigger: {
                trigger: ".newCotionsH1",
                scroller: "body",
                start: "top 90%",
                end: "top 70%",
                scrub: 3,
            }
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
        <div id="newCollections" className='flex flex-col items-center gap-2 pb-16 '>
            <div className='text-center  flex items-center flex-col'>
                <h1 id="small-screen" className='newCotionsH1 llec uppercase text-[#171717] text-[50px] font-bold  max-sm:text-[32px] max-lg:text-[30px] '>new <span className='text-cyan-600'>collections</span></h1>
                <hr className='w-[200px] h-[6px] rounded bg-[#252525] max-lg:w-[140px] max-md:w-[110px] max-md:h-[4px] ' />
            </div>
            <div id="newCollection-item" className='newCollectionItem grid grid-cols-4 mt-7 gap-5 max-lg:gap-1 max-md:grid-cols-2 max-sm:gap-3'>
                {newCollections.map((item, i) => {
                    return <div className=''  ref={(el) => (cardsRef.current[i] = el)}>
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default NewCollections
