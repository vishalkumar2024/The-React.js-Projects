import React from 'react'

function Rulesofgame() {
    return (
        <div className='bg-rose-300 w-full h-full'>
            <h1 className='text-center text-6xl font-semibold pt-3 pb-5'>How to play Dice game</h1>
            <ul className=' w-full h-[400px] mt-5 flex flex-col item-center'>
                <li className='text-3xl ml-30 mt-10'>1. Select any number,</li>
                <li className='text-3xl ml-30 mt-10'>2. Roll the dice by clicking on it,</li>
                <li className='text-3xl ml-30 mt-10'>3. after clicking on the dice, if selected number is equals to the dice number you will get +1 point,</li>
                <li className='text-3xl ml-30 mt-10'>4. If you guess wrong number, score remains same.</li>
            </ul>
        </div>
    )
}

export default Rulesofgame
