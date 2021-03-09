// Constants
import {
    CATALOG_SET_PAGE,
    CATALOG_SET_SIZE_ID,
    CATALOG_SET_FILTERS,
    CATALOG_SET_SELECT,
    CATALOG_SET_PRICE,
    CATALOG_SET_COLORS,
    CATALOG_SET_SORT,
    CATALOG_SET_NEW,
    CATALOG_SET_ALL,
    CATALOG_SET_UPDATE_LIST,
    CATALOG_SET_AMOUNT,
    CATALOG_SET_LOADING,
    CATALOG_SET_DESKTOP_VIEWTYPE,
    CATALOG_SET_MOBILE_VIEWTYPE,
    CATALOG_SET_SORT_MOBILE,
    CATALOG_SET_PRELOAD_GET_PARAMS,
} from './../catalog_actions_rebuild/catalog'

const initialState = {
    page: 1,
    sizeId: null,
    price: null,
    select: [],
    filters: [],
    colors: [],
    sort: [],
    sortMobile: [],
    update_list: 0,
    amount: null,
    loading: false,
    desktopViewType: 'several',
    mobileViewType: 'single',
    getParams: [],
    all: [],
    new: {},
}

const CatalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATALOG_SET_PAGE: {
            return {
                ...state,
                page: action.payload,
            }
        }
        case CATALOG_SET_SIZE_ID: {
            return {
                ...state,
                sizeId: action.payload,
            }
        }
        case CATALOG_SET_FILTERS: {
            return {
                ...state,
                filters: action.payload,
            }
        }
        case CATALOG_SET_SELECT: {
            return {
                ...state,
                select: action.payload,
            }
        }
        case CATALOG_SET_PRICE: {
            return {
                ...state,
                price: action.payload,
            }
        }
        case CATALOG_SET_COLORS: {
            return {
                ...state,
                colors: action.payload,
            }
        }
        case CATALOG_SET_SORT: {
            return {
                ...state,
                sort: action.payload,
            }
        }
        case CATALOG_SET_NEW: {
            const prev = state.all.concat()
            prev.push(prev)

            return {
                ...state,
                new: action.payload,
                all: prev,
            }
        }
        case CATALOG_SET_UPDATE_LIST: {
            return {
                ...state,
                all: [],
                new: [],
                update_list: state.update_list + 1,
            }
        }
        case CATALOG_SET_ALL: {
            return {
                ...state,
                all: action.payload,
            }
        }
        case CATALOG_SET_AMOUNT: {
            return {
                ...state,
                amount: action.payload,
            }
        }
        case CATALOG_SET_LOADING: {
            return {
                ...state,
                loading: action.payload,
            }
        }
        case CATALOG_SET_DESKTOP_VIEWTYPE: {
            return {
                ...state,
                desktopViewType: action.payload,
            }
        }
        case CATALOG_SET_MOBILE_VIEWTYPE: {
            return {
                ...state,
                mobileViewType: action.payload,
            }
        }
        case CATALOG_SET_SORT_MOBILE: {
            return {
                ...state,
                sortMobile: [],
            }
        }
        case CATALOG_SET_PRELOAD_GET_PARAMS: {
            return {
                ...state,
                getParams: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default CatalogReducer
