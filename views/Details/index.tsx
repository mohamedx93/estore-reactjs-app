import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { IProduct, IProductContext } from '@constants/Interfaces';
import { ProductContext, LayoutContext } from 'context';
import Link from 'next/link';
import Button from '@components/ui/Button'
import styles from '@styles/Components.module.scss'



export default function Details(): ReactElement {
    const context: IProductContext = useContext(ProductContext);

    const [detailProduct, setDetailProduct] = useState<IProduct>({ ...context.detailedProduct });
    const { setIsAuthView } = useContext(LayoutContext);


    useEffect(() => {
        setDetailProduct({ ...context.detailedProduct })
        setIsAuthView(false);
    }, [context, setIsAuthView]);
    return (
        <div className="container py-5" >
            <div className="row" >
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5" >
                    <h1>{detailProduct.title} </h1>
                </div>
            </div>
            {/* Product Info */}
            <div className="row" >
                <div className="col-10 mx-auto col-md-6 my-3" >
                    <img src={detailProduct.img} alt="Product" className="img-fluid" />
                </div>
                < div className="col-10 mx-auto col-md-6 my-3 text-capitalize" >
                    <h2>model: {detailProduct.title} </h2>
                    < h4 className="text-title text-uppercase text-muted mt-3 mb-2" > made by: <span>{detailProduct.company} </span></h4 >
                    <h4 className="text-blue" > <strong>price : <span>$ </span>{detailProduct.price}</strong > </h4>
                    < p className="text-capitalize fw-bold mt-3 mb-0" > some info about the product </p>
                    < p className="text-muted lead" > {detailProduct.info} </p>
                    < div className="" >
                        <Link href="/" >
                            <Button className={styles.buttonNeumorph} >
                                back to product
                            </Button>
                        </Link>
                        < Button className={styles.buttonNeumorph} disabled={detailProduct.inCart}
                            onClick={() => {
                                context.addToCart(detailProduct._id || -1);
                                context.openModal(detailProduct._id || -1);
                            }}>
                            {detailProduct.inCart ? "inCart" : "add to Cart"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
