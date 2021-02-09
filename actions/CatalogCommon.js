export const CATALOG_SET_PAGE = 'CATALOG_SET_PAGE'
export const CATALOG_SET_FILTERS = 'CATALOG_SET_FILTERS'

export const catalogSetPage = (page) => async (dispatch) => {
    dispatch({ type: CATALOG_SET_PAGE, payload: page })
}

export const catalogSetFilters = (filters) => async (dispatch) => {
    dispatch({ type: CATALOG_SET_FILTERS, payload: filters })
}
