import React, { useRef } from 'react'
import dataProducts from "../Components/Assets/related"
import Item from '../Components/Item'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


function RelatedProducts(props) {
    const { product } = props

    gsap.registerPlugin(ScrollTrigger);

    const cardsRef = useRef([]);


    useGSAP(() => {
        gsap.from("#relatedH1", {
          y: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#relatedH1",
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
        <div className='flex  flex-col items-center gap-3 pb-[50px] mt-12 mb-5 '>
            <h1 id="relatedH1" className='text-[#171717] text-[50px] font-stretch-semi-condensed max-sm:text-[32px] max-lg:text-[30px]'>Related Products</h1>
            <hr className='w-[200px] h-[6px] rounded bg-[#252525]  max-lg:w-[130px] max-md:w-[100px] max-md:h-[3px]  ' />
            <div id="relatedProduct-item" className='relatedProductItem flex gap-7 mt-12 max-lg:gap-3 max-md:grid max-md:grid-cols-2'>
                {dataProducts.map((item, i) => {
                    if (product.category === item.category) {
                        return <div className='' ref={(el) => (cardsRef.current[i] = el)}> <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        </div>
                    }
                })}
            </div>
        </div>
    )
}

export default RelatedProducts
