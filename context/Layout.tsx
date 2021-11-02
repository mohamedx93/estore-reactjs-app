import React, { useEffect, useState, useReducer } from 'react'
import { ILayoutContext } from '../constants/Interfaces'
// import Spin from 'react-cssfx-loading/lib/CircularProgress';




const createDefaultContext: () => ILayoutContext = () => {
    return {
        loading: false,
        isNavBarHidden: true,
        setIsNavBarHidden: () => { },
        setLoading: () => { },
    }
}

export const LayoutContext = React.createContext<ILayoutContext>(createDefaultContext());



function LayoutProvider({ children }: { children: React.ReactNode }): React.ReactElement {
    const [isNavBarHidden, setIsNavBarHidden] = useState(true)
    const [loading, setLoading] = useState(false)
    
    return (
        <LayoutContext.Provider value={{
            isNavBarHidden, setIsNavBarHidden, loading, setLoading, 
        }}>
            {children}

        </LayoutContext.Provider>
    )
}


export { LayoutProvider }

