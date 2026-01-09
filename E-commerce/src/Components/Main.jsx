import React from 'react'
import heroImg from "../Components/Assets/img-hero5.png"
function Main() {
    return (
        <div className='w-full   bg-contain pt-[70px] max-lg:pt-[60px] '>
            <div className=' w-full bg-center'>
                <img src={heroImg} alt="" className='  ' />
            </div>
        </div>
    )
}

export default Main
