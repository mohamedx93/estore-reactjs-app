import React, { ReactElement, useContext  } from 'react'
import Product from './Product'
import Title from './ui/Title';
//import { storeProducts } from '../data'
import { ProductContext } from 'context'


export default function ProductList():ReactElement {
    //const [products, setProducts] = useState(storeProducts);
    const context = useContext(ProductContext)


    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products" />
                    <div className="row">

                        {context.products.map(product => { return <Product key={product._id} product={product} /> })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
