import {
    INDEX_PAGE_MAIN_FILTER_ERROR,
    INDEX_PAGE_MAIN_FILTER_LOADING,
    INDEX_PAGE_MAIN_FILTER_SUCCESS,
} from './../actions/IndexPageMainFilter'

const initialState = {
    count: null,
    loading: false,
    error: null,
}

const IndexPageMainFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INDEX_PAGE_MAIN_FILTER_LOADING:
            return {
                ...state,
                count: null,
                loading: true,
                error: null,
            }
        case INDEX_PAGE_MAIN_FILTER_ERROR:
            return {
                ...state,
                count: null,
                loading: false,
                error: action.payload,
            }
        case INDEX_PAGE_MAIN_FILTER_SUCCESS:
            return {
                ...state,
                count: action.payload,
                loading: false,
                error: null,
            }
        default:
            return state
    }
}

export default IndexPageMainFilterReducer
