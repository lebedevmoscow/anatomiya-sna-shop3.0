import {
    SELECTED_SIZE_LOADING,
    SELECTED_SIZE_SUCCESS,
    SELECTED_SIZE_SET_AMOUNT,
} from './../actions/SelectedSize'

const initialState = {
    selectedSizeSlug: null,
    selectedSizeTitle: null,
    selectedSizeId: null,
    amount: null,
}

const SelectedSizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_SIZE_LOADING:
            return state
        case SELECTED_SIZE_SUCCESS: {
            return {
                ...state,
                selectedSizeSlug: action.payload.SizeSlug,
                selectedSizeTitle: action.payload.SizeTitle,
                selectedSizeId: action.payload.SizeID,
            }
        }
        case SELECTED_SIZE_SET_AMOUNT: {
            return {
                ...state,
                amount: action.payload,
            }
        }
        default:
            return state
    }
}

export default SelectedSizeReducer
