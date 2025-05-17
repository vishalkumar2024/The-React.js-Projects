import React from 'react'
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

function Todo({ task, deleteTodo, editTodo }) {
    return (
        <div className=' w-[94%]  flex items-center m-w-[250px] overflow-x-auto justify-between p-2 my-4 border border-white outline-none rounded'>
           <p >{task.task}</p>
            <div className='flex justify-evenly'>
                <button className='cursor-pointer mr-2' onClick={()=>editTodo(task.id)}><MdEditSquare className='text-[20px]' /></button>
                <button className='cursor-pointer' onClick={() => deleteTodo(task.id)}><MdDeleteForever className='text-[20px]'/></button>
            </div>
        </div>
    )
}

export default Todo
