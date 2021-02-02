// Constants
import {
    CATALOG_PRODUCT_LIST_LOADING,
    CATALOG_PRODUCT_LIST_SUCCESS,
    CATALOG_PRODUCT_LIST_ERROR,
} from './../actions/CatalogProductList'

const initialState = {
    products: [],
    loading: false,
    error: null,
}

const CatalogProductListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATALOG_PRODUCT_LIST_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case CATALOG_PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                products: action.payload,
            }
        }

        case CATALOG_PRODUCT_LIST_ERROR: {
            return {
                ...state,
                loading: false,
                products: action.payload,
            }
        }
        default:
            return state
    }
}

export default CatalogProductListReducer
