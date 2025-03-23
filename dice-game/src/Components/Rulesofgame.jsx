import React from 'react'

function Rulesofgame() {
    return (
        <div className='bg-rose-300 container rounded w-full h-[400px]'>
            <h1 className='text-center text-4xl font-semibold pt-6 pb-2'>How to play Dice game</h1>
            <ul className=' w-full h-[400px] mt-2 flex flex-col item-center'>
                <li className='text-2xl ml-30 mt-7'>1. Select any number,</li>
                <li className='text-2xl ml-30 mt-7'>2. Roll the dice by clicking on it,</li>
                <li className='text-2xl ml-30 mt-7'>3. after clicking on the dice, if selected number is equals to the dice number you will get +1 point,</li>
                <li className='text-2xl ml-30 mt-7'>4. If you guess wrong number, score remains same.</li>
            </ul>
        </div>
    )
}

export default Rulesofgame
