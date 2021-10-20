import React, { useContext, useState, useEffect } from 'react'
import { ProductContext, IProductContext, IProduct } from '@constants/Interfaces'
import Link from 'next/link';
import { ButtonContainer } from '../components/Button'


export default function Details(): React.ReactElement {
    const context:IProductContext = useContext(ProductContext);

    const [detailProduct, setDetailProduct] = useState<IProduct>({ ...context.detailedProduct });

    useEffect(() => {
        setDetailProduct({ ...context.detailedProduct })
    }, [context]);
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{detailProduct.title}</h1>
                </div>
            </div>
            {/* Product Info */}
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={detailProduct.img} alt="Product" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model: {detailProduct.title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by: <span>{detailProduct.company}</span></h4>
                    <h4 className="text-blue"><strong>price : <span>$</span>{detailProduct.price}</strong></h4>
                    <p className="text-capitalize fw-bold mt-3 mb-0">some info about the product</p>
                    <p className="text-muted lead">{detailProduct.info}</p>
                    <div className="">
                        <Link href="/">
                            <ButtonContainer className='btn-neumorph'>
                                back to product
                            </ButtonContainer>
                        </Link>
                        <ButtonContainer disabled={detailProduct.inCart}
                            onClick={() => {
                                context.addToCart(detailProduct.id||-1);
                                context.openModal(detailProduct.id||-1);
                            }}>
                            {detailProduct.inCart ? "inCart" : "add to Cart"}
                        </ButtonContainer>
                    </div>
                </div>
            </div>
        </div>



    )
}
