import React from 'react'
import { MoreHorizontal } from "react-feather";
import Card from './Card';
import EditTask from './EditTask';

// import { FiMoreHorizontal } from "react-icons/fi";
// import { IoIosMore } from "react-icons/io";
function Board() {
    return (
        <div className=' w-80 pb-4 bg-white'>
            <div className='flex justify-between p-5'>
                <div className='flex gap-2'>
                    <p className='text-[18px] font-bold'> To Do</p>
                    <span className='text-[18px] text-gray-400 font-bold'>2</span>
                </div>
                <MoreHorizontal />
            </div>

            <div className='custom-scroll bg-gray-200 max-h-[470px] mx-3 p-5 overflow-y-scroll'>
                <Card />
                <Card />
                <Card />
                <EditTask text={"Add card"} placeholder={"Enter Item"}/>
            </div>
        </div>
    )
}

export default Board
