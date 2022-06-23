import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.random(Math.random() * 10000),
            text: input
        })

        setInput('');
    }

    return (
        <form className='todo-form text-center' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder=' Add a new task'
                value={input}
                className='todo-input bg-gradient-to-b from-sky-800 to-gray-900 text-white p-2 rounded-lg border-2 border-gray-400 lg:w-96 md:w-36 sm:w-36 mx-2'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button bg-gradient-to-b from-green-500 to-sky-900 p-2 px-5 rounded-md shadow-sm shadow-gray-200'>Add Todo</button>
        </form>
    )
}

export default TodoForm