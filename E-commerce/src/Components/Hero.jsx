import React from 'react'
import handIcon from "../Components/Assets/hand_icon.png"
import arrowIcon from "../Components/Assets/arrow.png"
import heroImage from "../Components/Assets/hero_image.png"


function Hero() {
    return (
        <div id="HeroMain" className='flex mb-10 h-[650px] max-md:pt-0 max-lg:h-[500px] max-md:h-[440px]  max-sm:mt-10 ' >

            {/* Left Part */}
            <div className=' h-full w-[50%] mx-auto  pl-[100px] max-lg:pl-[40px] max-md:w-[100%] max-md:pl-[70px] max-sm:pl-[50px]'>
                <div className='w-[70%]  max-md:w-[80%]' >
                    <h2 className='text-[#090909] text-[26px] uppercase font-semibold'>New Arrival Only</h2>

                    <div className=''>
                        <div className='flex max-md:py-6'>
                            <p className='text-8xl  font-semibold mb-2 max-lg:text-7xl max-md:text-[120px]'>New</p>
                            <span className=' max-md:pt-8 '>  <img className='w-[100px] max-lg:w-[70px] ' src={handIcon} alt="" /> </span>
                        </div>
                        <p className='text-7xl font-semibold mb-1 max-lg:text-6xl'>collections</p>
                        <p className='text-[65px] font-bold mb-1 max-lg:text-6xl'>for everyone</p>
                    </div>

                    <div className='flex items-center justify-center gap-4 cursor-pointer w-[250px] h-[40px] rounded-4xl mt-8 bg-red-600 text-white text-[18px] font-semibold max-lg:w-[220px] max-lg:h-[30px] max-md:h-[40px] '>
                        <div>Latest Collection</div>
                        <img src={arrowIcon} alt="" />
                    </div>
                </div>
            </div>

            {/* Right Part */}
            <div className='w-[50%]  max-md:w-[100%] max-md:hidden  '>
                <img className=' h-full pl-25 max-lg:h-[90%] max-lg:pl-20 ' src={heroImage} alt="" />
            </div>
        </div>
    )
}

export default Hero
