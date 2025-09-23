import React from 'react'
import Model from './Model'
import { Calendar, List, Type } from 'react-feather'
import EditTask from './EditTask'

function CardInfo(props) {
    return (
        <Model onClose={() => props.onClose()}>
            <div className='bg-neutral-100 w-[600px] flex flex-col gap-7 p-7 '>
                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-2'>
                        <Type />
                        Title  
                    </div>
                    <div className='w-[50%]  bg-blue'>
                        <EditTask text="Hello there" placeholder="Enter Title" />
                    </div>
                </div>

                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-3'>
                        <List />
                        Description
                    </div>
                    <div className='w-[50%]  bg-blue'>
                        <EditTask text=" Description" placeholder="Enter Description" />
                    </div>
                </div>

                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-3'>
                        <Calendar />
                        Date
                    </div>
                    <div className='w-[50%] border-2 border-gray-500 rounded p-2 text-[1.1rem] outline-none'>
                        <input type="date" className='outline-none cursor-pointer' />
                    </div>
                </div>
            </div>
        </Model>

    )
}

export default CardInfo
