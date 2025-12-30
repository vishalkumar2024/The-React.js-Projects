import React from 'react'
import FooterImg from "../Components/Assets/logo_big.png"
import instagramLogo from "../Components/Assets/instagram_icon.png"
import pinterestLogo from "../Components/Assets/pintester_icon.png"
import whatsAppLogo from "../Components/Assets/whatsapp_icon.png"

function Footer() {
    return (
        <div id="footer" className='bg-[#befcf2] flex items-center justify-center flex-col pt-3'>

            <div className='flex items-center gap-5 py-5'>
                <img src={FooterImg} alt="" id="footer-logo" className='max-sm:h-[60px] ' />
                <p id="footer-logo-p" className='text-[#383838] text-[46px] font-bold max-sm:text-[40px]'>SHOPPER</p>
            </div>

            <ul id='footer-ul' className='flex gap-12 text-[#252525] text-[20px] max-md:gap-10  max-sm:gap-5 max-sm:text-[18px] '>
                <li id="footer-li" className='cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>Company</li>
                <li id="footer-li" className='cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>Products</li>
                <li id="footer-li" className='cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>Offices</li>
                <li id="footer-li" className='cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>About</li>
                <li id="footer-li" className='cursor-pointer hover:bg-blue-300 px-3 py-[6px] rounded  '>Contact</li>
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
                <p >Copyright @ 2025 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
