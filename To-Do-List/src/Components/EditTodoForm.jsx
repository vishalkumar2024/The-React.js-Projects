import React, { useState } from 'react'

function EditTodoForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
       editTodo(
         value,
         task.id
       )
    }
    return (
        <div>
            <form className='w-full m-[1rem] ' onSubmit={handleSubmit} >
                <input
                    className='p-2 bg-white text-black outline-none'
                    type="text"
                    placeholder='Update the task...'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                />
                <button className='ml-2 cursor-pointer' type='submit'>Add task</button>
            </form>
        </div>
    )
}

export default EditTodoForm
