import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import CatalogProductCard from './CatalogProductCard'

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
}) => {
    console.log('firstLoadProducts', firstLoadProducts)

    const listSales = [
        {
            Title: 'Выбор покупателей',
            Slug: '/',
            Text:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
            BorderColor: '#bd2cd2',
            BackgroundColor: '#fff',
            TextColor: '#000',
        },
        {
            Title: 'Выбор покупателей',
            Slug: '/',
            Text:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
            BorderColor: '#bd2cd2',
            BackgroundColor: '#fff',
            TextColor: '#000',
        },
        {
            Title: 'Выбор покупателей',
            Slug: '/',
            Text:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
            BorderColor: '#bd2cd2',
            BackgroundColor: '#fff',
            TextColor: '#000',
        },
    ]

    // Объект window
    const hasWindow = typeof window !== 'undefined'

    // Ширина экрана
    const width = hasWindow ? window.innerWidth : null

    const [List, SetList] = useState([])
    useEffect(() => {
        SetList(render())
    }, [])

    const render = () => {
        let ElemenetsArray = []
        let EqualHeightArray = []
        let Temp = 0

        firstLoadProducts.ShortProductModels.map((product) => {
            ElemenetsArray.push(
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
                    Prices={product.Prices}
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
