import React from 'react'

export default function Gameplay() {
    let diceNumber = [1, 2, 3, 4, 5, 6];
    return (
        <div className='p-10'>
            <div className=' w-full h-[131px] flex  justify-between'>
                <div className='w-50 flex flex-col justify-center items-center '>
                    <span className='text-6xl font-semibold'>0</span>
                    <p className='capitalize font-semibold'>total score</p>
                </div>
                <div className='w-[40%] flex flex-col justify-center items-center'>
                    <div className=' w-full flex justify-evenly'>
                        {
                            diceNumber.map((value, i) => (
                                <button className='px-4 py-[10px] border-2 border-black font-semibold hover:bg-black hover:text-white' key={i}>{value}</button>
                            ))
                        
                        }

                        {/* <button className='px-4 py-[10px] border-2 border-black font-semibold hover:bg-black hover:text-white'>1</button>
                    <button className='px-4 py-[10px] border-2 border-black font-semibold hover:bg-black hover:text-white'>2</button>
                    <button className='px-4 py-[10px] border-2 border-black font-semibold hover:bg-black hover:text-white'>3</button>
                    <button className='px-4 py-[10px] border-2 border-black font-semibold hover:bg-black hover:text-white'>4</button>
                    <button className='px-4 py-[10px] border-2 border-black font-semibold hover:bg-black hover:text-white'>5</button>
                    <button className='px-4 py-[10px] border-2 border-black font-semibold hover:bg-black hover:text-white'>6</button> */}
                    </div>
                    <p className='capitalize font-semibold text-[1.2rem] mt-3'>select number</p>
                </div>
            </div>
        </div>
    )
}
