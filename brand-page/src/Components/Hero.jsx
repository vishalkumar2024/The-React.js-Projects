import React, { useState } from 'react'
import shoeImage from "../assets/istockphoto-171224469-612x612-removebg-preview.png"

export default function Hero(props) {
  return (
    <>
      {/* Left part  */}
      <div className=" h-full  w-1/2 pt-12 pb-9 px-33 
       max-xl:w-full max-md:px-15">
        <h1 className="text-6xl font-extrabold uppercase max-xl:text-7xl">Your Feet deserve the best</h1>
        <p className=" mt-8 uppercase max-xl:text-2xl max-xl:leading-10"> we believe that every step should be stylish, comfortable, and built to last. Our shoes are crafted with premium materials, cutting-edge design, and the perfect balance of fashion and function. </p>
        <div>
          <button className='bg-red-700 text-white rounded py-[6px] px-4 mt-5 mr-5 max-xl:py-[10px] max-xl:px-5 max-xl:mt-7'>Shop Now</button>
          <button className='bg-transparent border-2 border-gray-600 rounded py-[4px] px-4 max-xl:py-[10px] max-xl:px-5'>Category</button>
          <button className='bg-gray-400 m-5 py-[6px] px-4 rounded'  onClick={props.changeTheme} >Change Theme</button>
        </div>
        <p className='mt-5 text-[14px] font-bold max-xl:text-[20px]'>Also Available on</p>
        <div className='flex gap-4 mt-1 max-xl:mt-4 max-xl:mb-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0L9pU1IjqhK0u8GC0kQBXDB2sj_nd4UDVQ&s" className="size-10" alt="Amazon logo" />
          <img src="https://www.liblogo.com/img-logo/fl326f71f-flipkart-logo-flipkart-logos.png" className="size-10" alt="Flipcart Logo" />
        </div>

      </div>

      {/* Right part */}
      <div className=" h-full w-1/2 mt-8 max-xl:mt-4 max-xl:mx-60 max-md:mx-20">
        <img src={shoeImage} className='h-full' alt="Shoe image" />
      </div>

    </>
  )
}
