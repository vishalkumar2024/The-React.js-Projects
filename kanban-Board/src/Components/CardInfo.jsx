import React, { useState } from 'react'
import Model from './Model'
import { Calendar, CheckSquare, Delete, List, Tag, Trash, Type } from 'react-feather'
import EditTask from './EditTask'


function CardInfo(props) {
    const colors = [
        "#a8193d",
        "#4fcc25",
        "#1ebffa",
        "#8da377",
        "#9975bd",
        "#cf61a1",
        "#240959",
    ]
    const [activeColor, setActiveColor] = useState("");

    return (
        <Model onClose={() => props.onClose()}>
            <div className='bg-neutral-100 w-[600px] flex flex-col gap-7  p-7 '>
                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-2'>
                        <Type />
                        Title
                    </div>
                    <div className='w-[50%]  bg-blue'>
                        <EditTask
                            text="Hello there"
                            placeholder="Enter Title"
                            buttonText="Set Title"
                        />
                    </div>
                </div>

                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-3'>
                        <List />
                        Description
                    </div>
                    <div className='w-[50%]  bg-blue'>
                        <EditTask
                            text=" Description"
                            placeholder="Enter Description"
                            buttonText="Set Description"
                        />
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


                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-3'>
                        <Tag />
                        Labels
                    </div>
                    <div className='h-5  flex items-center gap-3.5 list-none mb-2'>
                        {
                            colors.map((item, index) => {
                                return <li
                                    key={index}
                                    style={{ background: item }}
                                    onClick={() => { setActiveColor(item) }}
                                    className={' size-[20px] rounded-full border-3 border-transparent active:border-amber-500 transition-all duration-400 cursor-pointer'}
                                ></li>
                            })
                        }
                    </div>
                    <div className='w-[50%] rounded  text-[1.1rem] outline-none'>
                        <EditTask
                            text="Labels"
                            placeholder="Enter Label"
                            buttonText="Set Label"
                        />
                    </div>
                </div>


                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-3'>
                        <CheckSquare />
                        Tasks
                    </div>

                    <div className='h-3 rounded-2xl w-full border border-[#ccc]'>
                        <div className='h-3 rounded-2xl bg-[#1379ec] w-[30%] active:bg-lime-400' />
                    </div>

                    <div className='flex flex-col gap-7 mt-3'>
                        <div className='flex items-center justify-between gap-3'>
                            <div className='flex   items-center gap-3'>
                                <input type="checkbox" className='size-[16px] cursor-pointer'/>
                                <p className='font-semibold'> Task 1</p>
                            </div>
                            <Trash className='cursor-pointer'/>
                        </div>
                        <div className='flex gap-3 items-center justify-between '>
                            <div className='flex gap-3'>
                                <input type="checkbox" className='size-[16px] cursor-pointer' />
                                <p className='font-semibold'> Task 2</p>
                            </div>
                            <Trash className='cursor-pointer' />
                        </div>
                    </div>

                    <div className='w-[50%] rounded  text-[1.1rem] outline-none'>
                        <EditTask
                            text="Tasks"
                            placeholder="Enter Tasks"
                            buttonText="Set Tasks"
                        />
                    </div>
                </div>

            </div>
        </Model>

    )
}

export default CardInfo
