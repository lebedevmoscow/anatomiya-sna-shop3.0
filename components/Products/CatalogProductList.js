import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import CatalogProductCard from './CatalogProductCard'
import { v4 as uuidv4 } from 'uuid'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Utils functions
import { GetPopupsList } from './../../utils/GetPopupsList'
import { GetOptionsList } from './../../utils/GetOptionsList'

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
    newProducts = false,
    IsMobile = false,
}) => {
    const SelectedSizeRedux = useSelector((store) => store.SelectedSizeReducer)

    const [List, SetList] = useState([])

    useEffect(() => {
        if (!IsMobile) {
            SetList(render())
        } else {
            SetList(renderMobile())
        }
    }, [stylesForViewType, stylesForDesktopViewType, firstLoadProducts])

    const render = () => {
        let ElemenetsArray = []
        let EqualHeightArray = []
        let Temp = 0

        const length = firstLoadProducts.ShortProductModels.length

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

            const OptionsList = GetOptionsList(
                product.Prices[0].OptionIds,
                firstLoadProducts.Options
            )

            ElemenetsArray.push(
                <CatalogProductCard
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
                    <EqualHeight key={product.Id}>{ElemenetsArray}</EqualHeight>
                )
                ElemenetsArray = []
                Temp = 0
            }
        })
        return EqualHeightArray
    }

    const renderMobile = () => {
        let ElemenetsArray = []
        let EqualHeightArray = []
        let Temp = 0

        const length = firstLoadProducts.ShortProductModels.length

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

            const OptionsList = GetOptionsList(
                product.Prices[0].OptionIds,
                firstLoadProducts.Options
            )

            ElemenetsArray.push(
                <CatalogProductCard
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
                />
            )

            Temp++

            if (length < 20 && Temp % 2 !== 0) {
                if (length - 1 === index && Temp % 2 === 1) {
                    EqualHeightArray.push(
                        <EqualHeight key={product.Id}>
                            {ElemenetsArray}
                        </EqualHeight>
                    )
                }
            } else {
                if (Temp !== 0 && Temp % 2 === 0) {
                    EqualHeightArray.push(
                        <EqualHeight key={product.Id}>
                            {ElemenetsArray}
                        </EqualHeight>
                    )
                    ElemenetsArray = []
                    Temp = 0
                }
            }
            if (Temp !== 0 && Temp % 2 === 0) {
                EqualHeightArray.push(
                    <EqualHeight key={product.Id}>{ElemenetsArray}</EqualHeight>
                )
                ElemenetsArray = []
                Temp = 0
            }
        })
        return EqualHeightArray
    }

    return <div className={styles.catalog_product_list_for_desktop}>{List}</div>
}

export default CatalogProductListForDesktop
