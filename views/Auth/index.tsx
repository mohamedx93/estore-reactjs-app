import React, { ReactElement } from 'react'
import styles from '@styles/Auth.module.scss'


interface Props {
    
}

export default function Auth({}: Props): ReactElement {
    return (
        <div className={`container md-1 `}>
            <div className={`card p-4 mx-auto my-auto ${styles.formContainer}`}>
            <h1>email</h1>
            <h1>password</h1>
            <h1>forgot password</h1>
            <h1>Buttons</h1>
            <h1>signup or signin</h1>
            </div>
        </div>
    )
}
