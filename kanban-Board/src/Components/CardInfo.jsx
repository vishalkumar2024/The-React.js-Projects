import React, { useEffect, useState } from 'react'
import Model from './Model'
import { Calendar, CheckSquare, List, Tag, Trash, Type } from 'react-feather'
import EditTask from './EditTask'
import Chip from './Chip'


function CardInfo(props) {
    const colors = [
        "#a8193d",
        "#4fcc25",
        "#1ebffa",
        "#8da377",
        "#e9a13c",
        "#cf61a1",
        "#935efc"
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
        if (value.title === props.card?.title &&
            value.date === props.card?.date &&
            value.description === props.card.description &&
            value.labels?.length === props.card?.labels?.length &&
            value?.tasks === props?.card?.tasks.length) return

        props.updateCard(props.card.id, props.boardId, value);
    }, [value])



    const addLabel = (labelText, color) => {
        const index = value.labels?.findIndex(item => item.text === labelText);
        if (index > -1) return;

        const label = {
            text: labelText,
            color,
        }
        setValue({ ...value, labels: [...value.labels, label] })
        setActiveColor("");
    }

    const removeLabel = (textValue) => {
        const tempLabel = value.labels?.filter((item) => item.text !== textValue);
        setValue({ ...value, labels: tempLabel })
    }


    const addTask = (taskValue) => {
        const task = {
            id: Date.now() + Math.random(),
            text: taskValue,
            completed: false,
        }

        setValue({ ...value, tasks: [...value.tasks, task] })
    }


    const removeTask = (id) => {
        const tempLabel = value.tasks?.filter((item) => item.id !== id);
        setValue({ ...value, tasks: tempLabel })
    }

    const updateTask = (id, completed) => {
        const index = value.tasks?.findIndex((item) => item.id === id)
        if (index < 0) return;

        const tempTask = [...value.tasks];
        tempTask[index].completed = completed;
        setValue({ ...value, tasks: tempTask });
    }

    return (
        <Model onClose={() => props.onClose()}>
            <div className='bg-neutral-200 w-[100%] z-50 flex flex-col gap-7  p-7 '>
                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-2'>
                        <Type />
                        {value.title}
                    </div>
                    <div className='w-[50%] max-sm:w-[70%] editTask-resize bg-blue'>
                        <EditTask
                            text={value.title}
                            default={value.title}
                            placeholder="Enter Title"
                            buttonText="Set Title"
                            onSubmit={(Value) => setValue({ ...value, title: Value })}
                        />
                    </div>
                </div>

                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-3'>
                        <List />
                        Description
                    </div>
                    <div className='w-[50%] max-sm:w-[70%] editTask-resize bg-blue'>
                        <EditTask
                            text={value.description}
                            default={value.description}
                            placeholder="Enter Description"
                            buttonText="Set Description"
                            onSubmit={(Value) => setValue({ ...value, description: Value })}

                        />
                    </div>
                </div>

                <div className='flex flex-col  gap-3'>
                    <div className='font-semibold  flex items-center text-[1.3rem]   gap-3'>
                        <Calendar />
                        Date
                    </div>
                    <div className='w-[50%] max-md:w-[60%] calender-resize border-2 border-gray-500 rounded p-2 text-[1.1rem] outline-none'>
                        <input
                            type="date"
                            default={value.date ? new Date(value.date).toISOString().substr(0, 10) : ""}
                            onChange={(event) => setValue({ ...value, date: event.target.value })}

                            className='outline-none cursor-pointer'
                        />
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
                                    onClose={() => removeLabel(item.text)}
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
                                    className={'colorBall-resize h-[20px] w-[20px] rounded-full border-3 border-transparent active:border-amber-500 transition-all duration-400 cursor-pointer'}
                                ></li>
                            })
                        }
                    </div>
                    <div className='w-[50%] max-sm:w-[70%] editTask-resize rounded  text-[1.1rem] outline-none'>
                        <EditTask
                            text="Labels"
                            placeholder="Enter Label"
                            buttonText="Set Label"
                            onSubmit={(PresentText) => addLabel(PresentText, activeColor)}
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
                            style={{ width: calculateProgress() + "%", backgroundColor: calculateProgress() == "100" ? "limegreen" : "" }}
                        />
                    </div>

                    <div className='flex flex-col gap-7 mt-3'>
                        {
                            value.tasks.map((item, index) =>
                                <div className='flex items-center justify-between  gap-3' key={index}>
                                    <div className='flex   items-center gap-3'>
                                        <input
                                            type="checkbox"
                                            defaultChecked={item.completed}
                                            className='size-[16px] cursor-pointer'
                                            onChange={(event) => updateTask(item.id, event.target.checked)}
                                        />
                                        <p className='font-semibold'>{item.text}</p>
                                    </div>
                                    <Trash className='cursor-pointer' onClick={() => removeTask(item.id)} />
                                </div>
                            )
                        }
                    </div>

                    <div className='w-[50%] max-sm:w-[70%] editTask-resize rounded  text-[1.1rem] outline-none'>
                        <EditTask
                            text="Add Tasks"
                            placeholder="Enter Tasks"
                            buttonText="Set Tasks"
                            onSubmit={(value) => addTask(value)}
                        />
                    </div>
                </div>

            </div>
        </Model>

    )
}

export default CardInfo
