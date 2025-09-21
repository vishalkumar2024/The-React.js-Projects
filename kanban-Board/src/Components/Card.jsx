import React from 'react'
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

function Card(props) {
    return (
        <div className='bg-white mb-3.5 p-4 rounded-2xl'>
            <div className='flex justify-between pb-4'>
                <div>
                    {
                        props.CardItem.labels?.map((item, index) => {

                            return <Chip key={index} labelItem={item} />
                        })
                    }
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none cursor-pointer"> <MoreHorizontal /></DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white hover:bg-zinc-100 cursor-pointer ">
                        <DropdownMenuLabel>Delete Task</DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className='mb-5 font-extrabold'>
                {props.CardItem?.description}
            </div>

            {/* footer */}
            <div className='w-full flex  justify-between'>
                {props.CardItem.date &&
                    <p className='flex gap-1'>
                        <Clock className='size-[20px]' />
                        <span> {props.CardItem?.date} </span>
                    </p>
                }
                <div className='flex gap-2'>
                    <CheckSquare className='size-[20px]' />
                    <p>1/2</p>
                </div>
            </div>
        </div>
    )
}

export default Card
