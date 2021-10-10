import React, { useContext } from 'react'
import styled from "styled-components";
import { ProductContext } from '../context';
import { ButtonContainer } from './Button';
import Link from "next/link";
import styles from '../styles/Layout.module.scss'




export default function Modal() {
    const context = useContext(ProductContext);
    const { modalOpen, closeModal } = context;
    const { id, img, title, price, inCart } = context.detailedProduct;
    if (!modalOpen) {
        return null;
    }
    else {
        return (
            <ModalContainer className={styles.modal}>
                <div className="container">
                    <div className="row">
                        <div id='overlay' className={`mx-auto col-10 col-md-6 col-lg-4 text-center text-capitalize p-5 ${styles.overlay}`} >
                            <h5>item added to the cart</h5>
                            <img src={img} alt="modal product" className="img-fluid" />
                            <h5>{title}</h5>
                            <h5 className="text-muted">price : ${price}</h5>
                            <Link href='/'>
                                <ButtonContainer className={styles.modalBtnStore} onClick={() => {
                                    closeModal();
                                }}>
                                    store
                                </ButtonContainer>
                            </Link>
                            <Link href='/cart'>
                                <ButtonContainer className={styles.modalBtnCart} cart onClick={() => { closeModal(); }} >
                                go to the cart
                                </ButtonContainer>
                            </Link>
                    </div>
                </div>
                </div>
            </ModalContainer >
        );
    }

}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: #323234B0;
display: flex;
align-items: center;
justify-content: center; 
 #overlay{
     background: var(--dark-gradient-inv);
     border-radius: 1.4rem;
 }
`