
import React, { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, { text: todo, completed: false }]);
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="todo-app">
            <Header />
            <TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            <Footer />
        </div>
    );
}

export default App;
