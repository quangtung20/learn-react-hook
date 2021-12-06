import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../contexts/ThemeContext'
import { TodoContext } from '../contexts/TodoContext'

const TodoItem = props => {
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme
    // const { deleteTodo } = useContext(TodoContext)
    const todoItem = props.todoProps
    const { todos } = useContext(TodoContext)
    const deleteTodo = props.deleteTodo
    return (
        <div style={isLightTheme ? light : dark}>
            {todoItem.title}
            <button onClick={() => { deleteTodo(todoItem.id) }}>Delete</button>
        </div>
    )
}

TodoItem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default TodoItem
