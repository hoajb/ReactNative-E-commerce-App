import { Dispatch } from 'redux';
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from '../actionTypes';

// Define action types
export interface FetchProductsRequestAction {
    type: typeof FETCH_PRODUCTS_REQUEST;
}

export interface FetchProductsSuccessAction {
    type: typeof FETCH_PRODUCTS_SUCCESS;
    payload: Product[];
}

export interface FetchProductsFailureAction {
    type: typeof FETCH_PRODUCTS_FAILURE;
    payload: string;
}

export type FetchProductsAction =
    | FetchProductsRequestAction
    | FetchProductsSuccessAction
    | FetchProductsFailureAction;


export const fetchProducts = () => async (dispatch: Dispatch<FetchProductsAction>) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            // throw new Error('Failed to fetch products');
            dispatch({
                type: FETCH_PRODUCTS_FAILURE,
                payload: 'Failed to fetch products',
            });
        }

        const data = await response.json();

        // console.log('Okhttp:', `DATA: ${data.products}`);

        dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: data.products,
        });
    } catch (error: any) {
        if (error instanceof TypeError) {
            // Handle network-related errors (e.g., if the server is unreachable)
            console.error('Network error:', error.message);
        } else if (error instanceof SyntaxError) {
            // Handle JSON parsing errors
            console.error('JSON parsing error:', error.message);
        } else {
            // Handle other generic errors
            console.error('Error:', error.message);
        }

        dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            payload: error.message,
        });
    }
}