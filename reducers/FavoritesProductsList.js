// Constants
import {
    FAVORITES_PRODUCT_LIST_ADD_TO_LIST_LOADING,
    FAVORITES_PRODUCT_LIST_ADD_TO_LIST_ERROR,
    FAVORITES_PRODUCT_LIST_ADD_TO_LIST_SUCCESS,
    FAVORITES_PRODUCT_LIST_INIT,
    FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS,
} from './../actions/FavoritesProductsList'

const initialState = {
    total: [],
}

const FavoritesProductsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITES_PRODUCT_LIST_INIT: {
            const TotalClone = JSON.parse(
                localStorage.getItem('FavoritesProducts')
            )
                ? JSON.parse(localStorage.getItem('FavoritesProducts'))
                : []
            return {
                ...state,
                total: TotalClone,
            }
        }

        case FAVORITES_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS: {
            const TotalClone = state.total.concat()
            const util = []
            TotalClone.map((item) => {
                if (item.ProductId !== action.payload.ProductId) util.push(item)
            })
            return {
                ...state,
                total: util,
            }
        }

        case FAVORITES_PRODUCT_LIST_ADD_TO_LIST_SUCCESS: {
            const TotalClone = state.total.concat()
            TotalClone.push(action.payload)
            return {
                ...state,
                total: TotalClone,
            }
        }

        default:
            return state
    }
}

export default FavoritesProductsListReducer
