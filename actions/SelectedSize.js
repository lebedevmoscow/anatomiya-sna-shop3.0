// Constants
export const SELECTED_SIZE_LOADING = 'SELECTED_SIZE_LOADING'
export const SELECTED_SIZE_SUCCESS = 'SELECTED_SIZE_SUCCESS'
export const SELECTED_SIZE_ERROR = 'SELECTED_SIZE_ERROR'

export const SelectSize = (SizeSlug, SizeTitle) => async (dispatch) => {
    dispatch({ type: SELECTED_SIZE_LOADING })

    dispatch({ type: SELECTED_SIZE_SUCCESS, payload: { SizeSlug, SizeTitle } })
}
