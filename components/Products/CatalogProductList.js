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
    newProducts = false,
}) => {
    const [List, SetList] = useState([])

    useEffect(() => {
        SetList(render())
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

            if (length < 21) {
                if (
                    length - 1 === index &&
                    (Temp % 3 === 1 || Temp % 3 === 2)
                ) {
                    console.log('poof')
                    EqualHeightArray.push(
                        <EqualHeight key={product.Id}>
                            {ElemenetsArray}
                        </EqualHeight>
                    )
                }
            } else {
                console.log('index', index)
                console.log('length', length)
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
            // if (Temp !== 0 && Temp % 3 === 0) {
            //     EqualHeightArray.push(
            //         <EqualHeight key={product.Id}>{ElemenetsArray}</EqualHeight>
            //     )
            //     ElemenetsArray = []
            //     Temp = 0
            // }
        })
        return EqualHeightArray
    }

    return <div className={styles.catalog_product_list_for_desktop}>{List}</div>
}

export default CatalogProductListForDesktop
