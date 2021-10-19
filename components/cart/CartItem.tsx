import React from 'react'
import styles from '../../styles/Cart.module.scss'
import { IProduct } from '@constants/Interfaces';
export default function CartItem({ item, value }:{item: IProduct, cart: IProduct[]}) {
    const { _id, title, price, total, img, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-3 text-capitalize text-center">
            <div className="col-10 col-lg-2 m-auto">
                <img src={img} alt="cart item" style={{ width: '5rem', height: '5rem' }} className='img-fluid' />
            </div>
            <div className="col-10 col-lg-2 m-auto">
                <span className="d-lg-none">Product : </span> {title}
            </div>
            <div className="col-10 col-lg-2 m-auto">
                <span className="d-lg-none">Price : </span> ${price}

            </div>
            <div className="col-10 col-lg-2 mx-auto my-2 my-lg-2">
                <div className="m-auto">
                    <span className={`btn ${styles.btnBlack} mx-1`} onClick={() => { decrement(_id||-1) }}>-</span>
                    <span className={`btn ${styles.qte} mx-2`} >{count}</span>
                    <span className={`btn ${styles.btnBlack} mx-1`} onClick={() => { increment(_id||-1) }}>+</span>
                </div>
            </div>
            <div className="col-10 col-lg-2 m-auto">
                <div className={styles.cartIcon} onClick={() => removeItem(_id||-1)}>
                    <i className="fas fa-trash"></i>
                </div>

            </div>
            <div className="col-10 col-lg-2 m-auto">
                <strong>item total : $ {total}</strong>

            </div>
        </div >
    )
}
