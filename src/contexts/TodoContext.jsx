import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'tung1' },
        { id: 2, title: 'tung2' },
        { id: 3, title: 'tung3' },
    ])

    useEffect(() => {
        const newTodos = localStorage.getItem('todos')
        if (newTodos) setTodos(JSON.parse(newTodos))
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (title) => {
        const newTodos = [...todos, {
            id: todos.length++,
            title
        }]
        setTodos(newTodos)
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => (todo.id !== id))
        setTodos(newTodos)
    }

    const todoContextData = {
        todos,
        addTodo,
        deleteTodo
    }

    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}



export default TodoContextProvider