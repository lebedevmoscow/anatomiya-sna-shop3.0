// Constants
import {
    CATALOG_PRODUCT_LIST_LOADING,
    CATALOG_PRODUCT_LIST_SUCCESS,
    CATALOG_PRODUCT_LIST_ERROR,
    CATALOG_PRODUCT_LIST_SET_EMPTY,
} from './../actions/CatalogProductList'

const initialState = {
    products: [],
    loading: false,
    error: null,
    emptyIndex: 0,
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

        case CATALOG_PRODUCT_LIST_SET_EMPTY: {
            return {
                ...state,
                loading: false,
                error: null,
                products: [],
                emptyIndex: state.emptyIndex + 1,
            }
        }

        default:
            return state
    }
}

export default CatalogProductListReducer
