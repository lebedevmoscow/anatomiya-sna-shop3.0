import {
    CATALOG_SET_PAGE,
    CATALOG_SET_FILTERS,
} from './../actions/CatalogCommon'

const initialState = {
    page: 1,
    filters: null,
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
        default: {
            return state
        }
    }
}

export default CatalogCommonReducer
