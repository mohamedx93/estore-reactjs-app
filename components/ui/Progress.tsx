import React, { ReactElement } from 'react'
import Image from 'next/image'
import styles from '@styles/Components.module.scss'
interface Props {
    
}

export default function Progress({}: Props): ReactElement {
    return (
        <div className={styles.loading}>
            <Image src='/loading.png' width='48px' height='48px' />
            <h2>Loading...</h2>
        </div>
    )
}
