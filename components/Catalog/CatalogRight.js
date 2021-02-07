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
    oldMin,
    oldMax,
    filterProductsIds,
}) => {
    const [productList, setProductList] = useState(firstLoadProducts)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const dispatch = useDispatch()
    const CatalogProductListReducer = useSelector(
        (store) => store.CatalogProductListReducer
    )
    const NewCatalogProductListReducer = useSelector(
        (store) => store.NewCatalogProductListReducer
    )

    const onButtonClickHandler = () => {
        dispatch(LoadProductsByButtonClick(filterProductsIds, page))
        setPage((prev) => ++prev)
    }

    useEffect(() => {
        dispatch({
            type: CATALOG_PRODUCT_LIST_SUCCESS,
            payload: firstLoadProducts,
        })
    }, [])

    // useEffect(() => {
    //     if (CatalogProductListReducer.newProducts.length !== 0) {
    //         const clone = productList.ShortProductModels.concat()
    //         const newClone = [
    //             ...clone,
    //             ...CatalogProductListReducer.newProducts.ShortProductModels,
    //         ]
    //         const res = {
    //             GiftLabels: productList.GiftLabels,
    //             SaleLabels: productList.SaleLabels,
    //             ShortProductModels: newClone,
    //         }
    //         setProductList(res)
    //     }
    // }, [CatalogProductListReducer.newProducts])

    // useEffect(() => {
    //     console.log(
    //         'CatalogProductListReducer.newProducts',
    //         CatalogProductListReducer.newProducts
    //     )

    //     if (CatalogProductListReducer.newProducts.length !== 0) {
    //         const clone = newProductList.concat()
    //         clone.push(
    //             <CatalogProductListForDesktop
    //                 catalogSlug={catalogSlug}
    //                 desktopViewType={desktopViewType}
    //                 stylesForDesktopViewType={stylesForDesktopViewType}
    //                 firstLoadProducts={CatalogProductListReducer.newProducts}
    //                 oldMin={oldMin}
    //                 oldMax={oldMax}
    //                 filterProductsIds={filterProductsIds}
    //             />
    //         )
    //         setNewProductList(clone)
    //     }
    // }, [CatalogProductListReducer.newProducts])

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
            <CatalogProductListForDesktop
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
                    />
                )
            })}
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
