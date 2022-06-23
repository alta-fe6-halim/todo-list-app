import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { TiEdit } from 'react-icons/ti'
import { RiCloseCircleLine } from 'react-icons/ri'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div className='flex flex-row justify-between bg-gradient-to-b from-green-500 to-sky-900 shadow-md shadow-gray-500 mx-16 my-5 p-5 rounded-xl  overflow-auto'>
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine
                        onClick={() => removeTodo(todo.id)}
                        className='delete-icon'
                    />
                    <TiEdit
                        onClick={() => setEdit({ id: todo.id, value: todo.text })}
                        className='edit-icon'
                    />
                </div>
            </div>
        </div>
    ))
}
export default Todo