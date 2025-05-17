import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';

function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }
        ])
    }

    // Delete Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    // Toggle Complete
    // const toggleComplete = (id) => {
    //     setTodos(
    //         todos.map = ((todo) => todo.id == id ? { ...todos, completed: !todo.completed } : todo)
    //     )
    // }

    // Edit Todu
    const editTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, isEditing:!todo.isEditing } : todo)
        )
    }

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, task, isEditing:!todo.isEditing } : todo)
        )
    }

    return (
        <div className='bg-black text-white max-h-[30rem] rounded-[7px]  px-[3rem] py-[2rem] overflow-x-auto'>
            <h1 id='Todo-head'>To-Do List</h1>
            <TodoForm addTodo={addTodo} />

            {/* Display Todos */}

            {todos.map((todo) => todo.isEditing ?
                (<EditTodoForm editTodo={editTask} task={todo} />)
                :
                (<Todo
                    key={todo.id}
                    task={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                // toggleComplete={toggleComplete}
                />)
            )}

        </div>
    )
}

export default TodoWrapper;
