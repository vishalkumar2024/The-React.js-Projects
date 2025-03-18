import React, { useState } from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';

export default function Hero() {
    const FirstBtn = () => toast('Do you want support chat?');
    const SecondBtn = () => toast('I am making a call.');

    // Need some emprovisation in future so that we can do two way binding in multiple form //
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");

    function HandlerName(e) {
        setName(e.target.value);
    }
    function HandlerEmail(e) {
        setEmail(e.target.value);
    }
    function HandlerTextarea(e) {
        setTextarea(e.target.value);
    }


    function submitHandler(e) {
        e.preventDefault();
    }

    return (

        <div className='flex mt-6 max-md:flex-col'>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            // transition={Bounce}
            />
            {/* Left Div part */}
            <div className='w-1/2 max-md:w-full'>
                <div className='flex items-center justify-between'>
                    <button onClick={FirstBtn} className='flex text-[1.05rem] px-[5%] py-[5%] mr-0.5 bg-black text-white uppercase rounded '> <span className='mr-3 mt-[5px] '><MdOutlineMessage /></span>  <p className=' max-lg:text-[0.7rem] max-md:text-[1rem]   max-[430px]:text-6xl'> View support chat
                    </p>
                    </button>

                    <button onClick={SecondBtn} className='flex text-[1.05rem] px-[15%] py-[5%] bg-black text-white uppercase rounded'> <span className='mr-3 mt-[5px]'><IoMdCall /></span>  <p className=' max-lg:text-[0.7rem] max-md:text-[1rem]'> Via call
                    </p>
                    </button>
                </div>

                <button className='flex w-full border-2 border-black mt-10   text-[1.05rem] px-[40%]  text-black uppercase rounded py-[2%] '> <span className='mr-3 mt-[5px]'><IoMdCall /></span>  <p className=' max-lg:text-[0.8rem] max-md:text-[1rem]'> Via email form
                </p>
                </button>

                <form className='mt-4'>
                    <div className='flex flex-col mt-8 relative'>
                        <label htmlFor="Name" className='bg-white px-1 font-semibold absolute left-5 -top-[14px]'>Name</label>
                        <input type="text" onChange={HandlerName} value={name} className='w-full h-[40px] pl-4 py-3 border border-gray-500 rounded max-md:h-[60px]' />
                    </div>
                    <div className='flex flex-col mt-8 relative'>
                        <label htmlFor="email" className='bg-white px-1 font-semibold absolute left-5 -top-[14px]'>E-mail</label>
                        <input type="email" onChange={HandlerEmail} value={email} className='w-full h-[40px] pl-4 py-3 border border-gray-500 rounded max-md:h-[60px]' />
                    </div>
                    <div className='flex flex-col mt-8 relative'>
                        <label htmlFor="text" className='bg-white px-1 font-semibold absolute left-5 -top-[14px] uppercase'>text</label>
                        <textarea name="Text" onChange={HandlerTextarea} value={textarea} className='w-full h-[150px] pl-4 py-3 border border-gray-500 rounded'></textarea>
                    </div>
                </form>
                <div className='flex justify-center mt-4'>
                    <button onClick={submitHandler} className=' text-[1.05rem] px-10 py-2 bg-black text-white uppercase rounded'>Submit
                    </button>

                </div>
            </div>

            {/* Right div part */}
            <div className='w-1/2 pl-5 max-md:w-full'>
                <img src="https://img.freepik.com/free-vector/service-24-7-concept-illustration_114360-7380.jpg" alt="" />
            </div>
            <div className="grid place-items-center h-dvh bg-zinc-900/15">
                <button >Notify !</button>

            </div>
        </div>
    )
}
