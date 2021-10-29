import React, { ReactNode, useContext } from 'react';
import NavBar from './NavBar';
import Modal from './Modal';
import Script from 'next/script';
import { AuthContext } from '@context/Layout';

interface Props{
    children: ReactNode,
    
}

export default function Layout({ children }: Props) {
    const { isAuthView } = useContext(AuthContext);
    return (
        <>
            <Script
                src="https://kit.fontawesome.com/031ae43889.js"
                crossOrigin="anonymous"
                strategy='beforeInteractive'
            />
            {!isAuthView && <NavBar />}
            {children}
            <Modal />
        </>
    )
}
