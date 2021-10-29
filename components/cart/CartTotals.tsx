import React, { ReactElement } from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import styles from '../../styles/Cart.module.scss'
import { IProductContext } from '@constants/Interfaces'


export default function CartTotals({ context }:{context:IProductContext}):ReactElement {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = context;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mt-2 ms-sm-5 ms-md-auto text-capitalize text-end">
                        <Link href='/'>
                            <ClearCartBtn className={`btn text-uppercase mb-3 px-5 ${styles.shaddowedBtn}`}
                                type='button'
                                onClick={() => clearCart()}>
                                clear cart
                            </ClearCartBtn>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>

                        <h5>
                            <span className="text-title">
                                tax :
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h5>

                        <h5>
                            <span className="text-title">
                                total :
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


const ClearCartBtn = styled.button`
    color: var(--bs-danger);
    transition: ease-in-out;
    transition-duration: 600ms;
    border-radius: 16px;
    outline: none;
    border: none;
    &:hover{
color: var(--bs-light);
background: var(--bs-danger);
    }

`