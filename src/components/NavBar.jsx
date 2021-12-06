import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

function NavBar(props) {
    const { isAuthenticated, checkAuthenticated } = useContext(AuthContext)
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme
    return (
        <div className="navbar" style={isLightTheme ? light : dark}>
            <h1>My hook app</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li><button onClick={checkAuthenticated}>{isAuthenticated ? 'logout' : 'login'}</button></li>
                <li><p>{isAuthenticated ? 'You are login' : ''}</p></li>
            </ul>
        </div>
    )
}

NavBar.propTypes = {

}

export default NavBar

