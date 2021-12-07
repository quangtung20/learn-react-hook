import { ADD_TODO, DELETE_TODO, GET_TODOS, SAVE_TODOS } from "./types";

export const todoReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_TODOS:
            const newTodos = localStorage.getItem('todos')
            if (newTodos) state = (JSON.parse(newTodos))
            return state
        case SAVE_TODOS:
            localStorage.setItem('todos', JSON.stringify(state))
            return state
        case ADD_TODO:
            return [...state, payload.todo]
        case DELETE_TODO:
            return state.filter(todo => todo.id !== payload.id)
        default:
            return state
    }
}