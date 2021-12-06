import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState({
        isAuthenticated: false
    })

    useEffect(() => {
        if (isAuthenticated) {
            alert('da login')
        } else {
            alert('da logout')
        }
    }, [isAuthenticated])

    const checkAuthenticated = () => {
        setIsAuthenticated(!isAuthenticated)
    }
    const AuthContextData = {
        isAuthenticated,
        checkAuthenticated
    }

    return (
        <AuthContext.Provider value={AuthContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider