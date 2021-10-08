import React from 'react'
import styles from '../../styles/Cart.module.scss'
export default function CartItem({ item, value }) {
    const { id, title, price, total, img, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 col-lg-2 mx-auto">
                <img src={img} alt="cart item" style={{ width: '5rem', height: '5rem' }} className='img-fluid' />
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">Product : </span> {title}
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <span className="d-lg-none">Price : </span> ${price}

            </div>
            <div className="col-10 col-lg-2 mx-auto my-2 my-lg-2">
                <div className="d-flex justify-content-center align-items-center">
                    <span className={`btn ${styles.btnBlack} mx-1`} onClick={() => { decrement(id) }}>-</span>
                    <span className={`btn ${styles.qte} mx-2`} >{count}</span>
                    <span className={`btn ${styles.btnBlack} mx-1`} onClick={() => { increment(id) }}>+</span>
                </div>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <div className={styles.cartIcon} onClick={() => removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>

            </div>
            <div className="col-10 col-lg-2 mx-auto">
                <strong>item total : $ {total}</strong>

            </div>
        </div >
    )
}
