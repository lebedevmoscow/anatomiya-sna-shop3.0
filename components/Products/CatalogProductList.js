import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// import CatalogProductCard from './CatalogProductCard'
import DesktopSeveral from './../ViewType/DesktopSeveral'
import DesktopSingle from './../ViewType/DesktopSingle'
import MobileSeveral from './../ViewType/MobileSeveral'
import MobileSingle from '../ViewType/MobileSingle'
import ArticleListCatalog from './../Article/ArticleListCatalog'
import { v4 as uuidv4 } from 'uuid'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Utils functions
import { GetPopupsList } from './../../utils/GetPopupsList'
import { GetOptionsList } from './../../utils/GetOptionsList'
import { GetGiftsList } from './../../utils/GetGiftList'

import styles from './../../styles/components/Products/CatalogProductList.module.sass'

const EqualHeight = dynamic(
    () => import('react-equal-height').then((mod) => mod.EqualHeight),
    { ssr: true }
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
    newProducts = false,
    IsMobile = false,
    articles,
    headers,
}) => {
    const SelectedSizeRedux = useSelector((store) => store.SelectedSizeReducer)
    const CatalogCommonReducer = useSelector(
        (store) => store.CatalogCommonReducer
    )

    let subIndex = 0
    const render = () => {
        if (desktopViewType === 'several') {
            let ElemenetsArray = []
            let EqualHeightArray = []
            let Temp = 0

            const length = firstLoadProducts.ShortProductModels.length

            const rand = Math.floor(
                (Math.random() * firstLoadProducts.ShortProductModels.length) /
                    3 +
                    3
            )

            firstLoadProducts.ShortProductModels.map((product, index) => {
                const ListSalesList = GetPopupsList(
                    firstLoadProducts.SaleLabels,
                    product.Prices[0].SaleIds
                )

                const InitialSize = []
                for (let i = 0; i < product.Prices.length; i++) {
                    if (
                        product.Prices[i].SizeSlug ===
                        SelectedSizeRedux.selectedSizeSlug
                    ) {
                        InitialSize.push(product.Prices[i])
                    }
                }

                const Labels = product.ProductLabels

                const Gifts = GetGiftsList(
                    product.Prices[0].GiftIds,
                    firstLoadProducts.GiftLabels
                )

                const OptionsList = GetOptionsList(
                    product.Prices[0].OptionIds,
                    firstLoadProducts.Options
                )

                ElemenetsArray.push(
                    <DesktopSeveral
                        OptionsList={OptionsList}
                        IsMobile={IsMobile}
                        InitialSize={InitialSize}
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
                        Labels={Labels}
                        Gifts={Gifts}
                    />
                )

                Temp++

                if (length < 21 && Temp % 3 !== 0) {
                    if (
                        length - 1 === index &&
                        (Temp % 3 === 1 || Temp % 3 === 2)
                    ) {
                        EqualHeightArray.push(
                            <EqualHeight key={product.Id}>
                                {ElemenetsArray}
                            </EqualHeight>
                        )
                    }
                } else {
                    if (Temp !== 0 && Temp % 3 === 0) {
                        subIndex++
                        if (
                            subIndex === rand &&
                            articles &&
                            articles.length >= 3
                        ) {
                            EqualHeightArray.push(
                                <EqualHeight key={uuidv4()}>
                                    {Articles}
                                </EqualHeight>
                            )
                        }
                        EqualHeightArray.push(
                            <EqualHeight key={product.Id}>
                                {ElemenetsArray}
                            </EqualHeight>
                        )
                        ElemenetsArray = []
                        Temp = 0
                    }
                }
                if (Temp !== 0 && Temp % 3 === 0) {
                    EqualHeightArray.push(
                        <EqualHeight key={product.Id}>
                            {ElemenetsArray}
                        </EqualHeight>
                    )
                    ElemenetsArray = []
                    Temp = 0
                }
            })
            return EqualHeightArray
        }
    }
    return (
        <div className={styles.catalog_product_list_for_desktop}>
            {render()}
        </div>
    )
}

export default CatalogProductListForDesktop
