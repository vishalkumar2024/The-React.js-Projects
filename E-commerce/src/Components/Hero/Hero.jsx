import React from 'react'
import handIcon from "../Assets/hand_icon.png"
import arrowIcon from "../Assets/arrow.png"
import heroImage from "../Assets/hero_image.png"
import './Hero.css'



function Hero() {
    return (
        <div className='flex bg-linear-to-b from-[#f6cbf9] to-[#e1ffea22]' id="HeroMain">

            {/* Left Part */}
            {/* <div className='flex justify-center flex-col   pl-[180px] flex-1  '>
                <h2 className='text-[#090909] text-[26px] font-semibold'>New Arrival Only</h2>
                <div>
                    <div className='flex items-center gap-5'>
                        <p className='text-[#171717] text-[100px] font-semibold'>New</p>
                        <img className='w-[100px]' src={handIcon} />
                    </div>
                    <p className='text-[100px] font-semibold'>collection</p>
                    <p>for everyone</p>
                </div>
                <div className='flex items-center justify-center gap-4 w-[310px] h-[70px] rounded-4xl mt-8 bg-red-500 text-white text-[22px] font-semibold'>
                    <div>Latest Collection</div>
                    <img src={arrowIcon} alt="" />
                </div>
            </div> */}


            {/* Left Part */}
            <div className='h-[100vh] w-1/2 flex items-center justify-center  pl-[100px] '>
                <div className='w-[70%]' >
                    <h2 className='text-[#090909] text-[26px] uppercase font-semibold'>New Arrival Only</h2>

                    <div className=''>
                        <div className='flex '>
                            <p className='text-8xl font-semibold mb-2'>new</p>
                            <span>  <img className='w-[100px] ' src={handIcon} alt="" /> </span>
                        </div>
                        <p className='text-7xl font-semibold mb-1'>collections</p>
                        <p className='text-[65px] font-bold mb-1'>for everyone</p>
                    </div>

                    <div className='flex items-center justify-center gap-4 w-[250px] h-[40px] rounded-4xl mt-8 bg-red-600 text-white text-[18px] font-semibold'>
                        <div>Latest Collection</div>
                        <img src={arrowIcon} alt="" />
                    </div>

                </div>
            </div>

            {/* Right Part */}
            <div className='w-1/2 '>
                <img className='h-[100vh] pl-25' src={heroImage} alt="" />
            </div>
        </div>
    )
}

export default Hero
