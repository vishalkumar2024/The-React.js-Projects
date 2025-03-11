import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

export default function Hero() {
    return (
        <div className='flex mt-6 '>
            {/* Left Div part */}
            <div className='w-1/2'>
                <div className='flex h-7 justify-between'>
                    <button className='flex text-[1.05rem] px-7 bg-black text-white uppercase rounded py-3 pb-9'> <span className='mr-3 mt-[5px]'><MdOutlineMessage /></span>  <p className=''> View support chat
                    </p>
                    </button>

                    <button className='flex text-[1.05rem] px-14 bg-black text-white uppercase rounded py-3 pb-9'> <span className='mr-3 mt-[5px]'><IoMdCall /></span>  <p className=''> Via call
                    </p>
                    </button>
                </div>

                <button className='flex w-full border-2 border-black mt-10   text-[1.05rem] px-45  text-black uppercase rounded py-3 '> <span className='mr-3 mt-[5px]'><IoMdCall /></span>  <p className=''> Via email form
                </p>
                </button>
                <form className='mt-4'>
                    <div className='flex flex-col mt-8 relative'>
                        <label htmlFor="Name" className='bg-white px-1 font-semibold absolute left-5 -top-[14px]'>Name</label>
                        <input type="text" className='w-full h-[40px] pl-4 py-3 border border-gray-500 rounded' />
                    </div>
                    <div className='flex flex-col mt-8 relative'>
                        <label htmlFor="email" className='bg-white px-1 font-semibold absolute left-5 -top-[14px]'>E-mail</label>
                        <input type="email" className='w-full h-[40px] pl-4 py-3 border border-gray-500 rounded' />
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
            <div className='w-1/2 pl-5'>
                <img src="https://img.freepik.com/free-vector/service-24-7-concept-illustration_114360-7380.jpg" alt="" />
            </div>
        </div>
    )
}
