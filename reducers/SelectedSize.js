import {
    SELECTED_SIZE_LOADING,
    SELECTED_SIZE_SUCCESS,
} from './../actions/SelectedSize'

const initialState = {
    selectedSizeSlug: null,
    selectedSizeTitle: null,
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
            }
        }
        default:
            return state
    }
}

export default SelectedSizeReducer
