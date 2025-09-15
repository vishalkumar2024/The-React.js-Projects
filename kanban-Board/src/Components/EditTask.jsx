import React, { useState } from 'react'
import { X } from "react-feather";


function EditTask(props) {
    const [showEdit, setShowEdit] = useState(false);
    return (
        <div className='bg-white flex justify-center'>
            {
                showEdit ?

                    (<form
                        className='flex flex-col w-full   gap-2'
                        onSubmit={() => {
                            e.preventDefault()
                            if (props.onSubmit) props.onSubmit()
                        }}>
                        <input
                            className='bg-gray-300 w-[95%] mx-auto my-1.5 rounded outline-none p-1.5 border border-cyan-400'
                            type="text"
                            defaultValue={props.text}
                            placeholder={props.placeholder || "Enter item"}
                        />
                        <div className='flex justify-between pb-3 px-4'>
                            <button className='bg-blue-400 hover:bg-blue-500 transition duration-200  px-2 border border-blue-700 rounded' type='submit'>{props.buttonText || "ADD"}</button>
                            <X onClick={() => setShowEdit(false)} className='cursor-pointer' />
                        </div>
                    </form>)

                    : (<p
                        onClick={() => setShowEdit(true)}
                        className='py-3  px-auto cursor-pointer'>{props.text || "Add Task"}
                    </p>)
            }
        </div>
    )
}

export default EditTask
