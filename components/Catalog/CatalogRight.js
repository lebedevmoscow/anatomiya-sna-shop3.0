import { useState, useEffect } from 'react'

import CatalogTopFilter from './../Filters/CatalogTopFilter'
import CatalogProductListForDesktop from './../Products/CatalogProductList'
import LoadMoreButton from './../Button/LoadMoreButton'
import CatalogPagination from './../Pagination/CatalogPagination'
import CatalogHelpPickUp from './../Catalog/CatalogHelpPickUp'
import CatalogReviewList from './../Reviews/CatalogDesktopReviewList'
import IndexPageAssurances from './../Assurances'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { catalogSetPage } from './../../actions/CatalogCommon'
import {
    CATALOG_PRODUCT_LIST_SUCCESS,
    CATALOG_PRODUCT_LIST_SET_EMPTY,
} from './../../actions/CatalogProductList'
import {
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY,
    LoadByFilters,
} from './../../actions/NewCatalogProductList'
import { LoadProductsByButtonClick } from './../../actions/NewCatalogProductList'

import styles from './../../styles/components/Catalog/CatalogRight.module.sass'

const CatalogRight = ({
    lastClick,
    setLastClick,
    updateViewType,
    stylesForDesktopViewType,
    desktopViewType,
    firstLoadProducts,
    catalogSlug,
    subCatalogSlug = null,
    oldMin,
    oldMax,
    filterProductsIds,
    headers,
}) => {
    const [firstProductList, setFirstProductList] = useState([])

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [amount, setAmount] = useState(
        Math.ceil(filterProductsIds.length / 21)
    )
    const [list, setList] = useState([])

    const dispatch = useDispatch()

    const CatalogCommonReducer = useSelector(
        (store) => store.CatalogCommonReducer
    )

    const CatalogProductListReducer = useSelector(
        (store) => store.CatalogProductListReducer
    )
    const NewCatalogProductListReducer = useSelector(
        (store) => store.NewCatalogProductListReducer
    )
    const SelectedSizeReducer = useSelector(
        (store) => store.SelectedSizeReducer
    )

    const onButtonClickHandler = () => {
        if (lastClick !== 'filter') {
            if (
                CatalogCommonReducer.filters &&
                CatalogCommonReducer.filters.length !== 0
            ) {
                dispatch(
                    LoadByFilters(
                        filterProductsIds,
                        page + 1,
                        SelectedSizeReducer.selectedSizeId,
                        catalogSlug,
                        subCatalogSlug,
                        oldMin,
                        oldMax,
                        CatalogCommonReducer.filters
                    )
                )
            } else {
                dispatch(
                    LoadProductsByButtonClick(
                        filterProductsIds,
                        page === 1 ? page + 1 : page + 2,
                        SelectedSizeReducer.selectedSizeId,
                        catalogSlug,
                        subCatalogSlug,
                        oldMin,
                        oldMax
                    )
                )
            }
        } else {
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    page + 1,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters
                )
            )
        }

        setPage((prev) => {
            dispatch(catalogSetPage(prev + 1))
            return ++prev
        })
    }

    const onPageClickHandler = (p) => {
        setData([])
        setList([])
        setPage(p)

        if (
            CatalogCommonReducer.filters &&
            CatalogCommonReducer.filters.length !== 0
        ) {
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    p,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters
                )
            )
        } else {
            dispatch(
                LoadProductsByButtonClick(
                    filterProductsIds,
                    SelectedSizeReducer.amount ? p - 1 : p,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax
                )
            )
        }

        dispatch(catalogSetPage(p))
    }

    const onGoForwardButtonClickHandler = () => {
        setData([])
        setList([])
        let temp = page + 1
        setPage((prev) => ++prev)

        if (
            CatalogCommonReducer.filters &&
            CatalogCommonReducer.filters.length !== 0
        ) {
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    temp,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters
                )
            )
        } else {
            dispatch(
                LoadProductsByButtonClick(
                    filterProductsIds,
                    SelectedSizeReducer.amount ? temp - 1 : temp,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax
                )
            )
        }

        dispatch(catalogSetPage(temp))

        // setData([])
        // setList([])
        // dispatch(
        //     LoadProductsByButtonClick(
        //         filterProductsIds,
        //         page + 1,
        //         SelectedSizeReducer.selectedSizeId,
        //         catalogSlug,
        //         subCatalogSlug,
        //         oldMin,
        //         oldMax
        //     )
        // )

        // setPage((prev) => {
        //     dispatch(catalogSetPage(prev + 1))
        //     return ++prev
        // })

        // dispatch(catalogSetPage(p))
    }

    const onGoBackdButtonClickHandler = () => {
        setData([])
        setList([])
        let temp = page - 1
        setPage((prev) => --prev)

        if (
            CatalogCommonReducer.filters &&
            CatalogCommonReducer.filters.length !== 0
        ) {
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    temp,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters
                )
            )
        } else {
            dispatch(
                LoadProductsByButtonClick(
                    filterProductsIds,
                    SelectedSizeReducer.amount ? temp - 1 : temp,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax
                )
            )
        }

        dispatch(catalogSetPage(temp))

        // setData([])
        // setList([])
        // dispatch(
        //     LoadProductsByButtonClick(
        //         filterProductsIds,
        //         page - 1,
        //         SelectedSizeReducer.selectedSizeId,
        //         catalogSlug,
        //         subCatalogSlug,
        //         oldMin,
        //         oldMax
        //     )
        // )
        // setPage((prev) => {
        //     dispatch(catalogSetPage(prev - 1))
        //     return --prev
        // })

        // dispatch(catalogSetPage(p - 1))
    }

    useEffect(() => {
        setAmount(Math.ceil(filterProductsIds.length / 21))
    }, [filterProductsIds])

    useEffect(() => {
        setFirstProductList(
            <CatalogProductListForDesktop
                catalogSlug={catalogSlug}
                desktopViewType={desktopViewType}
                stylesForDesktopViewType={stylesForDesktopViewType}
                firstLoadProducts={firstLoadProducts}
                oldMin={oldMin}
                oldMax={oldMax}
                filterProductsIds={filterProductsIds}
            />
        )
    }, [firstLoadProducts, filterProductsIds])

    useEffect(() => {
        dispatch({
            type: CATALOG_PRODUCT_LIST_SUCCESS,
            payload: firstLoadProducts,
        })
        setList(
            <>
                {data.map((d, index) => {
                    return (
                        <CatalogProductListForDesktop
                            key={index}
                            catalogSlug={catalogSlug}
                            desktopViewType={desktopViewType}
                            stylesForDesktopViewType={stylesForDesktopViewType}
                            firstLoadProducts={d}
                            oldMin={oldMin}
                            oldMax={oldMax}
                            filterProductsIds={filterProductsIds}
                            newProducts={true}
                        />
                    )
                })}
            </>
        )
    }, [data])

    useEffect(() => {
        setPage(CatalogCommonReducer.page)
    }, [CatalogCommonReducer.page])

    useEffect(() => {
        if (SelectedSizeReducer.amount !== null) {
            setAmount(Math.ceil(SelectedSizeReducer.amount / 21))
        }
    }, [SelectedSizeReducer.amount])

    useEffect(() => {
        if (CatalogProductListReducer.products.length !== 0) {
            setFirstProductList(
                <CatalogProductListForDesktop
                    catalogSlug={catalogSlug}
                    desktopViewType={desktopViewType}
                    stylesForDesktopViewType={stylesForDesktopViewType}
                    firstLoadProducts={CatalogProductListReducer.products}
                    oldMin={oldMin}
                    oldMax={oldMax}
                    filterProductsIds={filterProductsIds}
                />
            )
        }
    }, [CatalogProductListReducer.products])

    useEffect(() => {
        if (CatalogProductListReducer.emptyIndex !== 0) {
            dispatch(catalogSetPage(1))
            setPage(1)
            setData([])
            setList([])
        }
    }, [CatalogProductListReducer.emptyIndex])

    useEffect(() => {
        if (NewCatalogProductListReducer.emptyIndex !== 0) {
            dispatch(catalogSetPage(1))
            setPage(1)
            setData([])
            setList()
        }
    }, [NewCatalogProductListReducer.emptyIndex])

    useEffect(() => {
        if (NewCatalogProductListReducer.newProducts.length !== 0) {
            if (lastClick === 'showMore') {
                const clone = data.concat()
                clone.push(NewCatalogProductListReducer.newProducts)
                setData(clone)
            } else if (lastClick === 'filter') {
                // setTimeout(() => {
                setFirstProductList(
                    <CatalogProductListForDesktop
                        catalogSlug={catalogSlug}
                        desktopViewType={desktopViewType}
                        stylesForDesktopViewType={stylesForDesktopViewType}
                        firstLoadProducts={
                            NewCatalogProductListReducer.newProducts
                        }
                        oldMin={oldMin}
                        oldMax={oldMax}
                        filterProductsIds={filterProductsIds}
                    />
                )
                // }, 1000)
            } else {
                setFirstProductList(
                    <CatalogProductListForDesktop
                        catalogSlug={catalogSlug}
                        desktopViewType={desktopViewType}
                        stylesForDesktopViewType={stylesForDesktopViewType}
                        firstLoadProducts={
                            NewCatalogProductListReducer.newProducts
                        }
                        oldMin={oldMin}
                        oldMax={oldMax}
                        filterProductsIds={filterProductsIds}
                    />
                )
            }
        }
    }, [NewCatalogProductListReducer.newProducts])

    useEffect(() => {
        if (lastClick === 'showMore') {
            onButtonClickHandler()
        }
        // if (lastClick === '')
    }, [lastClick])

    return (
        <div className={styles.catalog_right}>
            <CatalogTopFilter
                headers={headers}
                updateViewType={updateViewType}
                desktopViewType={desktopViewType}
            />
            {firstProductList}
            {list}
            {page !== Math.ceil(filterProductsIds.length / 21) && (
                <div
                    onClick={() => {
                        setLastClick('showMore')
                        if (lastClick === 'showMore') {
                            onButtonClickHandler()
                        }
                    }}
                    className={styles.catalog_right__load_more_button}
                >
                    <LoadMoreButton firstText={'Показать еще +21'} />
                </div>
            )}
            <div onClick={() => setLastClick('forward')}>
                <CatalogPagination
                    onPageClickHandler={onPageClickHandler}
                    current={page}
                    amount={amount}
                    onGoForwardButtonClickHandler={
                        onGoForwardButtonClickHandler
                    }
                    onGoBackdButtonClickHandler={onGoBackdButtonClickHandler}
                />
            </div>
            <CatalogHelpPickUp />
            <CatalogReviewList />
            <IndexPageAssurances catalog={true} container={false} />
        </div>
    )
}

export default CatalogRight
