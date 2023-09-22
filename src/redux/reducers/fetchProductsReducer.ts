import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actionTypes';
import { FetchProductsAction, FetchProductsFailureAction, FetchProductsSuccessAction } from '../actions/fetchProductsActions';
import { FetchProductsState, initialFetchProductsState } from '../states/fetchProductsState';


export default (state: FetchProductsState = initialFetchProductsState, action: FetchProductsAction) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                items: [...state.products],
                error: null
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: (action as FetchProductsSuccessAction).payload,
                error: null
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: (action as FetchProductsFailureAction).payload,
            };
        default:
            return state;
    }
};
