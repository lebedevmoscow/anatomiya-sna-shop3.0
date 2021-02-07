import {
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_LOADING,
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_ERROR,
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SUCCESS,
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY,
} from './../actions/NewCatalogProductList'

const initialState = {
    loading: false,
    error: null,
    newProducts: [],
    emptyIndex: 1,
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

        case CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY: {
            return {
                ...state,
                loading: false,
                error: null,
                newProducts: [],
                emptyIndex: state.emptyIndex + 1,
            }
        }

        default:
            return state
    }
}

export default CatalogProductListReducer
