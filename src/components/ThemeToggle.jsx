import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = props => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

ThemeToggle.propTypes = {

}

export default ThemeToggle
