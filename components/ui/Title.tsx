import React, { ReactElement } from 'react';
import styles from '../styles/Title.module.scss';

interface Props {
    name?: string, title?: string
}

export default function Title({ name, title }: Props):ReactElement {
    return (
        <div className='row no-background'>
            <div className={`col-10 mx-auto my-2 text-center no-background ${styles.textTitle}`}>
                <h1 className="text-capitalize font-weight-bold">
                    <strong className={styles.textBlue}>{name} {title}</strong>
                </h1>
            </div>
        </div>
    )
}
