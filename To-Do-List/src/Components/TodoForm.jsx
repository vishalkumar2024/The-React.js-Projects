import React, { useState } from 'react'
import '../App.css';
import { GrAddCircle } from "react-icons/gr";

function TodoForm({addTodo}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value)
      setValue("");
    }
  }
  
  return (
    <div className='mb-10 bg-amer-200 w-[300px]'>
      <form className='w-full ' onSubmit={handleSubmit} >
        <input
          className='text-black bg-white text-[1.1rem] py-1.5 pl-2 w-[80%] border border-white outline-none rounded'
          type="text"
          placeholder='Enter the task'
          value={value}
          onChange={(e) => { setValue(e.target.value) }}
        />
        <button id='add-icon' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
