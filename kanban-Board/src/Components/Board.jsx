import React from 'react'
import { MoreHorizontal } from "react-feather";
import Card from './Card';
import EditTask from './EditTask';
// import { Button } from '../Components/ui/button'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "../Components/ui/dropdown-menu"

function Board(props) {
    return (
        <div className=' w-80 h-[480px] pb-4 bg-white'>
            <div className='flex  justify-between p-5'>
                <div className='flex gap-2'>
                    <p className='text-[18px] font-bold'> {props.BoardItem?.title}</p>
                    <span className='text-[18px] text-gray-400 font-bold'>{props.BoardItem.cards.length}</span>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger className="outline-none cursor-pointer"> <MoreHorizontal /></DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white hover:bg-zinc-100 cursor-pointer ">
                        <DropdownMenuLabel onClick={() => props.removeBoard(props.BoardItem?.id)}>Delete Board</DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className='custom-scroll bg-gray-200 max-h-[400px] mx-3 p-5 overflow-y-scroll'>
                {
                    props.BoardItem.cards.map((item) => {
                        return <Card
                            key={item.id}
                            CardItem={item}
                            removeCard={props.removeCard}
                            boardId={props.BoardItem?.id}
                            handleDragEnd={props.handleDragEnd}
                            handleDragEnter={props.handleDragEnter}
                            updateCard={props.updateCard}
                        />
                    })

                }

                <div>
                    <EditTask
                        className='bg-red-400 px-6'
                        text={"Add card"}
                        placeholder={"Enter Item"}
                        onSubmit={(value) => props.addCard(value, props.BoardItem?.id)}
                    />
                </div>

            </div>
        </div>
    )
}

export default Board
