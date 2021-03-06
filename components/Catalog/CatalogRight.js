import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Skeleton from '@material-ui/lab/Skeleton'

import CatalogProductListForDesktop from './../Products/CatalogProductList'
import LoadMoreButton from './../Button/LoadMoreButton'

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

// React Components
import CatalogPagination from './../Pagination/CatalogPagination'
import CatalogHelpPickUp from './../Catalog/CatalogHelpPickUp'
import CatalogReviewList from './../Reviews/CatalogDesktopReviewList'
import IndexPageAssurances from './../Assurances'

import styles from './../../styles/components/Catalog/CatalogRight.module.sass'

const CatalogTopFilter = dynamic(
    () => import('./../Filters/CatalogTopFilter'),
    { ssr: true }
)

const CatalogRight = ({
    stylesForDesktopViewType,
    updateViewType,
    desktopViewType,
    firstLoadProducts,
    catalogSlug,
    subCatalogSlug = null,
    oldMin,
    oldMax,
    filterProductsIds,
    headers,
    articles,
}) => {
    const CatalogReducer = useSelector((store) => store.CatalogReducer)
    const hasWindow = typeof window !== 'undefined'

    const [first, setFirst] = useState(
        <CatalogProductListForDesktop
            headers={headers}
            articles={articles}
            catalogSlug={catalogSlug}
            desktopViewType={desktopViewType}
            stylesForDesktopViewType={stylesForDesktopViewType}
            firstLoadProducts={firstLoadProducts}
            oldMin={oldMin}
            oldMax={oldMax}
            filterProductsIds={filterProductsIds}
        />
    )
    const [isLoading, setIsLoading] = useState(false)
    const [loadedMore, setLoadedMore] = useState([])

    const dispatch = useDispatch()

    // Custom functions
    const renderLoading = () => {
        const white = []
        if (!first || first.length <= 0) {
            for (let i = 0; i < 21; i++) {
                white.push(
                    <Skeleton variant="react" width={298} height={651} />
                )
            }
        }
        return white
    }

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

    const onLoadButtonClickHandler = () => {
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
                CatalogReducer.sort,
                CatalogReducer.colors,
                CatalogReducer.select
            )
        )
        dispatch({ type: CATALOG_SET_PAGE, payload: page + 1 })
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
                CatalogReducer.sort,
                CatalogReducer.colors,
                CatalogReducer.select
            )
        )
        dispatch({ type: CATALOG_SET_PAGE, payload: p })
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
                CatalogReducer.sort,
                CatalogReducer.colors,
                CatalogReducer.select
            )
        )
        dispatch({ type: CATALOG_SET_PAGE, payload: page + 1 })
    }

    const onGoBackButtonClickHandler = () => {
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
                CatalogReducer.sort,
                CatalogReducer.colors,
                CatalogReducer.select
            )
        )
        dispatch({ type: CATALOG_SET_PAGE, payload: page - 1 })
    }

    // UseEffects

    useEffect(() => {
        dispatch({
            type: CATALOG_SET_ALL,
            payload: [
                <CatalogProductListForDesktop
                    headers={headers}
                    articles={articles}
                    catalogSlug={catalogSlug}
                    desktopViewType={desktopViewType}
                    stylesForDesktopViewType={stylesForDesktopViewType}
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
                <CatalogProductListForDesktop
                    headers={headers}
                    articles={articles}
                    catalogSlug={catalogSlug}
                    desktopViewType={desktopViewType}
                    stylesForDesktopViewType={stylesForDesktopViewType}
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
        <div className={styles.catalog_right}>
            <CatalogTopFilter
                catalogSlug={catalogSlug}
                subCatalogSlug={subCatalogSlug}
                oldMin={oldMin}
                oldMax={oldMax}
                headers={headers}
                updateViewType={updateViewType}
                desktopViewType={desktopViewType}
            />
            {CatalogReducer.loading && (
                <div className={styles.loading}>{renderLoading()}</div>
            )}
            <div className={styles.firstLoadProducts}>{first}</div>
            <div className={styles.firstLoadProducts}>{loadedMore}</div>

            <div
                onClick={onLoadButtonClickHandler}
                className={styles.catalog_right__load_more_button}
            >
                <LoadMoreButton firstText={'Показать еще +21'} />
            </div>
            <div>
                <CatalogPagination
                    onPageClickHandler={onPageClickHandler}
                    current={CatalogReducer.page}
                    amount={
                        (CatalogReducer.amount &&
                            Math.ceil(CatalogReducer.amount / 21)) ||
                        Math.ceil(filterProductsIds.length / 21)
                    }
                    onGoForwardButtonClickHandler={
                        onGoForwardButtonClickHandler
                    }
                    onGoBackdButtonClickHandler={onGoBackButtonClickHandler}
                />
            </div>
            <CatalogHelpPickUp />
            <CatalogReviewList headers={headers} />
            <IndexPageAssurances catalog={true} container={false} />
        </div>
    )
}

export default CatalogRight
