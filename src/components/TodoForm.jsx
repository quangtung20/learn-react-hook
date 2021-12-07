import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { TodoContext } from '../contexts/TodoContext'
import { ADD_TODO } from '../reducers/types'

const TodoForm = props => {
    // const addTodo = props.addTodo
    const { dispatch } = useContext(TodoContext)

    const [title, setTitle] = useState('')
    const style = {
        backgroundColor: 'rgba(240,240,240)',
        color: 'black'
    }

    const onTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        // addTodo(title)
        dispatch({
            type: ADD_TODO,
            payload: {
                todo: {
                    id: 4,
                    title
                }
            }
        })
        setTitle('')

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="write something" onChange={onTitleChange} value={title} />
            <input type="submit" value="them" style={style} />
        </form>
    )
}

TodoForm.propTypes = {

}

export default TodoForm
