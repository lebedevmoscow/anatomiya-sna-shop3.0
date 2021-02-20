import { useState, useEffect } from 'react'
import common_styles from './../../styles/common.module.sass'

import CatalogProductList from './../Products/CatalogProductList'
import LoadMoreButton from './../Button/LoadMoreButton'
import CatalogPagination from './../Pagination/CatalogPagination'
import ArticleCatalogSwiperList from './../Article/ArticleCatalogSwiperList'

// Redux
import { useDispatch, useSelector } from 'react-redux'

import { CATALOG_PRODUCT_LIST_SUCCESS } from './../../actions/CatalogProductList'

import { LoadByFilters } from './../../actions/NewCatalogProductList'
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
    headers,
    articles,
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

    const [update, setUpdate] = useState(0)
    const [productList, setProductList] = useState(firstLoadProducts)
    const [data, setData] = useState([])
    const [firstProductList, setFirstProductList] = useState([])
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [amount, setAmount] = useState(
        Math.ceil(filterProductsIds.length / 20)
    )
    const [FirstArticles, FirstSetArticles] = useState(
        <ArticleCatalogSwiperList list={articles} />
    )

    const [Articles, SetArticles] = useState(null)

    const onButtonClickHandler = () => {
        if (lastClick !== 'filter') {
            if (
                CatalogCommonReducer.filters &&
                CatalogCommonReducer.filters.length !== 0
            ) {
                // filterProductsIds,
                // CatalogCommonReducer.page,
                // SelectedSizeReducer.sizeId,
                // catalogSlug,
                // subCatalogSlug,
                // oldMin,
                // oldMax,
                // filterStatus,
                // prices,
                // selectedSize,
                // null,
                // true,
                // activeColors,
                // selectedActive,
                // CatalogCommonReducer.topfilter

                dispatch(
                    LoadByFilters(
                        filterProductsIds,
                        page + 1,
                        SelectedSizeReducer.selectedSizeId,
                        catalogSlug,
                        subCatalogSlug,
                        oldMin,
                        oldMax,
                        CatalogCommonReducer.filters,
                        CatalogCommonReducer.price,
                        null,
                        null,
                        true,
                        CatalogCommonReducer.colors,
                        CatalogCommonReducer.selectedActive,
                        CatalogCommonReducer.topfilter
                    )
                )
            } else {
                // page === 1 ? page + 1 : page + 2,
                dispatch(
                    LoadProductsByButtonClick(
                        filterProductsIds,
                        page === 1 ? page + 1 : page + 2,
                        SelectedSizeReducer.selectedSizeId,
                        catalogSlug,
                        subCatalogSlug,
                        oldMin,
                        oldMax,
                        CatalogCommonReducer.filters,
                        CatalogCommonReducer.price,
                        null,
                        null,
                        true,
                        CatalogCommonReducer.colors,
                        CatalogCommonReducer.selectedActive,
                        CatalogCommonReducer.topfilter
                    )
                )
            }
        } else {
            // page + 1,
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    page + 1,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters,
                    CatalogCommonReducer.price,
                    null,
                    null,
                    true,
                    CatalogCommonReducer.colors,
                    CatalogCommonReducer.selectedActive,
                    CatalogCommonReducer.topfilter
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
        let temp = page + 1
        setPage((prev) => ++prev)

        if (
            CatalogCommonReducer.filters &&
            CatalogCommonReducer.filters.length !== 0
        ) {
            // temp,
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    temp,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters,
                    CatalogCommonReducer.price,
                    null,
                    null,
                    true,
                    CatalogCommonReducer.colors,
                    CatalogCommonReducer.selectedActive,
                    CatalogCommonReducer.topfilter
                )
            )
        } else {
            // SelectedSizeReducer.amount ? temp - 1 : temp,
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    SelectedSizeReducer.amount ? temp - 1 : temp,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters,
                    CatalogCommonReducer.price,
                    null,
                    null,
                    true,
                    CatalogCommonReducer.colors,
                    CatalogCommonReducer.selectedActive,
                    CatalogCommonReducer.topfilter
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
            // temp,
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    temp,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters,
                    CatalogCommonReducer.price,
                    null,
                    null,
                    true,
                    CatalogCommonReducer.colors,
                    CatalogCommonReducer.selectedActive,
                    CatalogCommonReducer.topfilter
                )
            )
        } else {
            // SelectedSizeReducer.amount ? temp - 1 : temp,
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    SelectedSizeReducer.amount ? temp - 1 : temp,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters,
                    CatalogCommonReducer.price,
                    null,
                    null,
                    true,
                    CatalogCommonReducer.colors,
                    CatalogCommonReducer.selectedActive,
                    CatalogCommonReducer.topfilter
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
                    CatalogCommonReducer.filters,
                    CatalogCommonReducer.price,
                    null,
                    null,
                    true,
                    CatalogCommonReducer.colors,
                    CatalogCommonReducer.selectedActive,
                    CatalogCommonReducer.topfilter
                )
            )
        } else {
            // SelectedSizeReducer.amount ? p - 1 : p,
            dispatch(
                LoadByFilters(
                    filterProductsIds,
                    SelectedSizeReducer.amount ? p - 1 : p,
                    SelectedSizeReducer.selectedSizeId,
                    catalogSlug,
                    subCatalogSlug,
                    oldMin,
                    oldMax,
                    CatalogCommonReducer.filters,
                    CatalogCommonReducer.price,
                    null,
                    null,
                    true,
                    CatalogCommonReducer.colors,
                    CatalogCommonReducer.selectedActive,
                    CatalogCommonReducer.topfilter
                )
            )
        }

        dispatch(catalogSetPage(p))
    }

    useEffect(() => {
        if (CatalogCommonReducer.page !== 1) {
            const req = async () => {
                if (headers) {
                    const r = await fetch(
                        `https://anatomiyasna.ru/api/journal/article-list?group=${headers.catalogTitle}&limit=3&page=${CatalogCommonReducer.page}`
                    )
                    const res = await r.json()

                    SetArticles(<ArticleCatalogSwiperList list={res} />)
                }
            }
            req()
        }
    }, [page, headers])

    // useEffect(() => {
    //     setFirstProductList(
    //         <CatalogProductList
    //             catalogSlug={catalogSlug}
    //             subCatalogSlug={subCatalogSlug}
    //             firstLoadProducts={firstLoadProducts}
    //             stylesForViewType={stylesForViewType}
    //             viewType={viewType}
    //             oldMin={filterAPIData.price.min}
    //             oldMax={filterAPIData.price.max}
    //             filterProductsIds={filterProductsIds}
    //             newProducts={newProducts}
    //             IsMobile={true}
    //         />
    //     )
    // }, [])

    useEffect(() => {
        setAmount(Math.ceil(filterProductsIds.length / 20))
    }, [filterProductsIds])

    useEffect(() => {
        if (data.length > 0) {
            dispatch({
                type: CATALOG_PRODUCT_LIST_SUCCESS,
                payload: firstLoadProducts,
            })
            console.log('viewType', viewType)

            console.log('data', data)

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
                                IsMobile={true}
                                stylesForViewType={stylesForViewType}
                                viewType={viewType}
                            />
                        )
                    })}
                </>
            )
        }
    }, [data, viewType, stylesForViewType])

    useEffect(() => {
        setPage(CatalogCommonReducer.page)
    }, [CatalogCommonReducer.page])

    useEffect(() => {
        if (SelectedSizeReducer.amount !== null) {
            setAmount(Math.ceil(SelectedSizeReducer.amount / 20))
        }
    }, [SelectedSizeReducer.amount])

    // useEffect(() => {
    //     if (CatalogProductListReducer.products.length !== 0) {
    //         console.log('2')
    //         setFirstProductList(
    //             <CatalogProductList
    //                 catalogSlug={catalogSlug}
    //                 firstLoadProducts={CatalogProductListReducer.products}
    //                 oldMin={oldMin}
    //                 oldMax={oldMax}
    //                 filterProductsIds={filterProductsIds}
    //                 IsMobile={true}
    //                 stylesForViewType={stylesForViewType}
    //                 viewType={viewType}
    //             />
    //         )
    //     }
    // }, [viewType, CatalogProductListReducer.products])

    useEffect(() => {
        if (CatalogProductListReducer.emptyIndex !== 0) {
            dispatch(catalogSetPage(1))
            setPage(1)
            setData([])
            setList([])
        }
    }, [viewType, CatalogProductListReducer.emptyIndex])

    useEffect(() => {
        if (NewCatalogProductListReducer.emptyIndex !== 0) {
            dispatch(catalogSetPage(1))
            setPage(1)
            setData([])
            setList()
        }
    }, [viewType, NewCatalogProductListReducer.emptyIndex])

    useEffect(() => {
        if (NewCatalogProductListReducer.newProducts.length !== 0) {
            if (lastClick === 'showMore') {
                console.log('show')
                const clone = data.concat()
                clone.push(NewCatalogProductListReducer.newProducts)
                setData(clone)
            } else if (lastClick === 'filter') {
                // setTimeout(() => {
                setFirstProductList(
                    <CatalogProductList
                        catalogSlug={catalogSlug}
                        firstLoadProducts={
                            NewCatalogProductListReducer.newProducts
                        }
                        oldMin={oldMin}
                        oldMax={oldMax}
                        filterProductsIds={filterProductsIds}
                        IsMobile={true}
                        stylesForViewType={stylesForViewType}
                        viewType={viewType}
                    />
                )
                // }, 1000)
            } else {
                console.log('new')
                setFirstProductList(
                    <CatalogProductList
                        catalogSlug={catalogSlug}
                        firstLoadProducts={
                            NewCatalogProductListReducer.newProducts
                        }
                        oldMin={oldMin}
                        oldMax={oldMax}
                        filterProductsIds={filterProductsIds}
                        IsMobile={true}
                        stylesForViewType={stylesForViewType}
                        viewType={viewType}
                    />
                )
            }
        }
    }, [NewCatalogProductListReducer.newProducts])

    useEffect(() => {
        console.log('last click', lastClick)
        if (lastClick === 'showMore') {
            onButtonClickHandler()
        }
        // if (lastClick === '')
    }, [lastClick])
    return (
        <>
            {CatalogCommonReducer.filters.length === 0 && (
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
                    IsMobile={true}
                />
            )}
            {firstProductList}
            {FirstArticles}
            {list}
            {Articles}
            <div
                onClick={() => {
                    setLastClick('showMore')
                    if (lastClick === 'showMore') {
                        onButtonClickHandler()
                    }
                }}
                style={{ marginTop: '5px' }}
            >
                <LoadMoreButton firstText={'Показать еще'} />
            </div>
            <div className={common_styles.mobile_catalog_pagination}>
                <CatalogPagination
                    IsMobile={true}
                    onPageClickHandler={onPageClickHandler}
                    current={page}
                    amount={amount}
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
