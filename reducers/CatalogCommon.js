import { CATALOG_SET_PAGE } from './../actions/CatalogCommon'

const initialState = {
    page: 1,
}

const CatalogCommonReducer = (state = initialState, action) => {
    switch (action.payload) {
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
