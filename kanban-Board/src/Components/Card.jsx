import React from 'react'
import Chip from './Chip'
import { MoreHorizontal } from "react-feather";
import { Clock } from "react-feather";
import { CheckSquare } from "react-feather";



function Card() {
    return (
        <div className='bg-white mb-3.5 p-4 rounded-2xl'>
            <div className='flex justify-between pb-4'>
                <div>
                    <Chip text="develop" color="blue"  />
                </div>
                <MoreHorizontal  />
            </div>

            <div className='mb-5 font-extrabold'>
                Lorem ipsum dolor sit amet. Voluptas
            </div>

            {/* footer */}
            <div className='w-full flex  justify-between'>
                <p className='flex gap-1'>
                   <Clock className='size-[20px]'/>
                   <span> 15 Aug </span>
                </p>

                <div className='flex gap-2'>
                    <CheckSquare className='size-[20px]'/>
                    <p>1/2</p>
                </div>
            </div>

            
        </div>
    )
}

export default Card
