import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import CatalogProductCard from './CatalogProductCard'
import { v4 as uuidv4 } from 'uuid'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Utils functions
import { GetPopupsList } from './../../utils/GetPopupsList'

import styles from './../../styles/components/Products/CatalogProductList.module.sass'

const EqualHeight = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeight),
    { ssr: false }
)

const CatalogProductListForDesktop = ({
    stylesForViewType,
    stylesForDesktopViewType,
    viewType,
    firstLoadProducts,
    desktopViewType,
    catalogSlug,
    subCatalogSlug = null,
    oldMin,
    oldMax,
}) => {
    const dispatch = useDispatch()
    const SelectedSizeRedux = useSelector((store) => store.SelectedSizeReducer)
    const CatalogProductListReducer = useSelector(
        (store) => store.CatalogProductListReducer
    )
    const [IsLoading, SetIsLoading] = useState(true)

    // Объект window
    const hasWindow = typeof window !== 'undefined'

    const [List, SetList] = useState([])

    useEffect(() => {
        console.log('3')
        SetList(render())
    }, [stylesForViewType, stylesForDesktopViewType, firstLoadProducts])

    // useEffect(() => {
    //     console.log('1')
    //     if (
    //         CatalogProductListReducer.products &&
    //         CatalogProductListReducer.products.length !== 0 &&
    //         !CatalogProductListReducer.loading
    //     ) {
    //         let ElemenetsArray = []
    //         let EqualHeightArray = []
    //         let Temp = 0

    //         CatalogProductListReducer.products.ShortProductModels &&
    //             CatalogProductListReducer.products.ShortProductModels.map(
    //                 (product, index) => {
    //                     const ListSalesList = GetPopupsList(
    //                         firstLoadProducts.SaleLabels,
    //                         product.Prices[0].SaleIds
    //                     )

    //                     const InitialSize = []
    //                     for (let i = 0; i < product.Prices.length; i++) {
    //                         if (
    //                             product.Prices[i].SizeSlug ===
    //                             SelectedSizeRedux.selectedSizeSlug
    //                         ) {
    //                             InitialSize.push(product.Prices[i])
    //                         }
    //                     }

    //                     ElemenetsArray.push(
    //                         <CatalogProductCard
    //                             catalogSlug={catalogSlug}
    //                             InitialSize={InitialSize}
    //                             ListSalesList={ListSalesList}
    //                             ProductLabels={product.ProductLabels}
    //                             BrandTitle={product.BrandTitle}
    //                             SeriesTitle={product.SeriesTitle}
    //                             Title={product.Title}
    //                             Slug={product.Slug}
    //                             MainImage={product.MainImage}
    //                             CatalogType={product.CatalogType}
    //                             Properties={product.Properties}
    //                             Id={product.Id}
    //                             key={uuidv4()}
    //                             Prices={product.Prices}
    //                             catalogSlug={catalogSlug}
    //                             subCatalogSlug={subCatalogSlug}
    //                             oldMin={oldMin}
    //                             oldMax={oldMax}
    //                         />
    //                     )

    //                     Temp++

    //                     if (Temp !== 0 && Temp % 3 === 0) {
    //                         EqualHeightArray.push(
    //                             <EqualHeight key={uuidv4()}>
    //                                 {ElemenetsArray}
    //                             </EqualHeight>
    //                         )
    //                         ElemenetsArray = []
    //                         Temp = 0
    //                     }
    //                 }
    //             )
    //         SetList(EqualHeightArray)
    //     }
    // }, [
    //     CatalogProductListReducer.products,
    //     CatalogProductListReducer,
    //     SelectedSizeRedux,
    // ])

    const render = () => {
        console.log('2')
        let ElemenetsArray = []
        let EqualHeightArray = []
        let Temp = 0

        firstLoadProducts.ShortProductModels.map((product) => {
            const ListSalesList = GetPopupsList(
                firstLoadProducts.SaleLabels,
                product.Prices[0].SaleIds
            )

            ElemenetsArray.push(
                <CatalogProductCard
                    catalogSlug={catalogSlug}
                    BrandTitle={product.BrandTitle}
                    SeriesTitle={product.SeriesTitle}
                    Title={product.Title}
                    Slug={product.Slug}
                    MainImage={product.MainImage}
                    stylesForViewType={stylesForViewType}
                    stylesForDesktopViewType={stylesForDesktopViewType}
                    viewType={viewType}
                    desktopViewType={desktopViewType}
                    CatalogType={product.CatalogType}
                    Properties={product.Properties}
                    ListSalesList={ListSalesList}
                    Id={product.Id}
                    key={product.Id}
                    Prices={product.Prices}
                    oldMin={oldMin}
                    oldMax={oldMax}
                />
            )

            Temp++

            if (Temp !== 0 && Temp % 3 === 0) {
                EqualHeightArray.push(
                    <EqualHeight>{ElemenetsArray}</EqualHeight>
                )
                ElemenetsArray = []
                Temp = 0
            }
        })
        return EqualHeightArray
    }

    return (
        <div className={styles.catalog_product_list_for_desktop}>
            {/* <EqualHeight>
                {firstLoadProducts.ShortProductModels.map((product) => {
                    return (
                        <CatalogProductCard
                            BrandTitle={product.BrandTitle}
                            SeriesTitle={product.SeriesTitle}
                            Title={product.Title}
                            Slug={product.Slug}
                            MainImage={product.MainImage}
                            stylesForViewType={stylesForViewType}
                            stylesForDesktopViewType={stylesForDesktopViewType}
                            viewType={viewType}
                            desktopViewType={desktopViewType}
                            CatalogType={product.CatalogType}
                            Properties={product.Properties}
                            listSales={listSales}
                            Id={product.Id}
                            key={product.Id}
                        />
                    )
                })}
            </EqualHeight> */}
            {List}
        </div>
    )
}

export default CatalogProductListForDesktop
