import React, { InputHTMLAttributes, ReactElement } from 'react';
import styles from '@styles/Components.module.scss';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    onChange?: (...args: any[]) => any
}

export default function Input({ className, onChange, ...res }: InputProps): ReactElement {
    const handleOnChange = (e: any) => {
        if (onChange) {
            onChange(e.target.value)
        }
        return null
    }
    return (
        <input
            className={`${styles.inputNeumorph} ${className}`}
            onChange={handleOnChange}
            {...res}
        />
    )
}



