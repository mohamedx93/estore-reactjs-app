import React, { ReactElement } from 'react'
import AuthView from '@views/Auth'

interface Props {
    
}

export default function auth({}: Props): ReactElement {
    return (
        <div>
            <AuthView/>
        </div>
    )
}
