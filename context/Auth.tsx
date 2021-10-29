import React, { useEffect, useState, useReducer } from 'react'
import { IAuthContext } from '../constants/Interfaces'
// import Spin from 'react-cssfx-loading/lib/CircularProgress';




const createDefaultContext: () => IAuthContext = () => {
    return {
        loading: false,
        isAuthView: true,
        setIsAuthView: () => { },
        setLoading: () => { },
    }
}

export const AuthContext = React.createContext<IAuthContext>(createDefaultContext());



function AuthProvider({ children }: { children: React.ReactNode }): React.ReactElement {
    const [isAuthView, setIsAuthView] = useState(true)
    const [loading, setLoading] = useState(false)
    return (
        <AuthContext.Provider value={{
            isAuthView, setIsAuthView, loading, setLoading
        }}>
            {children}
            
        </AuthContext.Provider>
    )
}


export { AuthProvider }

