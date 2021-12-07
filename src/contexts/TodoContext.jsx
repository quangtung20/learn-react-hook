import React, { createContext, useEffect, useReducer, useState } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODOS } from "../reducers/types";

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
    // const [todos, setTodos] = useState([
    //     { id: 1, title: 'tung1' },
    //     { id: 2, title: 'tung2' },
    //     { id: 3, title: 'tung3' },
    // ])
    const [todos, dispatch] = useReducer(todoReducer, [])
    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null,
        })
    }, [])

    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: { todos }
        })
    }, [todos])

    // const addTodo = (title) => {
    //     const newTodos = [...todos, {
    //         id: todos.length++,
    //         title
    //     }]
    //     setTodos(newTodos)
    // }

    // const deleteTodo = (id) => {
    //     const newTodos = todos.filter(todo => (todo.id !== id))
    //     setTodos(newTodos)
    // }

    const todoContextData = {
        todos,
        // addTodo,
        // deleteTodo
        dispatch
    }

    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}



export default TodoContextProvider