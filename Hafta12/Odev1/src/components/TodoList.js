
import React, { useState } from 'react';

function TodoList({ todos, addTodo, toggleTodo, removeTodo }) {
    const [input, setInput] = useState('');

    const handleAdd = () => {
        if (input.trim()) {
            addTodo(input.trim());
            setInput('');
        }
    };

    return (
        <div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What needs to be done?"
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span
                            onClick={() => toggleTodo(index)}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
