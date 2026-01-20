import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Item(props) {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        // gsap.from("#itemId", {
        //     x: -20,
        //     opacity: 1,
        //     duration: 1.5,
        //     scrollTrigger: {
        //         trigger: "#itemId",
        //         scroller: "body",
        //         start: "top 70%", 
        //         end: "top 50%",
        //         markers:true,
        //         scrub: 3, 
        //     }
        // })

    })


    return (
        <div id="itemId" className='w-[230px] m-2 shadow-lg pl-[10px]  rounded-2xl transform  hover:scale-105 transition duration-500  max-xl:w-[220px] max-lg:w-[165px] max-md:w-[200px] max-md:h-[300px] max-sm:hover:scale-100 '>
            <Link to={`/product/${props.id}`}>   <img src={props.image} className='  ' onClick={window.scrollTo(0, 0)} alt="" /> </Link>
            <p className='py-2 px-0 text-emerald-800'>{props.name}</p>
            <div className='flex gap-0'>
                <div className='text-[#374151] text-[18px] font-bold  max-sm:text-[15px] '>
                    ${props.new_price}
                </div>
                <div className='text-[#8c8c8c] text-[18px] font-semibold line-through max-sm:text-[15px] '>
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item
