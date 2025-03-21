import React, { useState } from 'react'

export default function Gameplay() {
    let diceNumber = [1, 2, 3, 4, 5, 6];
    const [selected, setSelected] = useState();
    console.log(selected)
    // let isSelected=false;

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
                                <button onClick={() => setSelected(value)} isSelected={value===selected} className='px-4 py-[10px] border-2 border-black ${isSelected?bg-black:bg-white} font-semibold hover:bg-black hover:text-white' key={i}>{value}</button>
                            ))
                        }
                    </div>
                    <p className='capitalize font-semibold text-[1.2rem] mt-3'>select number</p>
                </div>
            </div>
            <div className='bg-rose-300 w-full h-[430px] flex justify-center items-center'>
                <div className='bg-amber-300 w-[15%] h-[80%] flex '>
                    <div></div>
                    <p>Click on Dice to roll</p>
                    <button className=''>reset score</button>
                    <button className='bg-red-400'>show rules</button>
                </div>
            </div>
        </div>
    )
}
