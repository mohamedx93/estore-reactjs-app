import * as Actions from '../constants/Actions'
export default (state, action) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            return {
                ...state, products:action.payload
            };
            // case Actions.GET_PRODUCT:
            //     return;
        case Actions.ADD_PRODUCT:
            return;
        case Actions.DELETE_PRODUCT:
            return;
        case Actions.EDIT_PRODUCT:
            return;
        default:
            return state;
    }
}