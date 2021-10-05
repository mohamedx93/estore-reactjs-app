import React from 'react';
import NavBar from './NavBar';
import Modal from './Modal';
import Script from 'next/script'

export default function Layout({ children }) {
    return (
        <>
            <Script
                src="https://kit.fontawesome.com/031ae43889.js"
                crossOrigin="anonymous"
                strategy='beforeInteractive'
            />
            <NavBar />
            {children}
            <Modal />
        </>
    )
}
