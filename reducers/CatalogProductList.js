// Constants
import {
    CATALOG_PRODUCT_LIST_LOADING,
    CATALOG_PRODUCT_LIST_SUCCESS,
    CATALOG_PRODUCT_LIST_ERROR,
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING,
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR,
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS,
} from './../actions/CatalogProductList'

const initialState = {
    products: [],
    loading: false,
    error: null,
    newProducts: [],
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

        case CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }

        case CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR: {
            return {
                ...state,
                loading: false,
                products: action.payload,
            }
        }

        case CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS: {
            return {
                ...state,
                error: null,
                loading: false,
                newProducts: { ...action.payload },
            }
        }

        default:
            return state
    }
}

export default CatalogProductListReducer
