import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TodoForm = props => {
    const addTodo = props.addTodo
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
        addTodo(title)
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
