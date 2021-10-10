import React, { useContext } from "react";
import styled from "styled-components";
import styles from '../styles/Product.module.scss'
import Link from "next/link";
import { ProductContext } from "../context";
import { ProductInterface } from '../context';



export default function Product({ product  }: { product : ProductInterface }) {
    const context = useContext(ProductContext)
    const { id, title, img, price, inCart } = product;
    return (
        <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
            <div className={`${styles.card}`}>
                <div className="img-container p-5" onClick={() => context.handleDetail(id||-1)}>
                    <Link href="/details" >
                        <img src={img} alt='product' className="card-img-top" />
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true : false}
                        onClick={() => {
                            context.addToCart(id||-1);
                            context.openModal(id||-1);
                        }}>
                        {inCart ? (
                            <p className="text-capitalize mb-0 ">in cart</p>) :
                            (<i className='fas fa-cart-plus' aria-hidden />)}
                    </button>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">{title}</p>
                    <h5 className="text-blue fst-italic mb-0">
                        <span className="mr-1">$</span>
                        {price}
                    </h5>
                </div>
            </div>
        </ProductWrapper>
    );
}



const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 0.3s linear;
    }
    .card-footer{
        border-radius: 0 0 18px  18px  ;
        border-top-color: transparent;
        background-color: transparent; 
        transition: all 0.3s linear;
    }
    &:hover{
        .card{
            /* border: 0.04rem sold rgba(0,0,0,0.2); */
            /* box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.2); */
        }
        .card-footer{
            background: var(--mainBlue);
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 0.3s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
    .cart-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        /* background: var(--lightBlue); */
        /* border: none; */
        /* color: var(--mainWhite); */
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: transform 0.3s linear;
    }
    .img-container:hover .cart-btn{
        transform: translate(0%, 0%);
    }
    /* .cart-btn:hover {
        color: var(--mainBlue);
        cursor: pointer;
    } */

`
