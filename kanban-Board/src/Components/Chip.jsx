import React from 'react'
import { X } from "react-feather";


function Chip(props) {
    return (
        <div style={{ backgroundColor: props.color }} className='w-fit flex items-center gap-2.5 py-[2px] my-3 px-5 bg-gray-400 rounded-2xl ' >
            {props.text}
            {props.close && (<X className='cursor-pointer' onClick={() => props.onClose ? props.onClose() : ""} />)}
        </div>
    )
}

export default Chip 
