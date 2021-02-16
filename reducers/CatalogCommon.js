import {
    CATALOG_SET_PAGE,
    CATALOG_SET_FILTERS,
    CATALOG_SET_IDS,
    CATALOG_SET_TOP_FILTER,
    CATALOG_SET_TOP_RESET,
    CATALOG_SET_TOP_FILTER_DESKTOP,
    CATALOG_SET_PRICE,
    CATALOG_SET_COLROS,
    CATALOG_SET_SELECTED_ACTIVE,
    CATALOG_SET_AMOUNT,
} from './../actions/CatalogCommon'

const initialState = {
    page: 1,
    filters: null,
    ids: [],
    topfilter: [],
    desktopTopFilter: [],
    price: null,
    colors: [],
    selectedActive: [],
    amount: null,
}

const CatalogCommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATALOG_SET_FILTERS: {
            return {
                ...state,
                filters: action.payload.concat(),
            }
        }
        case CATALOG_SET_PAGE: {
            return {
                ...state,
                page: action.payload,
            }
        }
        case CATALOG_SET_IDS: {
            return {
                ...state,
                ids: action.payload,
            }
        }
        case CATALOG_SET_TOP_FILTER: {
            return {
                ...state,
                topfilter: action.payload,
            }
        }
        case CATALOG_SET_TOP_RESET: {
            return {
                ...state,
                page: 1,
                filters: null,
                ids: [],
                topfilter: [],
            }
        }
        case CATALOG_SET_TOP_FILTER_DESKTOP: {
            return {
                ...state,
                desktopTopFilter: action.payload,
            }
        }
        case CATALOG_SET_PRICE: {
            return {
                ...state,
                price: action.payload,
            }
        }
        case CATALOG_SET_COLROS: {
            return {
                ...state,
                colors: action.payload,
            }
        }
        case CATALOG_SET_SELECTED_ACTIVE: {
            return {
                ...state,
                selectedActive: action.payload,
            }
        }
        case CATALOG_SET_AMOUNT: {
            return {
                ...state,
                amount: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default CatalogCommonReducer
