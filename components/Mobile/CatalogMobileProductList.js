import { useState, useEffect } from 'react'
import common_styles from './../../styles/common.module.sass'

import CatalogProductList from './../Products/CatalogProductList'
import LoadMoreButton from './../Button/LoadMoreButton'
import CatalogPagination from './../Pagination/CatalogPagination'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { CatalogLoadProductsByLoadMoreButton } from './../../catalog_actions_rebuild/catalog'

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
} from './../../catalog_actions_rebuild/catalog'

const CatalogMobileProductList = ({
    catalogSlug,
    subCatalogSlug,
    firstLoadProducts,
    stylesForViewType,
    viewType,
    filterAPIData,
    filterProductsIds,
    headers,
    articles,
}) => {
    const hasWindow = typeof window !== 'undefined'

    const CatalogReducer = useSelector((store) => store.CatalogReducer)

    const oldMin = filterAPIData.price.min
    const oldMax = filterAPIData.price.max

    const dispatch = useDispatch()

    const [first, setFirst] = useState(
        <CatalogProductList
            IsMobile={true}
            headers={headers}
            articles={articles}
            catalogSlug={catalogSlug}
            viewType={viewType}
            stylesForViewType={stylesForViewType}
            firstLoadProducts={firstLoadProducts}
            oldMin={oldMin}
            oldMax={oldMax}
            filterProductsIds={filterProductsIds}
        />
    )
    const [loadedMore, setLoadedMore] = useState([])

    // Handlers
    const scrollTo = (x, y) => {
        if (hasWindow) {
            window.scrollTo({
                top: x,
                left: y,
                behavior: 'instant',
            })
        }
    }

    const onButtonClickHandler = () => {
        const page = CatalogReducer.page
        dispatch(
            CatalogLoadProductsByLoadMoreButton(
                false,
                page + 1,
                CatalogReducer.sizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax,
                CatalogReducer.filters,
                CatalogReducer.price,
                null,
                CatalogReducer.colors,
                CatalogReducer.select,
                CatalogReducer.mobileSort
            )
        )
        dispatch({ type: CATALOG_SET_PAGE, payload: page + 1 })
    }

    const onGoForwardButtonClickHandler = () => {
        scrollTo(0, 0)

        const page = CatalogReducer.page

        dispatch({ type: CATALOG_SET_UPDATE_LIST })
        dispatch(
            CatalogLoadProductsByLoadMoreButton(
                false,
                page + 1,
                CatalogReducer.sizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax,
                CatalogReducer.filters,
                CatalogReducer.price,
                null,
                CatalogReducer.colors,
                CatalogReducer.select,
                CatalogReducer.mobileSort
            )
        )
        dispatch({ type: CATALOG_SET_PAGE, payload: page + 1 })
    }

    const onGoBackdButtonClickHandler = () => {
        scrollTo(0, 0)

        const page = CatalogReducer.page

        dispatch({ type: CATALOG_SET_UPDATE_LIST })
        dispatch(
            CatalogLoadProductsByLoadMoreButton(
                false,
                page - 1,
                CatalogReducer.sizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax,
                CatalogReducer.filters,
                CatalogReducer.price,
                nill,
                CatalogReducer.colors,
                CatalogReducer.select,
                CatalogReducer.mobileSort
            )
        )
        dispatch({ type: CATALOG_SET_PAGE, payload: page - 1 })
    }

    const onPageClickHandler = (p) => {
        scrollTo(0, 0)
        dispatch({ type: CATALOG_SET_UPDATE_LIST })
        dispatch(
            CatalogLoadProductsByLoadMoreButton(
                false,
                p,
                CatalogReducer.sizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax,
                CatalogReducer.filters,
                CatalogReducer.price,
                null,
                CatalogReducer.colors,
                CatalogReducer.select,
                CatalogReducer.mobileSort
            )
        )
        dispatch({ type: CATALOG_SET_PAGE, payload: p })
    }

    // Use Effects

    useEffect(() => {
        dispatch({
            type: CATALOG_SET_ALL,
            payload: [
                <CatalogProductList
                    IsMobile={true}
                    headers={headers}
                    articles={articles}
                    catalogSlug={catalogSlug}
                    viewType={viewType}
                    stylesForViewType={stylesForViewType}
                    firstLoadProducts={firstLoadProducts}
                    oldMin={oldMin}
                    oldMax={oldMax}
                    filterProductsIds={filterProductsIds}
                />,
            ],
        })
    }, [])

    useEffect(() => {
        const length = Object.keys(CatalogReducer.new).length
        if (length > 0) {
            const element = (
                <CatalogProductList
                    IsMobile={true}
                    headers={headers}
                    articles={articles}
                    catalogSlug={catalogSlug}
                    viewType={viewType}
                    stylesForViewType={stylesForViewType}
                    firstLoadProducts={CatalogReducer.new}
                    oldMin={oldMin}
                    oldMax={oldMax}
                    filterProductsIds={filterProductsIds}
                />
            )
            const copy = loadedMore.concat()
            copy.push(element)
            setLoadedMore(copy)
        }
    }, [CatalogReducer.new])

    useEffect(() => {
        if (CatalogReducer.update_list > 0) {
            setFirst([])
            setLoadedMore([])
        }
    }, [CatalogReducer.update_list])

    return (
        <>
            {first}
            {loadedMore}
            <div onClick={onButtonClickHandler} style={{ marginTop: '5px' }}>
                <LoadMoreButton firstText={'Показать еще'} />
            </div>
            <div className={common_styles.mobile_catalog_pagination}>
                <CatalogPagination
                    IsMobile={true}
                    onPageClickHandler={onPageClickHandler}
                    current={CatalogReducer.page}
                    amount={
                        (CatalogReducer.amount &&
                            Math.ceil(CatalogReducer.amount / 21)) ||
                        filterProductsIds.length
                    }
                    onGoForwardButtonClickHandler={
                        onGoForwardButtonClickHandler
                    }
                    onGoBackdButtonClickHandler={onGoBackdButtonClickHandler}
                />
            </div>
        </>
    )
}

export default CatalogMobileProductList
