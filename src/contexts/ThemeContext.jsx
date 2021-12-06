import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        isLightTheme: false,
        light: {
            background: 'rgb(240,240,240)',
            color: 'black'
        },
        dark: {
            background: 'rgb(39,39,39)',
            color: 'white'
        }
    })

    const toggleTheme = () => {
        const newTheme = {
            ...theme,
            isLightTheme: !theme.isLightTheme,
        }
        setTheme(newTheme)
    }

    const themeContextData = {
        theme,
        toggleTheme,
    }

    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>)// children dai dien cho tat ca cac component boc vao
}

export default ThemeContextProvider