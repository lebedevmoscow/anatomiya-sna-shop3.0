import {
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING,
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR,
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS,
} from './../actions/NewCatalogProductList'

const initialState = {
    loading: false,
    error: null,
    newProducts: [],
}

const CatalogProductListReducer = (state = initialState, action) => {
    switch (action.type) {
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
                error: action.payload,
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
