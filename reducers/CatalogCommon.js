import {
    CATALOG_SET_PAGE,
    CATALOG_SET_FILTERS,
    CATALOG_SET_IDS,
    CATALOG_SET_TOP_FILTER,
    CATALOG_SET_TOP_RESET,
    CATALOG_SET_TOP_FILTER_DESKTOP,
} from './../actions/CatalogCommon'

const initialState = {
    page: 1,
    filters: null,
    ids: [],
    topfilter: [],
    desktopTopFilter: [],
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
        default: {
            return state
        }
    }
}

export default CatalogCommonReducer
