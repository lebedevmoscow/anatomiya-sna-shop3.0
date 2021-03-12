// Constants
import {
    PRODUCT_PAGE_SIZE_CHANGED,
    PRODUCT_PAGE_SET_DATA,
} from './../actions/ProductPage'

const initialState = {
    selectedSizeId: null,
    selectedId: null,
    selectedValue: null,
    selectedTitle: null,
    data: null,
}

const ProductPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_PAGE_SIZE_CHANGED: {
            return {
                ...state,
                selectedSizeId: action.payload.selectedSizeId,
                selectedId: action.payload.selectedId,
                selectedValue: action.payload.selectedValue,
                selectedTitle: action.payload.selectedTitle,
            }
        }

        case PRODUCT_PAGE_SET_DATA: {
            return {
                ...state,
                data: action.payload,
            }
        }

        default: {
            return state
        }
    }
}

export default ProductPageReducer
