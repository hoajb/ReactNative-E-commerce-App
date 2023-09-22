export interface FetchProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

export const initialFetchProductsState: FetchProductsState = {
    products: [],
    loading: false,
    error: null,
};