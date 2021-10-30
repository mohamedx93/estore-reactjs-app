import React, { useEffect, useState, useReducer } from 'react'
import { IAuthContext } from '../constants/Interfaces'
// import Spin from 'react-cssfx-loading/lib/CircularProgress';




const createDefaultContext: () => IAuthContext = () => {
    return {
        isUserLogedIn: false,
        setIsUserLogedIn: () => { },
    }
}

export const AuthContext = React.createContext<IAuthContext>(createDefaultContext());



function AuthProvider({ children }: { children: React.ReactNode }): React.ReactElement {
    const [isUserLogedIn, setIsUserLogedIn] = useState(false)
    return (
        <AuthContext.Provider value={{
            isUserLogedIn, setIsUserLogedIn
        }}>
            {children}
            
        </AuthContext.Provider>
    )
}


export { AuthProvider }

