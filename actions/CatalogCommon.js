export const CATALOG_SET_PAGE = 'CATALOG_SET_PAGE'
export const CATALOG_SET_FILTERS = 'CATALOG_SET_FILTERS'
export const CATALOG_SET_IDS = 'CATALOG_SET_IDS'
export const CATALOG_SET_TOP_FILTER = 'CATALOG_SET_TOP_FILTER'
export const CATALOG_SET_TOP_FILTER_DESKTOP = 'CATALOG_SET_TOP_FILTER_DESKTOP'
export const CATALOG_SET_TOP_RESET = 'CATALOG_SET_TOP_RESET'

export const catalogSetPage = (page) => async (dispatch) => {
    dispatch({ type: CATALOG_SET_PAGE, payload: page })
}

export const catalogSetFilters = (filters) => async (dispatch) => {
    dispatch({ type: CATALOG_SET_FILTERS, payload: filters })
}

export const catalogSetTopFilter = (filters) => async (dispatch) => {
    dispatch({ type: CATALOG_SET_TOP_FILTER, payload: filters })
}
