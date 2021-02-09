import {
    CATALOG_SET_PAGE,
    CATALOG_SET_FILTERS,
} from './../actions/CatalogCommon'

const initialState = {
    page: 1,
    filters: null,
}

const CatalogCommonReducer = (state = initialState, action) => {
    switch (action.payload) {
        case CATALOG_SET_PAGE: {
            return {
                ...state,
                page: action.payload,
            }
        }
        case CATALOG_SET_FILTERS: {
            return {
                ...state,
                filters: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default CatalogCommonReducer
