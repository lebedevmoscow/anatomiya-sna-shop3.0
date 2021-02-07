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
import { CATALOG_PRODUCT_LIST_SUCCESS } from './../../actions/CatalogProductList'
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
            setData[[]]
            setList([])
        }
    }, [CatalogProductListReducer.emptyIndex])

    useEffect(() => {
        if (NewCatalogProductListReducer.newProducts.length !== 0) {
            const clone = data.concat()
            clone.push(NewCatalogProductListReducer.newProducts)
            setData(clone)
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
                onClick={onButtonClickHandler}
                className={styles.catalog_right__load_more_button}
            >
                <LoadMoreButton firstText={'Показать еще +21'} />
            </div>
            <CatalogPagination />
            <CatalogHelpPickUp />
            <CatalogReviewList />
            <IndexPageAssurances catalog={true} container={false} />
        </div>
    )
}

export default CatalogRight
