import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import Modal from './Modal';
import Script from 'next/script';

interface Props{
    children: ReactNode,
    // pageProps: any,
}

export default function Layout({ children }: Props) {
    // useEffect(()=>{console.log(styles)},[])
    return (
        <>
            <Script
                src="https://kit.fontawesome.com/031ae43889.js"
                crossOrigin="anonymous"
                strategy='beforeInteractive'
            />
            <NavBar/>
            {children}
            <Modal />
        </>
    )
}
