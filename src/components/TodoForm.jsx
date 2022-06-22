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
                placeholder='Add a todo'
                value={input}
                className='todo-input  bg-slate-900 text-white p-2 rounded-xl border-2 border-green-400 w-96'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button bg-gradient-to-b from-gray-500 to-black p-2 px-6 rounded-md shadow-sm shadow-gray-100'>Add</button>
        </form>
    )
}

export default TodoForm