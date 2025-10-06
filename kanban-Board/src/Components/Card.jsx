import React, { useState } from 'react'
import Chip from './Chip'
import { MoreHorizontal } from "react-feather";
import { Clock } from "react-feather";
import { CheckSquare } from "react-feather";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "../Components/ui/dropdown-menu"
import CardInfo from './CardInfo';

function Card(props) {
    const [showModel, setShowModel] = useState(false);

    return (
        <>
            {
                showModel && <CardInfo updateCard={props.updateCard} boardId={props.boardId} card={props.CardItem} onClose={() => setShowModel(false)} />

            }
            <div className={`${props.theme == "light" ? "bg-white" : "bg-zinc-500"} mb-3.5 p-4 rounded-2xl`}
                draggable
                onDragEnter={() => props.handleDragEnter(props.CardItem?.id, props.boardId)}
                onDragEnd={() => props.handleDragEnd(props.CardItem?.id, props.boardId)}
                onClick={() => setShowModel(true)}
            >

                <div className='flex justify-between  pb-4'>
                    <div >
                        {
                            props.CardItem.labels?.map((item, index) => {
                                return <Chip key={index} text={item.text} color={item.color} className="py-4" />
                            })
                        }
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className={`outline-none cursor-pointer ${props.theme == "light" ? "text-black" : "text-zinc-300"}`}> <MoreHorizontal /></DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white hover:bg-zinc-100 cursor-pointer ">
                            <DropdownMenuLabel onClick={() => props.removeCard(props.CardItem?.id, props.boardId)}>Delete Task</DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className={`mb-5 font-extrabold ${props.theme == "light" ? "text-black" : "text-zinc-300"}`}>
                    {props.CardItem?.title}
                </div>

                {/* footer */}
                <div className={`w-full flex justify-between ${props.theme == "light" ? "text-black" : "text-white"}`}>
                    {props.CardItem.date &&
                        <p className='flex gap-1'>
                            <Clock className='size-[20px]' />
                            <span> {props.CardItem?.date} </span>
                        </p>
                    }
                    {
                        props.CardItem.tasks.length > 0 && (
                            <div className='flex gap-2'>
                                <CheckSquare className={`size-[20px] mb-5 font-extrabold 
                                ${props.theme === "light" &&
                                        props.CardItem?.tasks?.filter((item) => item.completed).length ===
                                        props.CardItem?.tasks?.length
                                        ? "text-green-500"
                                        : ""
                                    }
                                    ${props.theme === "dark" &&
                                        props.CardItem?.tasks?.filter((item) => item.completed).length ===
                                        props.CardItem?.tasks?.length
                                        ? "text-green-400"
                                        : ""
                                    } `} />
                                <p className=''>
                                    {props.CardItem?.tasks?.filter((item) => item.completed).length}/{props.CardItem.tasks.length}
                                </p>
                            </div>
                        )}
                </div>
            </div>
        </>
    )
}

export default Card
