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
} from './../../catalog_actions_rebuild/catalog'

import styles from './../../styles/components/Catalog/CatalogRight.module.sass'

const CatalogTopFilter = dynamic(
    () => import('./../Filters/CatalogTopFilter'),
    { ssr: true }
)

const CatalogRight = ({
    stylesForDesktopViewType,
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
    const [loadedMore, setLoadedMore] = useState([])

    const dispatch = useDispatch()

    // Handlers
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
            console.log('here')
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
            />
            <div className={styles.firstLoadProducts}>{first}</div>
            <div className={styles.firstLoadProducts}>{loadedMore}</div>

            <div
                onClick={onLoadButtonClickHandler}
                className={styles.catalog_right__load_more_button}
            >
                <LoadMoreButton firstText={'Показать еще +21'} />
            </div>
        </div>
    )
}

export default CatalogRight
