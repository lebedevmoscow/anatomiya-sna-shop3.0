export const CATALOG_SET_PAGE = 'CATALOG_SET_PAGE'

export const catalogSetPage = (page) => async (dispatch) => {
    dispatch({ type: CATALOG_SET_PAGE, payload: page })
}
