import React, { useEffect, useState, useReducer } from 'react'
import { ILayoutContext } from '../constants/Interfaces'
// import Spin from 'react-cssfx-loading/lib/CircularProgress';
import Progress from '@components/ui/Progress'
import styles from '@styles/Components.module.scss'




const createDefaultContext: () => ILayoutContext = () => {
    return {
        loading: false,
        isAuthView: true,
        setIsAuthView: () => { },
        setLoading: () => { },
    }
}

export const LayoutContext = React.createContext<ILayoutContext>(createDefaultContext());



function LayoutProvider({ children }: { children: React.ReactNode }): React.ReactElement {
    const [isAuthView, setIsAuthView] = useState(true)
    const [loading, setLoading] = useState(false)
    return (
        <LayoutContext.Provider value={{
            isAuthView, setIsAuthView, loading, setLoading
        }}>
            {children}
            
        </LayoutContext.Provider>
    )
}


export { LayoutProvider }

