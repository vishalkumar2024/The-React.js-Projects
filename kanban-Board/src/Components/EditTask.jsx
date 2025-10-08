import React, { useState } from 'react'
import { X } from "react-feather";


function EditTask(props) {
    const [showEdit, setShowEdit] = useState(false);
    const [inputvalue, setInputvalue] = useState(props.default || "");


    return (
        <div className={`${props.theme == "light" ? "bg-white" : "bg-zinc-500"} z-50 cursor-pointer flex justify-center h-fit   py-[10px] rounded ${!showEdit ? " transition duration-200" : ""
            }`}>

            {
                showEdit ?

                    (<form
                        className='flex flex-col w-full   gap-2'
                        onSubmit={(e) => {
                            e.preventDefault()
                            setShowEdit(false);
                            setInputvalue("");
                            if (props.onSubmit && inputvalue.length > 0) props.onSubmit(inputvalue)
                        }}>
                        <input
                            className='bg-gray-300 w-[95%] mx-auto my-1.5 rounded outline-none p-1.5 border border-cyan-400'
                            type="text"
                            autoFocus
                            value={inputvalue}
                            onChange={(e) => { setInputvalue(e.target.value) }}
                            placeholder={props.placeholder || "Enter Card"}
                        />
                        <div className='flex justify-between pb-3 px-4'>
                            <button
                                className='bg-blue-400 hover:bg-blue-500 transition duration-200  px-2 border border-blue-700 rounded'
                                type='submit'>{props.buttonText || "ADD"}
                            </button>
                            <X onClick={() => setShowEdit(false)} className='cursor-pointer' />
                        </div>
                    </form>)

                    : (<div

                        onClick={() => setShowEdit(true)}
                        className={` w-full h-full flex justify-center ${props.theme == "light" ? " text-black" : " text-zinc-200"} `}>
                        <p>   {props.text || "Add Task"} </p>
                    </div>)
            }
        </div>
    )
}

export default EditTask
