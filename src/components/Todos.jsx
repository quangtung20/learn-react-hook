import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { TodoContext } from '../contexts/TodoContext'
import { AuthContext } from '../contexts/AuthContext'

const Todos = props => {
    // const [todos, setTodos] = useState([
    //     { id: 1, title: 'tung1' },
    //     { id: 2, title: 'tung2' },
    //     { id: 3, title: 'tung3' },
    // ])
    const { todos, addTodo, deleteTodo } = useContext(TodoContext)
    const { isAuthenticated } = useContext(AuthContext)
    const style = {
        backgroundColor: 'rgba(240,240,240)',
        color: 'black'
    }

    // const addTodo = (title) => {
    //     const newTodo = [...todos, {
    //         id: todos.length + 1,
    //         title
    //     }]
    //     setTodos(newTodo)
    // }

    // const deleteTodo = (id) => {
    //     const newTodo = todos.filter(todo => (todo.id !== id))
    //     setTodos(newTodo)
    // }
    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {
                isAuthenticated ? (
                    <ul>
                        {
                            todos.map(todoItem => {
                                return <TodoItem todoProps={todoItem} deleteTodo={deleteTodo} />
                            })
                        }
                    </ul>
                ) : <p>You are not login</p>
            }


        </div>
    )
}

Todos.propTypes = {

}

export default Todos
