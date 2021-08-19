import React, { useContext } from 'react'
import styled from 'module'
import { ProductContext } from '../Context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';



export default function Modal() {
    const context = useContext(ProductContext);
    const { modalOpen, closeModal } = context;
    const { id, img, price, inCart } = context.detailedProduct;

    if (!modalOpen) {
        return null;
    }
    else {
        <ModalContainer>
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-10 col-md-6 col-lg-4 text-center text-capitalize">
                        <h5>item added to the cart</h5>
                    </div>
                </div>
            </div>
        </ModalContainer>
    }

}

const ModalContainer = styled.div`


`