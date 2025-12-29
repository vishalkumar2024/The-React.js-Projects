import React from 'react'

function NewsLetter() {
    return (
        <div className='w-[80%] h-[60vh] bg-linear-to-b from-[#fde1ff] to-[#e1ffea22] flex justify-center
         items-center flex-col gap-7 m-auto   px-[140px] mb-[150px] '>
            <h1 className='text-[#454545] capitalize text-[50px] font-semibold'>Get exclusive offers on your email</h1>
            <p className='text-[#454545] text-[20px] font-mono '>Subscribe to our newsletter and stay updated</p>
            <div className='flex items-center justify-between w-[730px] h-[70px] text-white rounded-4xl border border-[#b9b2b2]'>
                <input type="text" className='w-[500px] ml-7 border-none outline-none text-[#616161] text-5' placeholder='Enter your email' />
                <button className='w-[210px] h-[70px] rounded-4xl bg-black text-white text-4 cursor-pointer'>Subscribe</button>
            </div>
            
        </div>
    )
}

export default NewsLetter
