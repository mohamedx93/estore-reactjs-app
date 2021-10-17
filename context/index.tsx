import React, { useEffect, useState, useReducer } from 'react'
import { storeProducts, detailProduct } from './data'
import { IProduct, IProductContext } from '../constants/Interfaces'
import Reducer from './Reducer.tsx';


const createDefaultProduct: () => IProduct = () => {

    return {
        id: 0,
        title: '',
        img: '',
        price: 0,
        company: '',
        info: '',
        inCart: false,
        count: 0,
        total: 0
    };
}


const createDefaultContext: () => IProductContext = () => {
    return {
        products: [],
        setProducts: () => { } ,
        detailedProduct: createDefaultProduct(),
        handleDetail: () => { },
        cart: [],
        addToCart: () => { },
        modalOpen: false,
        modalProduct: createDefaultProduct(),
        openModal: () => { },
        closeModal: () => { },
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        increment: () => { },
        decrement: () => { },
        removeItem: () => { },
        clearCart: () => { },
    }
}

export const ProductContext = React.createContext<IProductContext>(createDefaultContext())
//Provider

//Consumer



function ProductProvider({ children }: { children: React.ReactNode }): React.ReactElement {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [detailedProduct, setDetailedProduct] = useState<IProduct | undefined>({ ...detailProduct });
    const [cart, setCart] = useState<IProduct[]>([]); //useState([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [modalProduct, setModalProduct] = useState<IProduct | undefined>({ ...detailProduct })
    const [cartSubTotal, setCartSubTotal] = useState<number>(0);
    const [cartTax, setCartTax] = useState<number>(0);
    const [cartTotal, setCartTotal] = useState<number>(0);



    // const cloneProducts: () => IProduct[] = () => {
    //     let tempProducts: IProduct[] = [];
    //     storeProducts.forEach((item: IProduct) => {
    //         tempProducts = [...tempProducts, { ...item }]
    //     });
    //     return tempProducts;
    // }

    // useEffect(() => {
    //     let tempProducts = cloneProducts();
    //     setProducts(tempProducts);
    // }, [])
    useEffect(() => {
        addTotals();
    }, [cart])

    const getItem: (id: number) => IProduct | undefined = (id) => {
        return products.find((item: IProduct) => item._id === id);
    }
    const handleDetail: (id: number) => void = (id) => {
        const product: IProduct = getItem(id) || createDefaultProduct();
        setDetailedProduct({ ...product });
    }
    const addToCart: (id: number) => void = (id) => {
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id) || createDefaultProduct());
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        setProducts(tempProducts);
        setCart([...cart, product]);
        handleDetail(product._id || -1);
    }

    const openModal: (id: number) => void = (id) => {
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    }

    const closeModal: () => void = () => {
        setModalOpen(false);
    }

    const increment: (id: number) => void = (id) => {

        const tempCart = [...cart];
        const selectedProduct: IProduct = tempCart.find(item => item._id === id) || createDefaultProduct();
        const prevCount = selectedProduct.count || 0;
        const prevTotal = selectedProduct.total || 0;
        const price = selectedProduct.price || 0;
        selectedProduct.count = prevCount + 1;
        selectedProduct.total = prevTotal + price;
        setCart(tempCart);
    }

    const decrement: (id: number) => void = (id) => {
        const tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item._id === id) || createDefaultProduct();
        const prevCount = selectedProduct.count || 0;
        const prevTotal = selectedProduct.total || 0;
        const price = selectedProduct.price || 0;
        selectedProduct.count = prevCount - 1;
        if (selectedProduct.count === 0) removeItem(id);
        else {
            selectedProduct.total = prevTotal - price;
            setCart(tempCart);
        }
    }

    const removeItem: (id: number) => void = (id) => {
        const tempProducts = [...products];
        let tempCart = [...cart];
        tempCart = tempCart.filter(item => item._id !== id);
        const removedProduct = tempProducts[tempProducts.indexOf(getItem(id) || createDefaultProduct())];
        removedProduct.count = 0;
        removedProduct.inCart = false;
        removedProduct.total = 0;
        setCart(tempCart);
        setProducts(tempProducts);

    }

    const clearCart: () => void = () => {
        setCart([]);
        // setProducts(cloneProducts());
    }

    const addTotals: () => void = () => {
        let subTotal = 0;
        cart.map(item => {
            const total = item.total || 0;
            return (subTotal += total);
        });
        const tax = parseFloat((subTotal * 0.1).toFixed(2))
        const total = subTotal + tax;
        setCartSubTotal(subTotal);
        setCartTax(tax);
        setCartTotal(total);
    }

    return (
        <ProductContext.Provider value={{
            products, setProducts, detailedProduct, handleDetail, cart, addToCart, modalOpen, modalProduct, openModal, closeModal, cartSubTotal, cartTax, cartTotal, increment, decrement, removeItem, clearCart
        }}>
            {children}
        </ProductContext.Provider>
    )
}

// const ProductConsumer = ProductContext.Consumer;
export { ProductProvider }

