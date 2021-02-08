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
import {
    CATALOG_PRODUCT_LIST_SUCCESS,
    CATALOG_PRODUCT_LIST_SET_EMPTY,
} from './../../actions/CatalogProductList'
import { CATALOG_PRODUCT_lIST_LOAD_BY_BUTTON_SET_EMPTY } from './../../actions/NewCatalogProductList'
import { LoadProductsByButtonClick } from './../../actions/NewCatalogProductList'

import styles from './../../styles/components/Catalog/CatalogRight.module.sass'

const CatalogRight = ({
    updateViewType,
    stylesForDesktopViewType,
    desktopViewType,
    firstLoadProducts,
    catalogSlug,
    subCatalogSlug = null,
    oldMin,
    oldMax,
    filterProductsIds,
}) => {
    const [productList, setProductList] = useState(firstLoadProducts)

    const [firstProductList, setFirstProductList] = useState([])

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [lastClick, setLastClick] = useState('showMore')

    const dispatch = useDispatch()
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
        dispatch(
            LoadProductsByButtonClick(
                filterProductsIds,
                page,
                SelectedSizeReducer.selectedSizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax
            )
        )
        setPage((prev) => ++prev)
    }

    const onPageClickHandler = (p) => {
        setData([])
        setList([])
        dispatch(
            LoadProductsByButtonClick(
                filterProductsIds,
                p,
                SelectedSizeReducer.selectedSizeId,
                catalogSlug,
                subCatalogSlug,
                oldMin,
                oldMax
            )
        )
        setPage(p)
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
        setPage((prev) => ++prev)
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
        setPage((prev) => --prev)
    }

    useEffect(() => {
        setFirstProductList(
            <CatalogProductListForDesktop
                catalogSlug={catalogSlug}
                desktopViewType={desktopViewType}
                stylesForDesktopViewType={stylesForDesktopViewType}
                firstLoadProducts={productList}
                oldMin={oldMin}
                oldMax={oldMax}
                filterProductsIds={filterProductsIds}
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
            setPage(1)
            setData([])
            setList([])
        }
    }, [CatalogProductListReducer.emptyIndex])

    useEffect(() => {
        if (NewCatalogProductListReducer.emptyIndex !== 0) {
            setPage(1)
            setData([])
            setList()
        }
    }, [NewCatalogProductListReducer.emptyIndex])

    useEffect(() => {
        if (NewCatalogProductListReducer.newProducts.length !== 0) {
            if (lastClick === 'showMore') {
                console.log('here')
                const clone = data.concat()
                clone.push(NewCatalogProductListReducer.newProducts)
                setData(clone)
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

    return (
        <div className={styles.catalog_right}>
            <CatalogTopFilter
                updateViewType={updateViewType}
                desktopViewType={desktopViewType}
            />
            {/* <CatalogProductListForDesktop
                catalogSlug={catalogSlug}
                desktopViewType={desktopViewType}
                stylesForDesktopViewType={stylesForDesktopViewType}
                firstLoadProducts={productList}
                oldMin={oldMin}
                oldMax={oldMax}
                filterProductsIds={filterProductsIds}
            />
            {data.map((d, index) => {
                console.log('d', d)
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
            })} */}
            {firstProductList}
            {list}
            <div
                onClick={() => {
                    onButtonClickHandler()
                    setLastClick('showMore')
                }}
                className={styles.catalog_right__load_more_button}
            >
                <LoadMoreButton firstText={'Показать еще +21'} />
            </div>
            <div onClick={() => setLastClick('forward')}>
                <CatalogPagination
                    onPageClickHandler={onPageClickHandler}
                    current={page}
                    amount={Math.floor(filterProductsIds.length / 21)}
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
