import * as Actions from '../constants/Actions'
import { IProduct } from '../constants/Interfaces';

// interface IState {
//     products?: [IProduct];
//     product?: IProduct;
//     error?: any;

// }

const initalState = {
    products: [],
    detailedProduct: undefined,
    isModalOpen: false,
    error: undefined,
}

interface IAction {
    type: string;
    payload: any;
}

export default (state = initalState, action: IAction) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            return {
                ...state, products: action.payload
            };
        case Actions.GET_PRODUCT:
            return {
                ...state, detailProduct: action.payload
            };
        case Actions.ADD_PRODUCT:
            return {
                ...state, products: [action.payload, ...state.products]
            };
        case Actions.DELETE_PRODUCT:
            return {
                ...state, products: state.products.filter((product: IProduct) => product._id !== action.payload)
            };
        case Actions.EDIT_PRODUCT:
            return {
                ...state, products: state.products.map((product: IProduct) =>
                    product._id === action.payload._id ? action.payload : product)
            };
        default:
            return state;
    }
}