import React from 'react';
import styles from '../styles/Title.module.scss';


export default function Title({ name, title }) {
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
