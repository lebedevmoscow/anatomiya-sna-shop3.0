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

    const render = () => {
        if (desktopViewType === 'several') {
            let ElemenetsArray = []

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
                        key={index}
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
            })
            return ElemenetsArray
        }
    }
    return (
        <div className={styles.catalog_product_list_for_desktop}>
            {render()}
        </div>
    )
}

export default CatalogProductListForDesktop
