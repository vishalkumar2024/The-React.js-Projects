import React from 'react'
import exclusiveImage from "../Assets/exclusive_image.png"


function Offers() {
    return (
        <div className='flex w-[75%] m-auto px-0  mb-[100px] bg-linear-to-b from-[#fde1ff] to-[#e1ffea22]'>
            {/* Left part */}
            <div className='flex-1 flex flex-col   justify-center pl-20'>
                <h1 className='text-[#171717] text-[80px] capitalize font-semibold'>Exclusive</h1>
                <h1  className='text-[#171717] text-[80px] capitalize font-semibold'>Offer for you</h1>
                <p  className='text-[#171717] text-[22px] uppercase font-semibold'>only on best sellers products</p>
                <button className='w-[282px] h-[70] rounded-2xl py-0.5 bg-red-500 border-none text-white text-[22px] mt-7 cursor-pointer font-semibold'>check now</button>
            </div>

            {/* Right Part */}
            <div className=' flex justify-center items-center   '>
                <img src={exclusiveImage} className='' alt="" />
            </div>
        </div>
    )
}

export default Offers
