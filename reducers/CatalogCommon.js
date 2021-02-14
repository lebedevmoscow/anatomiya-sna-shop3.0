import {
    CATALOG_SET_PAGE,
    CATALOG_SET_FILTERS,
    CATALOG_SET_IDS,
    CATALOG_SET_TOP_FILTER,
} from './../actions/CatalogCommon'

const initialState = {
    page: 1,
    filters: null,
    ids: [],
    topfilter: [],
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
        default: {
            return state
        }
    }
}

export default CatalogCommonReducer
