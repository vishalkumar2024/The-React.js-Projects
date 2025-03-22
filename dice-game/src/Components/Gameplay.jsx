import React, { useState } from 'react'

export default function Gameplay() {
    let diceNumber = [1, 2, 3, 4, 5, 6];
    const [selected, setSelected] = useState();
    console.log("selected number in button is"+selected)

    let rollDice=()=>{
        return Math.floor(Math.random() * 6) + 1
    }
  console.log(`rolled dice number is ${rollDice()}`)

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
                                <button onClick={() => setSelected(value)} className={`px-4 py-[10px] border-2 border-black   ${selected === value ? 'bg-black text-white' : 'bg-white'} font-semibold hover:bg-black hover:text-white`} key={i}>{value}</button>
                            ))
                        }
                    </div>
                    <p className='capitalize font-semibold text-[1.2rem] mt-3'>select number</p>
                </div>
            </div>
            <div className=' w-full h-[430px] flex justify-center items-center'>
                <div className=' w-[15%] h-[80%] flex flex-col '>
                    <div  className=' w-[90%] h-[150px] m-2 '>
                        <img  className='size-full' src={`/public/Images/dice_${rollDice()}.png`} alt="dice" />
                    </div>
                    <p onClick={()=>rollDice()} className=' m-5 font-semibold text-[1.05rem]'>Click on Dice to roll</p>
                    <button className='btn-style mx-4 px-5 font-semibold bg-white text-black border border-black py-2 mt-3 hover:bg-black hover:text-white'>reset score</button>
                    <button className='btn-style mx-4 px-5 mt-10'>show rules</button>
                </div>
            </div>
        </div>
    )
}
