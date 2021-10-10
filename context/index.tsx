import React, { useEffect, useState } from 'react'
import { storeProducts, detailProduct } from './data'

export interface ProductInterface {
    id?: number;
    title?: string;
    img?: string;
    price?: number;
    company?: string;
    info?: string;
    inCart?: boolean;
    count?: number;
    total?: number
}

const createDefaultProduct: () => ProductInterface = () => {

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

export interface ProductContextInterface {
    products: ProductInterface[];
    detailedProduct: ProductInterface | undefined;
    handleDetail: (id: number) => void;
    cart: ProductInterface[];
    addToCart: (id: number) => void;
    modalOpen: boolean;
    modalProduct: ProductInterface | undefined;
    openModal: (id: number) => void;
    closeModal: (id: number) => void;
    cartSubTotal: number;
    cartTax: number;
    cartTotal: number;
    increment: (id: number) => void;
    decrement: (id: number) => void;
    removeItem: (id: number) => void;
    clearCart: () => void
}

const createDefaultContext: () => ProductContextInterface = () => {
    return {
        products: [],
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

export const ProductContext = React.createContext<ProductContextInterface>(createDefaultContext())
//Provider

//Consumer



function ProductProvider({ children }: { children: React.ReactNode }): React.ReactElement {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [detailedProduct, setDetailedProduct] = useState<ProductInterface | undefined>({ ...detailProduct });
    const [cart, setCart] = useState<ProductInterface[]>([]); //useState([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [modalProduct, setModalProduct] = useState<ProductInterface | undefined>({ ...detailProduct })
    const [cartSubTotal, setCartSubTotal] = useState<number>(0);
    const [cartTax, setCartTax] = useState<number>(0);
    const [cartTotal, setCartTotal] = useState<number>(0);



    const cloneProducts: () => ProductInterface[] = () => {
        let tempProducts: ProductInterface[] = [];
        storeProducts.forEach((item: ProductInterface) => {
            tempProducts = [...tempProducts, { ...item }]
        });
        return tempProducts;
    }

    useEffect(() => {
        let tempProducts = cloneProducts();
        setProducts(tempProducts);
    }, [])
    useEffect(() => {
        addTotals();
    }, [cart])

    const getItem: (id: number) => ProductInterface | undefined = (id) => {
        return products.find((item: ProductInterface) => item.id === id);
    }
    const handleDetail: (id: number) => void = (id) => {
        const product: ProductInterface = getItem(id) || createDefaultProduct();
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
        handleDetail(product.id || -1);
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
        const selectedProduct: ProductInterface = tempCart.find(item => item.id === id) || createDefaultProduct();
        const prevCount = selectedProduct.count || 0;
        const prevTotal = selectedProduct.total || 0;
        const price = selectedProduct.price || 0;
        selectedProduct.count = prevCount + 1;
        selectedProduct.total = prevTotal + price;
        setCart(tempCart);
    }

    const decrement: (id: number) => void = (id) => {
        const tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id) || createDefaultProduct();
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
        tempCart = tempCart.filter(item => item.id !== id);
        const removedProduct = tempProducts[tempProducts.indexOf(getItem(id) || createDefaultProduct())];
        removedProduct.count = 0;
        removedProduct.inCart = false;
        removedProduct.total = 0;
        setCart(tempCart);
        setProducts(tempProducts);

    }

    const clearCart: () => void = () => {
        setCart([]);
        setProducts(cloneProducts());
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
            products, detailedProduct, handleDetail, cart, addToCart, modalOpen, modalProduct, openModal, closeModal, cartSubTotal, cartTax, cartTotal, increment, decrement, removeItem, clearCart
        }}>
            {children}
        </ProductContext.Provider>
    )
}

// const ProductConsumer = ProductContext.Consumer;
export { ProductProvider }

