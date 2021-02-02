import {
    COMPARE_PRODUCT_LIST_INIT,
    COMPARE_PRODUCT_LIST_ADD_TO_LIST_LOADING,
    COMPARE_PRODUCT_LIST_ADD_TO_LIST_ERROR,
    COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS,
    COMPARE_PRODUCT_LIST_ADD_TO_LIST_SUCCESS,
} from './../actions/CompareProductsList'

const initialState = {
    total: [],
}

const CompareProductsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPARE_PRODUCT_LIST_INIT: {
            const TotalClone = JSON.parse(
                localStorage.getItem('CompareProducts')
            )
                ? JSON.parse(localStorage.getItem('CompareProducts'))
                : []

            return {
                ...state,
                total: TotalClone,
            }
        }

        case COMPARE_PRODUCT_LIST_ADD_TO_LIST_SUCCESS: {
            const TotalClone = state.total.concat()
            TotalClone.push(action.payload)
            return {
                ...state,
                total: TotalClone,
            }
        }

        case COMPARE_PRODUCT_LIST_REMOVE_FROM_LIST_SUCCESS: {
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

        case COMPARE_PRODUCT_LIST_ADD_TO_LIST_ERROR: {
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

export default CompareProductsListReducer
