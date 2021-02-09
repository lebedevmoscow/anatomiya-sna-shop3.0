import { useState, useEffect } from 'react'
import common_styles from './../../styles/common.module.sass'

import CatalogProductList from './../Products/CatalogProductList'
import LoadMoreButton from './../Button/LoadMoreButton'
import CatalogPagination from './../Pagination/CatalogPagination'

// Redux
import { useDispatch, useSelector } from 'react-redux'

import {
    CATALOG_PRODUCT_LIST_SUCCESS,
    CATALOG_PRODUCT_LIST_SET_EMPTY,
} from './../../actions/CatalogProductList'

import {
    CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY,
    LoadByFilters,
} from './../../actions/NewCatalogProductList'
import { catalogSetPage } from './../../actions/CatalogCommon'
import { LoadProductsByButtonClick } from './../../actions/NewCatalogProductList'

const CatalogMobileProductList = ({
    catalogSlug,
    subCatalogSlug,
    firstLoadProducts,
    stylesForViewType,
    viewType,
    filterAPIData,
    filterProductsIds,
    newProducts,
    lastClick,
    setLastClick,
}) => {
    const oldMin = filterAPIData.price.min
    const oldMax = filterAPIData.price.max

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

    const [productList, setProductList] = useState(firstLoadProducts)
    const [data, setData] = useState([])
    const [firstProductList, setFirstProductList] = useState([])
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [amount, setAmount] = useState(
        Math.floor(filterProductsIds.length / 21)
    )

    const onButtonClickHandler = () => {
        console.log('lastClick', lastClick)
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

    const onGoForwardButtonClickHandler = () => {
        setData([])
        setList([])
        dispatch(
            LoadProductsByButtonClick(
                filterProductsIds,
                page + 1,
                SelectedSizeReducer.selectedSizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax
            )
        )

        setPage((prev) => {
            dispatch(catalogSetPage(prev + 1))
            return ++prev
        })
    }

    const onGoBackdButtonClickHandler = () => {
        setData([])
        setList([])
        dispatch(
            LoadProductsByButtonClick(
                filterProductsIds,
                page - 1,
                SelectedSizeReducer.selectedSizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax
            )
        )
        setPage((prev) => {
            dispatch(catalogSetPage(prev - 1))
            return --prev
        })
    }

    const onPageClickHandler = (p) => {
        setData([])
        setList([])
        console.log('p', p)
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

        console.log('on page click handler')

        dispatch(catalogSetPage(p))
    }

    useEffect(() => {
        setFirstProductList(
            <CatalogProductList
                catalogSlug={catalogSlug}
                subCatalogSlug={subCatalogSlug}
                firstLoadProducts={firstLoadProducts}
                stylesForViewType={stylesForViewType}
                viewType={viewType}
                oldMin={filterAPIData.price.min}
                oldMax={filterAPIData.price.max}
                filterProductsIds={filterProductsIds}
                newProducts={newProducts}
            />
        )
    }, [])

    useEffect(() => {
        dispatch({
            type: CATALOG_PRODUCT_LIST_SUCCESS,
            payload: firstLoadProducts,
        })
        setList(
            <>
                {data.map((d, index) => {
                    return (
                        <CatalogProductList
                            key={index}
                            catalogSlug={catalogSlug}
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
        if (SelectedSizeReducer.amount !== null) {
            setAmount(Math.ceil(SelectedSizeReducer.amount / 21))
        }
    }, [SelectedSizeReducer.amount])

    useEffect(() => {
        console.log('useEffect2')
        if (CatalogProductListReducer.products.length !== 0) {
            setFirstProductList(
                <CatalogProductList
                    catalogSlug={catalogSlug}
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
        console.log('useEffect1')
        if (NewCatalogProductListReducer.newProducts.length !== 0) {
            console.log('1')
            if (lastClick === 'showMore') {
                console.log('2')
                const clone = data.concat()
                clone.push(NewCatalogProductListReducer.newProducts)
                setData(clone)
            } else if (lastClick === 'filter') {
                console.log('3')
                // console.log(
                //     'NewCatalogProductListReducer.newProducts',
                //     NewCatalogProductListReducer.newProducts
                // )
                setFirstProductList(
                    <CatalogProductList
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
            } else {
                console.log('4')
                console.log(
                    'NewCatalogProductListReducer.newProducts',
                    NewCatalogProductListReducer.newProducts
                )
                setFirstProductList(
                    <CatalogProductList
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
        console.log('dada', lastClick)
        if (lastClick === 'showMore') {
            onButtonClickHandler()
        }
    }, [lastClick])

    return (
        <>
            {firstProductList}
            {list}
            <div
                onClick={() => {
                    console.log('button click')
                    setLastClick('showMore')
                    if (lastClick === 'showMore') {
                        onButtonClickHandler()
                    }
                }}
                style={{ marginTop: '5px' }}
            >
                <LoadMoreButton firstText={'Показать еще'} />
            </div>
            {/* <div className={common_styles.mobile_catalog_pagination}>
                <CatalogPagination
                    onPageClickHandler={onPageClickHandler}
                    current={page}
                    amount={amount}
                    onGoForwardButtonClickHandler={
                        onGoForwardButtonClickHandler
                    }
                    onGoBackdButtonClickHandler={onGoBackdButtonClickHandler}
                />
            </div> */}
        </>
    )
}

export default CatalogMobileProductList
