import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

export default function Hero() {
    function firstBtnStyle() {
        alert("Do you want support chat?");
    }
    function secondBtnStyle() {
        alert("I am making a call.");
    }
    function onsubmit(e){
        e.preventDefault();
        console.log("e")
    }

    return (
        <div className='flex mt-6 max-md:flex-col'>
            {/* Left Div part */}
            <div className='w-1/2 max-md:w-full'>
                <div className='flex items-center justify-between'>
                    <button onClick={firstBtnStyle} className='flex text-[1.05rem] px-[5%] py-[5%] mr-0.5 bg-black text-white uppercase rounded '> <span className='mr-3 mt-[5px] '><MdOutlineMessage /></span>  <p className=' max-lg:text-[0.7rem] max-md:text-[1rem]   max-[430px]:text-6xl'> View support chat
                    </p>
                    </button>

                    <button  onClick={secondBtnStyle} className='flex text-[1.05rem] px-[15%] py-[5%] bg-black text-white uppercase rounded'> <span className='mr-3 mt-[5px]'><IoMdCall /></span>  <p className=' max-lg:text-[0.7rem] max-md:text-[1rem]'> Via call
                    </p>
                    </button>
                </div>

                <button className='flex w-full border-2 border-black mt-10   text-[1.05rem] px-[40%]  text-black uppercase rounded py-[2%] '> <span className='mr-3 mt-[5px]'><IoMdCall /></span>  <p className=' max-lg:text-[0.8rem] max-md:text-[1rem]'> Via email form
                </p>
                </button>

                <form onSubmit={onsubmit} className='mt-4'>
                    <div className='flex flex-col mt-8 relative'>
                        <label htmlFor="Name" className='bg-white px-1 font-semibold absolute left-5 -top-[14px]'>Name</label>
                        <input type="text" className='w-full h-[40px] pl-4 py-3 border border-gray-500 rounded max-md:h-[60px]' />
                    </div>
                    <div className='flex flex-col mt-8 relative'>
                        <label htmlFor="email" className='bg-white px-1 font-semibold absolute left-5 -top-[14px]'>E-mail</label>
                        <input type="email" className='w-full h-[40px] pl-4 py-3 border border-gray-500 rounded max-md:h-[60px]' />
                    </div>
                    <div className='flex flex-col mt-8 relative'>
                        <label htmlFor="text" className='bg-white px-1 font-semibold absolute left-5 -top-[14px] uppercase'>text</label>
                        <textarea name="Text" id="" className='w-full h-[150px] pl-4 py-3 border border-gray-500 rounded'></textarea>
                    </div>
                </form>
                <div className='flex justify-center mt-4'>
                    <button className=' text-[1.05rem] px-10 py-2 bg-black text-white uppercase rounded'>Submit
                    </button>
                </div>
            </div>

            {/* Right div part */}
            <div className='w-1/2 pl-5 max-md:w-full'>
                <img src="https://img.freepik.com/free-vector/service-24-7-concept-illustration_114360-7380.jpg" alt="" />
            </div>
        </div>
    )
}
