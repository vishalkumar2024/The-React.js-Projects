import React from 'react'
import FooterImg from "../Assets/logo_big.png"
import instagramLogo from "../Assets/instagram_icon.png"
import pinterestLogo from "../Assets/pintester_icon.png"
import whatsAppLogo from "../Assets/whatsapp_icon.png"

function Footer() {
    return (
        <div className='bg-[#fde1ff] flex items-center justify-center flex-col pt-3'>
            <div className='flex items-center gap-5'>
                <img src={FooterImg} alt="" />
                <p className='text-[#383838] text-[46px] font-bold'>SHOPPER</p>
            </div>
            <ul className='flex gap-12 text-[#252525] text-[20px]'>
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Offices</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className='flex gap-5 my-2'>
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

            <div className='flex items-center flex-col gap-7 w-[100%] mb-7 text-[#1a1a1a] text-[20px]'>
                <hr className='w-[80%] border-none border-[10px] h-[3px] bg-[#c7c7c7]' />
                <p>Copyright @ 2025 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
