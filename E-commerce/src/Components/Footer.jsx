import React from 'react'
import FooterImg  from "../Components/Assets/logoshoping.png"

import instagramLogo from "../Components/Assets/instagram_icon.png"
import pinterestLogo from "../Components/Assets/pintester_icon.png"
import whatsAppLogo from "../Components/Assets/whatsapp_icon.png"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Footer() {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const timeLine = gsap.timeline();

        timeLine.from("#footerLogo", {
            y: -40,
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: "#footerLogo",
                scroller: "body",
                start: "top 90%",
                end: "top 70%",
                scrub: 3,
            }
        })

        timeLine.from(".footerLi", {
            y: -20,
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: ".footerLi",
                scroller: "body",
                start: "top 80%",
                end: "top 60%",
                scrub: 3,
            }
        })

        timeLine.from("#footerPara", {
            y: -20,
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: "#footerPara",
                scroller: "body",
                start: "top 95%",
                end: "top 90%",
                scrub: 3,
            }
        })

    })
    return (
        <div id="footer" className='bg-[#befcf2] flex items-center justify-center flex-col pt-3'>

            <div id="footerLogo" className='flex items-center gap-5 py-5'>
                <img src={FooterImg} alt="" id="footer-logo" className='size-28   ' />
                <p id="footer-logo-p" className='text-[#383838] text-[46px] font-bold max-sm:text-[40px]'>VASTRA</p>
            </div>

            <ul id='footer-ul' className=' footerUl flex gap-11 text-[#252525] text-[20px] max-md:gap-10  max-sm:gap-5 max-sm:text-[18px] '>
                <li id="footer-li" className='footerLi cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>Company</li>
                <li id="footer-li" className='footerLi cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>Products</li>
                <li id="footer-li" className='footerLi cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>Offices</li>
                <li id="footer-li" className='footerLi cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>About</li>
                <li id="footer-li" className='footerLi cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>Contact</li>
            </ul>

            <div className='flex gap-5 my-3'>
                <div className='p-2 pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                    <img src={instagramLogo} alt="" />
                </div>
                <div className='p-2 pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                    <img src={pinterestLogo} alt="" />
                </div>
                <div className='p-2 pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                    <img src={whatsAppLogo} alt="" />
                </div>
            </div>

            <div id="footer-copyright" className='flex items-center flex-col gap-7 w-[100%] mb-7 text-[#1a1a1a] text-[20px] max-sm:text-[18px] '>
                <hr className='w-[80%] border-none border-[10px] h-[3px] bg-[#c7c7c7]' />
                <p id="footerPara" >Copyright @ 2025 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
