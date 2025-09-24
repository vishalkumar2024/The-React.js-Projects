import React, { useEffect, useState } from 'react'
import Model from './Model'
import { Calendar, CheckSquare, Delete, List, Tag, Trash, Type } from 'react-feather'
import EditTask from './EditTask'
import Chip from './Chip'


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

    // const { title, labels, date, description, tasks } = props.card
    const [value, setValue] = useState({ ...props.card })

    const calculateProgress = () => {
        if (value.tasks?.length == 0) return "0";
        const complete = value.tasks.filter(item => item.completed)?.length;
        const final = ((complete / value.tasks?.length) * 100)
        return final;
    }


    useEffect(() => {
        props.updateCard(props.card.id, props.boardId, value);
    }, [value])

    return (
        <Model onClose={() => props.onClose()}>
            <div className='bg-neutral-100 w-[600px] flex flex-col gap-7  p-7 '>
                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-2'>
                        <Type />
                        {value.title}
                    </div>
                    <div className='w-[50%]  bg-blue'>
                        <EditTask
                            text={value.title}
                            default={value.title}
                            placeholder="Enter Title"
                            buttonText="Set Title"
                            onSubmit={(Value)=>setValue({...value,title:Value})}
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
                            text={value.description}
                            default={value.description}
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
                        <input type="date" default={value.date ? new Date(date).toISOString().substr(0, 10) : ""} className='outline-none cursor-pointer' />
                    </div>
                </div>


                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-3'>
                        <Tag />
                        Labels
                    </div>
                    <div className='flex gap-3 flex-wrap my-[5px]'>
                        {
                            value.labels.map((item, index) => (
                                <Chip
                                    key={index}
                                    color={item.color}
                                    text={item.text}
                                    close
                                    onClose={() => console.log("chips")}
                                />
                            ))
                        }
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
                        <div className={`h-3 rounded-2xl bg-[#1379ec] `}
                            style={{ width: calculateProgress() + "%" }}
                        />
                    </div>

                    <div className='flex flex-col gap-7 mt-3'>
                        {
                            value.tasks.map((item, index) =>
                                <div
                                    className='flex items-center justify-between gap-3'
                                    key={index}>
                                    <div className='flex   items-center gap-3'>
                                        <input
                                            type="checkbox"
                                            default={item.completed}
                                            className='size-[16px] cursor-pointer'
                                        />
                                        <p className='font-semibold'>{item.text}</p>
                                    </div>
                                    <Trash className='cursor-pointer' />
                                </div>
                            )
                        }
                    </div>

                    <div className='w-[50%] rounded  text-[1.1rem] outline-none'>
                        <EditTask
                            text="Add Tasks"
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
