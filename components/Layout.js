import React from 'react';
import NavBar from './NavBar';
import Modal from './Modal';


export default function Layout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
            <Modal />
        </div>
    )
}
